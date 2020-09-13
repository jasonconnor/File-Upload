import React, {useState} from 'react'

const Upload = () => {
  const [file, setFile] = useState('')
  const [message, setMessage] = useState('')

  const onChange = (event) => {
    setFile(event.target.files[0])
  }

  const onSubmit = async (event) => {
    event.preventDefault()
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

      <span>{message}</span>

      <label>Upload a file:</label>
      <input type='file' onChange={onChange} />

      <input type='submit' value='Upload' />
    </form>
  )
}

export default Upload