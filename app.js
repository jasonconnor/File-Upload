const express = require('express')

const connect = require('./config/db')
const postRouter = require('./src/routes/post')

const app = express()

// connect to db
connect

// routes
app.use('/', postRouter)

app.listen(80, () => {
  console.log('Server started.')
})