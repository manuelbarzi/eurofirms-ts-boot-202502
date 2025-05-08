import { useState } from "react"

import { Register } from "./view/Register"
import { Login } from "./view/Login"
import { Home } from "./view/Home"

function App() {
  const [view, setView] = useState("register")

  const handleLoginClicked = () => setView("login")

  const handleRegisterClicked = () => setView("register")

  const handleUserRegistered = () => {
    alert("User registered")

    setView("login")
  }

  const handleUserLoggedIn = () => setView("home")

  return <>
    {view === "register" && <Register onLoginClicked={handleLoginClicked} onUserRegistered={handleUserRegistered} />}

    {view === "login" && <Login onRegisterClicked={handleRegisterClicked} onUserLoggedIn={handleUserLoggedIn} />}

    {view === "home" && <Home />}
  </>
}

export default App
