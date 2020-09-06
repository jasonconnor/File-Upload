const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/file'

const connect = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log('Connected to MongoDB.')
    })
  } catch(error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connect()