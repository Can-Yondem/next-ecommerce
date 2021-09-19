import React from 'react'
import Slider from "react-slick"

const MainCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  };

  return (
      <div>
        <Slider {...settings}>
          <div className="h-[500px]">
            <img src="slider_img/slider1.webp" alt="" className="mx-auto h-full"/>
          </div>
          <div className="h-[500px]">
            <img src="slider_img/slider2.webp" alt="" className="mx-auto h-full"/>
          </div>
          <div className="h-[500px]">
            <img src="slider_img/slider3.jpg" alt="" className="mx-auto h-full"/>
          </div>

        </Slider>
      </div>
  )
}


export default MainCarousel
