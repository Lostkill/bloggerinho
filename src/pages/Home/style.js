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

export const FeedContainer = styled.div`
  background: #fcfcfc;
  width: 100%;
  height: 75vh;
  padding: 78px 19px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ff5c67; 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b30000; 
  }
`
export const NothingHere = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    width: 250px;
    height: 250px;
  }

  span {
    font-size: 22px;
  }
`
