import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
  }

  main {
    display: flex;
    justify-content: center;
  }
`

export default GlobalStyle