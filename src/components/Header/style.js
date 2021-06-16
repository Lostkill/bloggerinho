import styled from 'styled-components'

export const Header = styled.header`
  background: #EF3340;
  width: 100%;
  position: fixed;
`

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 24px;
`

export const Title = styled.h1`
  color: #DFC970;
  font-size: 28px;
  font-family: 'Quicksand', sans-serif;
`

export const NewPostBtn = styled.button`
  background-color: #DFC970;
  border: none;
  border-radius: 50px;
  width: 100px;
  height: 37px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Quicksand', sans-serif;

  :hover {
    background-color: #cb2d38;
    color: white;
    cursor: pointer;
  }

  :active {
    background-color: #3E342A;
    cursor: pointer;
  }
`
