require('dotenv').config()

const express = require ('express')

const cors = require('cors')

const http = require('http')

const router = require('./src/routes')

const app = express()

const server = http.createServer(app)

const port = 5000

app.use(express.json())

app.use(cors())

app.use('/api/v1/', router)

app.use('/uploads', express.static('uploads'))

server.listen(port, () => console.log(`server running on port : ${port}`))