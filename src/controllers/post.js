const Post = require('../models/post')

exports.index = (req, res, next) => {
  console.log('success!')
}

exports.create = async (req, res, next) => {
  const file = req.file
  const post = new Post({
    file: file.filename
  })

  try {
    await post.save()
    res.status(200).json(post)
  } catch(error) {
    res.status(422).json(error)
  }
}