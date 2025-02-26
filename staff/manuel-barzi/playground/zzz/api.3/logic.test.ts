import logic from "./logic"
import data from "./data"
import { CredentialsError, DuplicityError, NotFoundError } from "./errors"

console.info('SUITE logic')

console.info('TEST registerUser')

console.info('CASE succeeds on new user')

{
    try {
        logic.registerUser('Peter Pan', 'peter@pan.com', 'peterpan', '123123123')

        const user = data.users.find(user => user.username === 'peterpan')
        console.assert(user !== undefined, 'user exists')
        console.assert(user && user.name === 'Peter Pan', 'user name is Peter Pan')
        console.assert(user && user.email === 'peter@pan.com', 'user email is peter@pan.com')
        console.assert(user && user.username === 'peterpan', 'user username is peterpan')
        console.assert(user && user.password === '123123123', 'user password is 123123123')
    } catch (error) {
        console.error(error)
    }
}

console.info('CASE fails on already existing user')

{
    let catchedError

    try {
        data.users.push({
            id: data.uuid(),
            name: 'Wendy Darling',
            email: 'wendy@darling.com',
            username: 'wendydarling',
            password: '123123123'
        })

        logic.registerUser('Wendy Darling', 'wendy@darling.com', 'wendydarling', '12312123')
    } catch (error) {
        catchedError = error
    } finally {
        console.assert(catchedError instanceof DuplicityError, 'catchedError is instance of DuplicityError')
        console.assert(catchedError.message === 'user already exists', 'catechedError message is "user already exists"')
    }
}

console.info('TEST authenticateUser')

console.info('CASE succeeds on existing user')

{
    try {
        data.users.push({
            id: data.uuid(),
            name: 'Pepito Grillo',
            email: 'pepito@grillo.com',
            username: 'pepitogrillo',
            password: '123123123'
        })

        const userId = logic.authenticateUser('pepitogrillo', '123123123')

        console.assert(typeof userId === 'string', 'userId is a string')
        const user = data.users.find(user => user.id === userId)
        console.assert(user !== undefined, 'user exists')
        console.assert(user && user.username === 'pepitogrillo', 'user username is pepitogrillo')
        console.assert(user && user.password === '123123123', 'user password is 123123123')
    } catch (error) {
        console.error(error)
    }
}

console.info('CASE fails on existing user but wrong username')

{
    let catchedError

    try {
        data.users.push({
            id: data.uuid(),
            name: 'James Hook',
            email: 'james@hook.com',
            username: 'jameshook',
            password: '123123123'
        })

        logic.authenticateUser('jameshoo', '123123123')
    } catch (error) {
        catchedError = error
    } finally {
        console.assert(catchedError instanceof CredentialsError, 'catchedError is instance of CredentialsError')
        console.assert(catchedError.message === 'wrong credentials', 'catchedError message is "wrong credentials"')
    }
}

console.info('CASE fails on existing user but wrong password')

{
    let catchedError

    try {
        data.users.push({
            id: data.uuid(),
            name: 'Campa Nilla',
            email: 'campa@nilla.com',
            username: 'campanilla',
            password: '123123123'
        })

        logic.authenticateUser('campanilla', '12312312')
    } catch (error) {
        catchedError = error
    } finally {
        console.assert(catchedError instanceof CredentialsError, 'catchedError is instance of CredentialsError')
        console.assert(catchedError.message === 'wrong credentials', 'catchedError message is "wrong credentials"')
    }
}

console.info('CASE fails non existing user')

{
    let catchedError

    try {
        logic.authenticateUser('mickeymouse', '123123123')
    } catch (error) {
        catchedError = error
    } finally {
        console.assert(catchedError instanceof CredentialsError, 'catchedError is instance of CredentialsError')
        console.assert(catchedError.message === 'wrong credentials', 'catchedError message is "wrong credentials"')
    }
}

console.info('TEST getUserName')

console.info('CASE succeeds on existing user')

{
    try {
        const userId = data.uuid()

        data.users.push({
            id: userId,
            name: 'Pedro Picapiedra',
            email: 'pedro@picapiedra.com',
            username: 'pedropicapiedra',
            password: '123123123'
        })

        const name = logic.getUserName(userId)

        console.assert(name === 'Pedro Picapiedra', 'name is Pedro Picapiedra')
    } catch (error) {
        console.error(error)
    }
}

console.info('CASE fails on non-existing user')
debugger
{
    let catchedError

    try {
        const userId = data.uuid()

        logic.getUserName(userId)
    } catch (error) {
        catchedError = error
    } finally {
        console.assert(catchedError instanceof NotFoundError, 'catchedError is instance of NotFoundError')
        console.assert(catchedError.message === 'user not found', 'catchedError.message is "user not found"')
    }
}