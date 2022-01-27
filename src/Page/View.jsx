import React,{useEffect,useState} from 'react';
import fireDb from '../firebase';
import { useHistory,useParams} from 'react-router-dom';
import './view.css';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import logo1 from './../img/logo1.png';
import {Link as Link1} from 'react-scroll';
import {Link as Link2} from 'react-router-dom';
const Container = styled.div`
    height: 80px;
    background-color:#2C6C70;
   `
const Wrapper = styled.div`

 display:flex;
 
`

const Home =styled.div`
font-family: sans-serif;
font-size:13px;
color:white;
 letter-spacing:0.15em;
 padding: 30px 30px 20px 30px;
 font-weight: bold;
`
const About = styled.div`
font-weight: bold;
font-family: sans-serif;
font-size:13px;
color:white;
 letter-spacing:0.15em;
 padding: 30px 30px 20px 30px;
`
const List = styled.div`
font-weight: bold;
font-family: sans-serif;
font-size:13px;
color:white;
 letter-spacing:0.15em;
 padding: 30px 30px 20px 30px;
`
const Logo = styled.div`
width:400px;
color:white;
`
const Search = styled.div`
border: 0.5px solid white;;
display:flex;
width: 250px;
height:25px;
color:white;
margin-top: 25px;
margin-left:60px;


`

const View = () => {
  const [an,setAn] = useState({});
  const {id} = useParams();

  useEffect(() => {
    fireDb.child(`junglewildlifemagazine/${id}`).get().then((snapshot) => {
      
      if(snapshot.exists()){
        setAn({...snapshot.val()});
      }else{
        setAn({});
      }
    });
  },[id]);

  console.log("an",an);
  return (

    <div>
       <Link2 to={`/`}><div className='exit'>
          <CloseIcon />
       </div></Link2>
    <div className='wrapper1'>
      
       <div className='name'>
       <span className="title">{an.name}</span>
       </div>
       <div className='image'>
       
        <img src={an.img}></img>
       </div>
    </div>
    </div>



  );
};

export default View;
