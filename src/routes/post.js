const express = require('express')

const controller = require('../controllers/post')

const router = express.Router()

router.get('/', controller.index)

router.post('/new', controller.create)

module.exports = router