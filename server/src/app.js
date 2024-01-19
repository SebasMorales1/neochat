require('dotenv').config()

const express = require('express')
const { createServer } = require('node:http')
const morgan = require('morgan')
const DBconnection = require('./db.js') 
const cors = require('cors')

const authRoutes = require('./routes/auth.routes.js')

const app = express()
const server = createServer(app)

DBconnection
  .then(() =>console.log('>>> Connected to database'))
  .catch((error) => console.error(`Error when connect to database: ${error}`))

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(authRoutes)

module.exports = server