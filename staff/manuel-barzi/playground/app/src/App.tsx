import { useState } from "react"

import { Register } from "./view/Register"
import { Login } from "./view/Login"

function App() {
  const [view, setView] = useState("login")

  return <>
    {view === "register" && <Register />}

    {view === "login" && <Login />}
  </>
}

export default App
