import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
   
   margin-left:30px;
`

const Title1 = styled.h2`
width: 350px;
border-bottom: 3px solid rgb(3, 28, 28);
font-family: sans-serif;
letter-spacing: 0.1em;
`

const Title = () => {
    return (
        <Container>
          <Title1>
                    DANH SÁCH ĐỘNG VẬT
          </Title1>
         
          
        </Container>
    )
}

export default Title
