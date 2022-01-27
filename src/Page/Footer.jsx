import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
margin-left:30px;

`
const Title = styled.h1`
width: 1200px;
border-top: 3px solid rgb(3, 28, 28);
font-family:  sans-serif;
letter-spacing: 0.1em;
`
const Content = styled.div`
font-family:  sans-serif;
font-size:20px;
`

const Footer = () => {
  return (
        <Container>
                <Title>
                Jungle Wildlife Magazine
                </Title>
                <Content>
                <p>Trần Nhân Nghĩa</p>
                <p>Nguyễn Bội Hưng</p>
                <p>Phạm Hoàng Minh</p>
                </Content>
        </Container>

  );
};

export default Footer;
