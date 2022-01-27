import React,{Component} from 'react';
import Slider from 'react-slick';
import img1 from "./../img/img2.png";
import img2 from "./../img/img3.png";
import './slider.css';
const Slider1 = () => {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300,
    
  };
  return(
     
      <div>
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
  );
};

export default Slider1;
