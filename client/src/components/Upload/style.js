import styled from 'styled-components'

export const Form = styled.form`
  align-items: center;
  display: flex;
  height: 400px;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
`

export const Message = styled.span`
  background: lightyellow;
  border-left: 5px solid yellow;
  box-sizing: border-box;
  padding: 5px 10px;
  text-align: center;
  width: 100%;
`

export const FileLabel = styled.label`
  align-items: center;
  background: lightblue;
  border: 3px dashed #06f;
  border-radius: 3px;
  color: #06f;
  display: flex;
  font-size: 18px;
  justify-content: center;
  height: 250px;
  width: 250px;
`

export const FileInput = styled.input`
  display: none;
`

export const SubmitForm = styled.button`
  background: #06f;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  padding: 15px 30px;
`