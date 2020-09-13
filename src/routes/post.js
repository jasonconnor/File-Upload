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

const upload = multer({storage: storage})

const router = express.Router()

router.get('/', controller.index)

router.post('/upload', upload.single('file'), controller.create)

module.exports = router