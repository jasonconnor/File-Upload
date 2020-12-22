import React, {Fragment} from 'react'

import Header from './Header/Header'
import Main from './Main/Main'
import Upload from './Upload/Upload'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main>
        <Upload />
      </Main>
    </Fragment>
  )
}

export default App