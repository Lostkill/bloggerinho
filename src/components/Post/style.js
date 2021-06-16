import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 200px;
  margin: 20px 0px;
  word-wrap: break-word;
`

export const Delete = styled.div`
  color: white;
  background: #EF3340;
  padding: 15px;
  width: 12px;
  height: 12px;
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: #cb2d38;
    cursor: pointer;
  }

  :active {
    background: #3E342A;
    cursor: pointer;
  }
`

export const UserInfoText = styled.span`
  font-family: 'Quicksand', sans-serif;
  ${({ color }) => color ? `color: ${color}` : 'color: #000000'};
  ${({ fontSize }) => `font-size: ${fontSize}px`};
  ${({ fontWeight }) => `font-weight: ${fontWeight}`};
  ${({ uppercase }) => uppercase && 'text-transform: uppercase'};
`
