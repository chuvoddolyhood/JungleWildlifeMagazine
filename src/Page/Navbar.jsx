import React,{useEffect,useState}  from 'react'
import styled from 'styled-components';
import './page.css';
import './slider.css';
import logo1 from './../img/logoff.png';
import l1 from './../img/l1.jpg';
import l2 from './../img/l2.jpg';
import l3 from './../img/l3.jpg';
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
import ScrollToTop from 'react-router-scroll-top';
const Container = styled.div`
    height: 80px;
    background-color:#2C6C70;
    position: fixed;
    top:0;
    z-index: 10;
    width:100%;
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
        autoplaySpeed: 1800,
        
      };
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
       <div className='slider'>
        <div className='content'>
          <h3>Về chúng tôi</h3>
          <h1>Jungle Wildlife Magazine</h1>
          <p>Là một tạp chí trực tuyến trưng bày hình ảnh và thông tin tất cả các động vật của rừng nhiệt đới trong khu vực Đồng bằng Sông Cửu Long cũng như trong hệ sinh thái động vật sinh sống trong khu vực châu thổ sông Mekong. Chúng tôi mang sứ mệnh truyền tải thông điệp về sự sẻ chia chung tay bảo vệ nguồn đa dạng sinh học và thúc đẩy quá trình bảo tồn động thực vật quý hiếm trên thế giới</p>
        </div>
           <div className='slideshow'>
      
        <Slider {...settings}>
          <div className='slideshow1'>
            <h3 className='imgslide'><img src={l1}></img></h3>
          </div>
          <div>
          <h3 className='imgslide'>  <img src={l2}></img></h3>
          </div>
          <div>
          <h3 className='imgslide'>  <img src={l3}></img></h3>
          </div>
         
        </Slider>
      </div>
      </div>
        <div className='title1'>
        
                  <h2>  DANH SÁCH ĐỘNG VẬT </h2>
          
       </div>
          <Container1>
        {Object.keys(data).map((id) =>{
          return(
            <div className="card" key={id}>
            <div className="card-body">
              <img src={data[id].img1}></img>
              <h3>{data[id].tenDiaphuong}</h3>
              <Link1 activeClass="active" className="test1" to="logo" spy={true} smooth={true} duration={800} > <Link2 to={`/view/${id}`} ><button className="card-btn" ><SearchIcon /></button></Link2> </Link1>
                 
             
  
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
            <span>Chủ tịch hiệp hội động vật hoang dã<br/> Việt Nam.</span>
            </div>
            <div className='kinhnghiem'>
              <span>Ông Nguyễn Bội Hưng, người sáng lập và là Chủ tịch hiệp hội động vật hoang dã Việt Nam, đồng sáng lập Jungle Wildlife Magazine. Ông Hưng có hơn 20 năm kinh nghiệm trong lĩnh vực phát triển đa dạng sinh học và có kiến thức nghiệp vụ chuyên sâu ngành tài chính và quản trị doanh nghiệp.</span>
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
                <span>Quyền giám đốc Tổ chức Quốc tế về Bảo tồn Thiên nhiên tại Việt Nam (WWF). </span>
            </div>
            <div className='kinhnghiem'>
              <span>Có 10 năm kinh nghiệm quản lý nguồn nhân lực, 5 năm làm việc với các tổ chức toàn cầu thế giới và 18 năm kinh nghiệm trong lĩnh vực Công nghệ thông tin. Với kiến thức chuyên sâu về nguồn nhân lực trong lĩnh vực thiên nhiên và môi trường, ông Nghĩa hiện đang đảm nhận vai trò quản lý nguồn nhân lực làm việc tại Tổ chức Quốc tế về Bảo tồn Thiên nhiên tại Việt Nam (WWF Vietnam)</span>
            </div>
          </div>


          <div className='thanhvien'>
            <div className='avt'>
                <img src={minh}></img>
            </div>
            <div className='tenThanhvien'>
                <span>Phạm Hoàng Minh</span>
            </div>
            <div className='tughi'>
              <span>Phóng viên Tổ chức Bảo tồn thiên nhiên tại Đông Nam Á (The Nature Conservancy).</span>
            </div>
            <div className='kinhnghiem'>
              <span>Phóng viên Hoàng Minh – đồng sáng lập Jungle Wildlife Magazine. Ông đã có 30 năm làm việc trong lĩnh vực báo chí và làm việc tại 10 quốc gia Đông Nam Á. Ông là đồng tác giả của cuốn sách Những con vượn mong manh do Nothing xuất bản vào năm 20xx.</span>
            </div>
          </div>


      </div>
        <div className="contact">
          <div className="logocontact">
          <p>Jungle Wildlife Magazine</p>
          </div>
          <div className='diachi'>
          <h3>Địa chỉ</h3>
         <div className='address'> <HomeIcon/><span>Đường 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ</span></div><br/>
         <div className='address'> <LocalPhoneIcon/><span>0344109778</span></div>
         </div>
       
        </div>

       </Main>
    )
}





export default Navbar
