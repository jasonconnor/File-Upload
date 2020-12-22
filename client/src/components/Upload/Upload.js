import React, {useState} from 'react'

import * as S from './style.js'

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
      setMessage('Unable to upload your file right now. Try again later.')
    }
  }

  return (
    <S.Form onSubmit={onSubmit}>

      { message 
        ? <S.Message>{message}</S.Message> 
        : null 
      }
      
      <S.FileLabel htmlFor='file'>
        { file 
          ? file.name
          : 'Select a File'
        }
      </S.FileLabel>
      <S.FileInput type='file' id='file' onChange={onChange} />

      <S.SubmitForm type='submit'>
        <i class="fas fa-file-upload"></i> Upload
      </S.SubmitForm>
    </S.Form>
  )
}

export default Upload