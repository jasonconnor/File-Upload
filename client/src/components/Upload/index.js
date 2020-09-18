import React, {useState} from 'react'

import './upload.sass'

const Upload = () => {
  const [file, setFile] = useState('')
  const [message, setMessage] = useState('')

  const onChange = (event) => {
    setFile(event.target.files[0])
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setFile('')
    let formData = new FormData()

    formData.append('file', file)

    try {
      await fetch('/upload', {
        method: 'POST',
        body: formData
      }).then(res => res.json())
        .then(json => (json.hasOwnProperty('error'))
          ? setMessage(json.error)
          : setMessage(json.post.file + ' was uploaded.')
        )
    } catch(error) {
      console.log(error)
      setMessage('Unable to upload your file right now.')
    }
  }

  return (
    <form onSubmit={onSubmit}>

      { message 
        ? <span className='message'>{message}</span> 
        : null 
      }
      
      <label for='file'>
        { file 
          ? file.name
          : 'Select a File'
        }
      </label>
      <input id='file' type='file' onChange={onChange} />

      <button type='submit'>
        <i class="fas fa-file-upload"></i> Upload
      </button>
    </form>
  )
}

export default Upload