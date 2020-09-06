const express = require('express')
const multer = require('multer')

const controller = require('../controllers/post')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/jpeg') {
      cb(null, false)
    } else {
      cb(null, true)
    }
  }
})

const router = express.Router()

router.get('/', controller.index)

router.post('/new', upload.single('file'), controller.create)

module.exports = router