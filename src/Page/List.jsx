
import React from 'react'
import styled from 'styled-components';

import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';



const Info = styled.div`
opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;


`
const Container = styled.div`
flex: 1;
margin: 05x;
min-width: 200px;
height: 300px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

&:hover ${Info}{
  opacity: 1;
  height:310px;
  
}



`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`
const Image = styled.img`
height: 50%;
z-index: 2;
`

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`




const List = ({item}) => {
    return (
        
        <div>
            
            <Container>
               <Circle/>
               <Image src="https://firebasestorage.googleapis.com/v0/b/junglewildlifemagazine.appspot.com/o/image%2F01%2FIchthyophis%20bannanicus-LQNgon-009%20-%20Ng%C3%B4n%20L%C3%A2m%20Quang.JPG?alt=media&token=2997741e-9701-4948-a50d-c693f4874c57"/>
               <Info>
                   <Icon>
                 <Button id={item.id} > <SearchIcon/></Button>
                   </Icon>
             
               </Info>
            </Container>
        </div>
    )
}

export default List
