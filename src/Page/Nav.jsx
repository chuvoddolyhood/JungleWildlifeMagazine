import React,{useEffect,useState}  from 'react'
import styled from 'styled-components';
import './page.css';
import './slider.css';
import logo1 from './../img/logoff.png';
import {Link as Link2} from 'react-router-dom';
import List1 from './List1';
import {Link as Link1} from 'react-scroll';
import Slider from 'react-slick';
import img1 from "./../img/img2.png";
import img2 from "./../img/img3.png";
import hung from "./../img/hung2.png";
import nghia from "./../img/nghia.png";
import minh from "./../img/minh.png";
import SearchIcon from '@mui/icons-material/Search';
import "./list.css";
import fireDb from "../firebase";
import { useHistory } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';


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
const Nav = () => {
    const [data,setData] = useState({});
    const [search,setSearch]=useState("");
    
    const history =useHistory();
useEffect(()=>{
  fireDb.child(`junglewildlifemagazine`).on("value",(snapshot)=>{
    if(snapshot.val() !== null ){
      setData({...snapshot.val() });
    }else{
      setData({});
    }
   
  });
  return () =>{
    setData({});
  };
}, []);

const handleSubmit = (e) =>{
e.preventDefault();
history.push(`/search?tenDiaphuong=${search}`);
setSearch("");
};

  return <div>
       
       <Container>
           
           <Wrapper>
           <Logo className='Logo'>
              <img src={logo1}></img>
              </Logo>
              <Home className='Home'>
              <Link2 to={"/"}>TRANG CHỦ</Link2>
              </Home>
              <List className='List'>
                <Link1 activeClass="active" className="test1" to="card-body" spy={true} smooth={true} duration={500} >  <Link2 to={"/"}>DANH SÁCH</Link2> </Link1>
              </List >
              <About className='About'>
              <Link1 activeClass="active" className="test1" to="Lienhe" spy={true} smooth={true} duration={800} >  <Link2 to={"/"}>LIÊN HỆ</Link2> </Link1>
              </About>
              
              
              <Search>
                <form onSubmit={handleSubmit}>
                <input className='input' placeholder='TÌM KIẾM' 
                type="text" 
                onChange={(e)=>setSearch(e.target.value)}
                value={search} 
               

                />
                </form>
                <i class="fas fa-search"></i>
              </Search>
              
           </Wrapper>
       </Container>
  </div>;
};

export default Nav;
