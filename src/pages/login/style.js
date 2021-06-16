import styled from 'styled-components'

export const Container = styled.div`
  background: #cb2d38;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginFormContainer = styled.div`
  width: 350px;
  height: 350px;
  background: #ffffffa1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 30px;
`

export const Title = styled.h1`
  color: #ffffff;
  font-size: 42px;
  font-family: 'Quicksand', sans-serif;
`

export const FieldWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: 10px 0px;
  width: 100%;
`

export const TextField = styled.input`
  background: transparent;
  border-bottom-color: white;
  border-width: 0px 0px 3px 0px;
  width: 70%;
  border-radius: 10px;
  padding: 2px 12px;
  color: #3E342A;

  :focus {
    outline: none;
  }
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
  margin-top: 50px;

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
