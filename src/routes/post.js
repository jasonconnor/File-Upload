const express = require('express')
const multer = require('multer')

const controller = require('../controllers/post')
const today = require('../../config/date')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './client/public/uploads')
  },
  filename: (req, file, cb) => {
      cb(null, today + '-' + file.originalname)
  }
})

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/jpeg') {
      req.filetypeError = 'Invalid file type. Try a jpeg.'
      cb(null, false)
    } else {
      cb(null, true)
    }
  }
})

const router = express.Router()

router.get('/', controller.index)

router.post('/upload', upload.single('file'), controller.create)

module.exports = router