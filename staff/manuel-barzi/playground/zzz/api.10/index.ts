import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import jwt from "jsonwebtoken"
import { errors } from "com"
import { logic } from "./logic"

const { SystemError, ValidationError, DuplicityError, NotFoundError, CredentialsError } = errors

const {
    MONGO_URL,
    PORT,
    JWT_SECRET
} = process.env

mongoose.connect(MONGO_URL!)
    .then(() => {
        const api = express()

        api.use(cors())

        api.get("/", (req, res) => {
            res.send("Hello, API!")
        })

        // TODO implement routes

        const jsonBodyExpress = express.json()

        api.post("/users", jsonBodyExpress, (req, res) => {
            try {
                const { name, email, username, password } = req.body

                logic.registerUser(name, email, username, password)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        let status = 500
                        let errorName = SystemError.name

                        if (error instanceof DuplicityError) {
                            status = 409
                            errorName = DuplicityError.name
                        }

                        res.status(status).json({ error: errorName, message: error.message })
                    })
            } catch (error) {
                let status = 500
                let errorName = SystemError.name

                if (error instanceof ValidationError) {
                    status = 400
                    //errorName = error.constructor.name
                    errorName = ValidationError.name
                }

                res.status(status).json({ error: errorName, message: (error as Error).message })
            }
        })

        api.post("/users/auth", jsonBodyExpress, (req, res) => {
            try {
                const { username, password } = req.body

                logic.authenticateUser(username, password)
                    .then(userId => {
                        const token = jwt.sign({ sub: userId }, JWT_SECRET!)

                        res.json(token)
                    })
                    .catch(error => {
                        let status = 500
                        let errorName = SystemError.name

                        if (error instanceof NotFoundError) {
                            status = 404
                            errorName = NotFoundError.name
                        } else if (error instanceof CredentialsError) {
                            status = 401
                            errorName = CredentialsError.name
                        }

                        res.status(status).json({ error: errorName, message: error.message })
                    })
            } catch (error) {
                let status = 500
                let errorName = SystemError.name

                if (error instanceof ValidationError) {
                    status = 400
                    //errorName = error.constructor.name
                    errorName = ValidationError.name
                }

                res.status(status).json({ error: errorName, message: (error as Error).message })
            }
        })

        api.get("/users/self", (req, res) => {
            try {
                const authorization = req.headers.authorization

                if (!authorization) {
                    res.status(400).json({ error: SystemError.name, message: "no authorization received" })

                    return
                }

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET!)

                logic.getUser(userId as string)
                    .then(user => res.json(user))
                    .catch(error => {
                        let status = 500
                        let errorName = SystemError.name

                        if (error instanceof NotFoundError) {
                            status = 404
                            errorName = NotFoundError.name
                        }

                        res.status(status).json({ error: errorName, message: error.message })
                    })
            } catch (error) {
                let status = 500
                let errorName = SystemError.name

                if (error instanceof ValidationError) {
                    status = 400
                    //errorName = error.constructor.name
                    errorName = ValidationError.name
                }

                res.status(status).json({ error: errorName, message: (error as Error).message })
            }
        })

        api.listen(PORT, () => console.log("API is up"))
    })