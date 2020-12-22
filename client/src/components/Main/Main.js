import React from 'react'

import * as S from './style'

const Main = ({children}) => {
  return (
    <S.Main>
      <S.Wrapper>
        {children}
      </S.Wrapper>
    </S.Main>
  )
}

export default Main