import React from 'react'
import styled from 'styled-components'

const MyfeedBack = () => {
  return (
    <Box>
    <h3>소희</h3><p>참여를 열심히 하시는것 같아 보기 좋습니다</p>
    </Box>  
  )
}

export default MyfeedBack

const Box = styled.div`
    /* width: 100%;
    width: 600px;
    margin: 10px 40px 0 40px;
    height: 50px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 10px;
    border-radius: 10px;
    border-bottom: solid 0.5px #8c8787;
    display: flex;
    padding: 0 40px 0 40px; */
    border: none;
    width: 92%;
    min-width: 440px;
    align-items: center;
  justify-content: center;
    margin: 0.5% 1% 0.1% 1%;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 10px;
    border-radius: 10px;
    border-bottom: solid 0.5px #8c8787;
    display: flex;
    justify-content: space-between;
    padding: 0 3% 0 3%;
    h3{
        line-height: 13px;
        margin-right: 25px;
    }
`