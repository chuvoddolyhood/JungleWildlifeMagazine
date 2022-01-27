import React,{useEffect,useState}  from 'react'
import styled from 'styled-components';
import './page.css';
import './slider.css';
import logo1 from './../img/logo1.png';
import {Link as Link2} from 'react-router-dom';
import List1 from './List1';
import {Link as Link1} from 'react-scroll';
import Slider from 'react-slick';
import img1 from "./../img/img2.png";
import img2 from "./../img/img3.png";
import hung from "./../img/hung2.png";
import nghia from "./../img/nghia.png";
import SearchIcon from '@mui/icons-material/Search';
import "./list.css";
import fireDb from "../firebase";

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
const Title1 = styled.h2`
width: 350px;

border-bottom: 3px solid rgb(3, 28, 28);
font-family: sans-serif;
letter-spacing: 0.1em;
margin-left:30px;
`
const Main = styled.div`

`
const Container1 = styled.div`
   margin-left: 32px;                                           
`



const Navbar = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1300,
        
      };
      const [data,setData] = useState({});

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



    return (
        <Main>
       <Container>
           <Wrapper>
           <Logo className='Logo'>
              <img src={logo1}></img>
              </Logo>
              <Home className='Home'>
                  TRANG CHỦ
              </Home>
              <List className='List'>
                <Link1 activeClass="active" className="test1" to="card" spy={true} smooth={true} duration={500} >  DANH SÁCH </Link1>
              </List >
              <About className='About'>
              <Link1 activeClass="active" className="test1" to="Lienhe" spy={true} smooth={true} duration={800} >  LIÊN HỆ </Link1>
              </About>
              
              
              <Search>
                <form>
                <input className='input' placeholder='TÌM KIẾM'
               
                />
                </form>
                <i class="fas fa-search" type="submit"></i>
              </Search>
              
           </Wrapper>
       </Container>
       <div className='slider'>
        <div className='content'>

        </div>
           <div className='slideshow'>
      
        <Slider {...settings}>
          <div className='slideshow1'>
            <h3 className='imgslide'><img src={img1}></img></h3>
          </div>
          <div>
          <h3 className='imgslide'>  <img src={img2}></img></h3>
          </div>
         
        </Slider>
      </div>
      </div>
        <Title1>
        
                    DANH SÁCH ĐỘNG VẬT
          
       </Title1>
          <Container1>
        {Object.keys(data).map((id) =>{
          return(
            <div className="card" key={id}>
            <div className="card-body">
              <img src={data[id].img1}></img>
              <h3>{data[id].tenDiaphuong}</h3>
                <Link2 to={`/view/${id}`} target="_blank"><button className="card-btn" ><SearchIcon /></button></Link2> 
             
  
            </div>
          </div>
       
          )
        })}
          
      </Container1>
      
      <div className='Lienhe'>
     
          <div className='thanhvien'>
            <div className='avt'>
                <img src={hung}></img>
            </div>
            <div className='tenThanhvien'>
            <span>Nguyễn Bội Hưng</span>
            </div>
            <div className='tughi'>
            <span>Trong trận đấu với Reims rạng sáng nay, các cầu thủ Paris Saint-Germain đã ra sân với những chiếc áo đấu in tiếng TQ. Bởi trận đấu này có sự hiện diện của Đại Sứ Trung Quốc tại Pháp và nghệ sĩ dương cầm Lang Lang tới dự khán trận đấu.</span>
            </div>
          </div>

          <div className='thanhvien'>
            <div className='avt'>
                <img src={nghia}></img>
            </div>
            <div className='tenThanhvien'>
                <span>Trần Nhân Nghĩa</span>

            </div>
            <div className='tughi'>
                <span>Trong trận đấu với Reims rạng sáng nay, các cầu thủ Paris Saint-Germain đã ra sân với những chiếc áo đấu in tiếng TQ. Bởi trận đấu này có sự hiện diện của Đại Sứ Trung Quốc tại Pháp và nghệ sĩ dương cầm Lang Lang tới dự khán trận đấu. </span>
            </div>
          </div>


          <div className='thanhvien'>
            <div className='avt'>
                <img src={nghia}></img>
            </div>
            <div className='tenThanhvien'>
                <span>Phạm Hoàng Minh</span>
            </div>
            <div className='tughi'>
              <span>Trong trận đấu với Reims rạng sáng nay, các cầu thủ Paris Saint-Germain đã ra sân với những chiếc áo đấu in tiếng TQ. Bởi trận đấu này có sự hiện diện của Đại Sứ Trung Quốc tại Pháp và nghệ sĩ dương cầm Lang Lang tới dự khán trận đấu.</span>
            </div>
          </div>


      </div>


       </Main>
    )
}





export default Navbar
