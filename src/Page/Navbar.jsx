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
                <Link1 activeClass="active" className="test1" to="slider" spy={true} smooth={true} duration={500} > HOME </Link1>
              </Home>
              <List className='List'>
                <Link1 activeClass="active" className="test1" to="card-body" spy={true} smooth={true} duration={500} >  DANH S??CH </Link1>
              </List >
              <About className='About'>
              <Link1 activeClass="active" className="test1" to="Lienhe" spy={true} smooth={true} duration={800} >  LI??N H??? </Link1>
              </About>
              
              
              <Search>
                <form onSubmit={handleSubmit}>
                <input className='input' placeholder='T??M KI???M' 
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
          <h3>V??? ch??ng t??i</h3>
          <h1>Jungle Wildlife Magazine</h1>
          <p>L?? m???t t???p ch?? tr???c tuy???n tr??ng b??y h??nh ???nh v?? th??ng tin t???t c??? c??c ?????ng v???t c???a r???ng nhi???t ?????i trong khu v???c ?????ng b???ng S??ng C???u Long c??ng nh?? trong h??? sinh th??i ?????ng v???t sinh s???ng trong khu v???c ch??u th??? s??ng Mekong. Ch??ng t??i mang s??? m???nh truy???n t???i th??ng ??i???p v??? s??? s??? chia chung tay b???o v??? ngu???n ??a d???ng sinh h???c v?? th??c ?????y qu?? tr??nh b???o t???n ?????ng th???c v???t qu?? hi???m tr??n th??? gi???i</p>
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
        
                  <h2>  DANH S??CH ?????NG V???T </h2>
          
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
            <span>Nguy???n B???i H??ng</span>
            </div>
            <div className='tughi'>
            <span>Ch??? t???ch hi???p h???i ?????ng v???t hoang d??<br/> Vi???t Nam.</span>
            </div>
            <div className='kinhnghiem'>
              <span>??ng Nguy???n B???i H??ng, ng?????i s??ng l???p v?? l?? Ch??? t???ch hi???p h???i ?????ng v???t hoang d?? Vi???t Nam, ?????ng s??ng l???p Jungle Wildlife Magazine. ??ng H??ng c?? h??n 20 n??m kinh nghi???m trong l??nh v???c ph??t tri???n ??a d???ng sinh h???c v?? c?? ki???n th???c nghi???p v??? chuy??n s??u ng??nh t??i ch??nh v?? qu???n tr??? doanh nghi???p.</span>
            </div>
          </div>

          <div className='thanhvien'>
            <div className='avt'>
                <img src={nghia}></img>
            </div>
            <div className='tenThanhvien'>
                <span>Tr???n Nh??n Ngh??a</span>

            </div>
            <div className='tughi'>
                <span>Quy???n gi??m ?????c T??? ch???c Qu???c t??? v??? B???o t???n Thi??n nhi??n t???i Vi???t Nam (WWF). </span>
            </div>
            <div className='kinhnghiem'>
              <span>C?? 10 n??m kinh nghi???m qu???n l?? ngu???n nh??n l???c, 5 n??m l??m vi???c v???i c??c t??? ch???c to??n c???u th??? gi???i v?? 18 n??m kinh nghi???m trong l??nh v???c C??ng ngh??? th??ng tin. V???i ki???n th???c chuy??n s??u v??? ngu???n nh??n l???c trong l??nh v???c thi??n nhi??n v?? m??i tr?????ng, ??ng Ngh??a hi???n ??ang ?????m nh???n vai tr?? qu???n l?? ngu???n nh??n l???c l??m vi???c t???i T??? ch???c Qu???c t??? v??? B???o t???n Thi??n nhi??n t???i Vi???t Nam (WWF Vietnam)</span>
            </div>
          </div>


          <div className='thanhvien'>
            <div className='avt'>
                <img src={minh}></img>
            </div>
            <div className='tenThanhvien'>
                <span>Ph???m Ho??ng Minh</span>
            </div>
            <div className='tughi'>
              <span>Ph??ng vi??n T??? ch???c B???o t???n thi??n nhi??n t???i ????ng Nam ?? (The Nature Conservancy).</span>
            </div>
            <div className='kinhnghiem'>
              <span>Ph??ng vi??n Ho??ng Minh ??? ?????ng s??ng l???p Jungle Wildlife Magazine. ??ng ???? c?? 30 n??m l??m vi???c trong l??nh v???c b??o ch?? v?? l??m vi???c t???i 10 qu???c gia ????ng Nam ??. ??ng l?? ?????ng t??c gi??? c???a cu???n s??ch Nh???ng con v?????n mong manh do Nothing xu???t b???n v??o n??m 20xx.</span>
            </div>
          </div>


      </div>
        <div className="contact">
          <div className="logocontact">
          <p>Jungle Wildlife Magazine</p>
          </div>
          <div className='diachi'>
          <h3>?????a ch???</h3>
         <div className='address'> <HomeIcon/><span>???????ng 3/2, Xu??n Kh??nh, Ninh Ki???u, C???n Th??</span></div><br/>
         <div className='address'> <LocalPhoneIcon/><span>0344109778</span></div>
         </div>
       
        </div>

       </Main>
    )
}





export default Navbar
