import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f4f4f4;
  height: 400px;
  margin: 100px 0px;
  padding: 0px 10px;
`

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`

export const UserIconContainer = styled.div`
  color: white;
  background: #EF3340;
  padding: 20px;
  width: 70px;
  height: 70px;
  border-radius: 80px;
  margin: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UserTotalPostsContainer = styled.div`
  width: 100%;
  height: 30px;
  background: #EF3340;
  text-align: center;
  align-items: center;
  margin: 70px 0px 10px 0px;
`

export const UserInfoText = styled.span`
  font-family: 'Quicksand', sans-serif;
  ${({ color }) => color ? `color: ${color}` : 'color: #000000'};
  ${({ fontSize }) => `font-size: ${fontSize}px`};
  ${({ fontWeight }) => `font-weight: ${fontWeight}`};
  ${({ uppercase }) => uppercase && 'text-transform: uppercase'};
`

export const LogoutBtn = styled.div`
  width: 100%;
  height: 30px;
  background: #EF3340;
  text-align: center;

  :hover {
    background: #cb2d38;
    cursor: pointer;
  }

  :active {
    background: #3E342A;
    cursor: pointer;
  }
`
