const express = require('express')

const postRouter = require('./src/routes/post')

const app = express()

app.use('/', postRouter)

app.listen(80, () => {
  console.log('Server started.')
})