import React, {Fragment} from 'react'

import './app.sass'

import Upload from './Upload'


const App = () => {
  return (
    <Fragment>
    <header>
      <div className='wrapper'>
        <h1>File Upload</h1>
      </div>
    </header>
    <main>
      <div className='wrapper'>
        <Upload />
      </div>
    </main>
    </Fragment>
  )
}

export default App;
