const Post = require('../models/post')

exports.index = (req, res, next) => {
  console.log('success!')
}

exports.create = async (req, res, next) => {
  if (req.hasOwnProperty('filetypeError')) {
    return res.status(422).json({
      error: req.filetypeError
    })
  } else if (!req.hasOwnProperty('file')) {
     return res.status(400).json({
       error: 'No file was selected.'
    })
  }

  let file = req.file

  let post = new Post({
    file: file.filename
  })

  try {
    await post.save()
    res.status(200).send({post})
  } catch(error) {
    res.status(422).json({error})
  }
}