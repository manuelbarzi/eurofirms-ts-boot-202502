import express from 'express'

const api = express()

api.get('/', (req, res) => {
    res.send('Hello, API!')
})

// TODO implement routes

api.listen(8080, () => console.log('API is up'))