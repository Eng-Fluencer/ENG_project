import React from 'react'
import styled from 'styled-components'

const MainText = () => {
  return (
    <Container>
        <TextBox>
            SERVICES
        </TextBox>
        <Box>
            <Boximg></Boximg>
            <Boxtext>
                <h3>양방향 소통이 가능합니다</h3>
                <p>동등한 위치에서의 양방향 소통으로 편안하게 대화 할 수 있습니다</p>
            </Boxtext>
        </Box>
        <Box>
            <Boximg2></Boximg2>
            <Boxtext>
                <h3>양방향 소통이 가능합니다</h3>
                <p>동등한 위치에서의 양방향 소통으로 편안하게 대화 할 수 있습니다</p>
            </Boxtext>
        </Box>
        <Box>
            <Boximg3></Boximg3>
            <Boxtext>
                <h3>양방향 소통이 가능합니다</h3>
                <p>동등한 위치에서의 양방향 소통으로 편안하게 대화 할 수 있습니다</p>
            </Boxtext>
        </Box>
    </Container>
  )
}

export default MainText

const Container = styled.div`
border: none;
  height: auto;
  width: 90%;
  margin-top: 10%;
  margin-bottom:15% ;
  margin-left: 5%;
  margin-right: 5%;
  font-size: 40px;
`

const TextBox = styled.h1`
border: none;
width: 100%;
min-width: 200px;
    text-align: center;
    color: #9c9d9c;
    font-size: 2.5rem;
    margin-bottom: 4%;
`

const Box = styled.article`
border: none;
   transition: all 0.5s;
   box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 20px;
   &:hover {
     box-shadow: rgba(0, 0, 0, 0.10) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
   }
   border-radius: 5px;
   cursor: pointer;
   margin-left: 2rem;
   margin-right: 2rem;
   margin-bottom: 2rem;
   border-radius: 15px;
   display: flex;
   font-size: 1.1rem;
`;

const Boximg = styled.div`
border: none;
    width: 40%;
    min-height: 200px;
    background-image: url('https://cdn.pixabay.com/photo/2021/05/15/19/40/computer-6256527__480.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 15px;
`

const Boximg2 = styled.div`
 border: none;
    width: 40%;
    min-height: 200px;
    background-image: url('https://cdn.pixabay.com/photo/2022/01/17/14/10/video-conference-6944846__480.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 15px;
`

const Boximg3 = styled.div`
border: none;
    width: 40%;
    min-height: 200px;
    background-image: url('https://cdn.pixabay.com/photo/2020/06/28/15/26/video-conference-5349687__480.png');
    background-size: cover;
    background-position: center;
    border-radius: 15px;
`
    
const Boxtext = styled.div`
border: none;
width: 50%auto;
min-width: 200px;
    margin-left: 20%;
    line-height: 2.5rem;
    font-size: 1.05rem;
`
