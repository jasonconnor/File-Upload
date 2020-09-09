const Post = require('../models/post')

exports.index = (req, res, next) => {
  console.log('success!')
}

exports.create = async (req, res, next) => {
  let file = req.file

  if (!file) {
    return res.status(400).json({
      message: 'No file was uploaded.'
    })
  }
  
  if (file.mimetype !== 'image/jpeg') {
    return res.status(400).json({
      message: 'Invalid filetype.'
    })
  }

  let post = new Post({
    file: file.filename
  })

  try {
    await post.save()
    res.status(200).json(file)
  } catch(error) {
    res.status(422).json(error)
  }
}