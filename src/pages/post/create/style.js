import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  width: 1200px;
  margin: 0 auto;
`

export const UserInfoContainer = styled.div`
  width: 350px;
  padding: 24px;
`

export const FormContainer = styled.div`
  background: #fcfcfc;
  width: 100%;
  height: 70vh;
  padding: 78px 19px;
  overflow: auto;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const TextFieldWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 10px 0px;
  width: 100%;
`

export const TextField = styled.input`
  background: transparent;
  border-bottom-color: #cb2d38;
  border-width: 0px 0px 3px 0px;
  width: 70%;
  padding: 2px 12px;
  color: #3E342A;

  :focus {
    outline: none;
  }
`

export const TextArea = styled.textarea`
  padding: 10px;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
  width: 71%;

  font-size: .8rem;
  letter-spacing: 1px;
  resize: none;
`

export const ButtonWrapper = styled.div`
  margin-top: 45px;
  display: flex;
`

export const EnterBtn = styled.button`
  background-color: #cb2d38;
  border: none;
  border-radius: 50px;
  width: 100%;
  height: 37px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Quicksand', sans-serif;

  :hover {
    background-color: #ff5c67;
    color: white;
    cursor: pointer;
  }

  :active {
    background-color: #3E342A;
    cursor: pointer;
  }
`

export const CancelBtn = styled.button`
  background-color: #e0e0e0;
  border: none;
  border-radius: 50px;
  width: 100%;
  height: 37px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Quicksand', sans-serif;
  margin: 0px 10px;

  :hover {
    background-color: #cccccc;
    color: white;
    cursor: pointer;
  }

  :active {
    background-color: #3E342A;
    cursor: pointer;
  }
`
