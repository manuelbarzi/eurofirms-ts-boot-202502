type User = {
    name: string,
    email: string,
    username: string,
    password: string
}

let peter: User
let wendy: User

peter = {
    name: "Peter Pan",
    email: "peter@pan.com",
    username: "peterpan",
    password: "123123123"
}

wendy = {
    name: "Wendy Darling",
    email: "wendy@darling.com",
    username: "wendydarling",
    password: "123123123"
}

console.log(peter)
console.log(wendy)