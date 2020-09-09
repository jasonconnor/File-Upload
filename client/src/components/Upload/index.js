import React from 'react'

const Upload = () => {
  return (
    <form>
      <label>Upload a file:</label>
      <input type='file' />

      <input type='submit' value='Upload' />
    </form>
  )
}

export default Upload