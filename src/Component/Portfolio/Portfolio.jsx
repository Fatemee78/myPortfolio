import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Ecommerce from "../../img/portfolio.jpg";
import Sidebar from "../../img/store.jpg";
import HOC from "../../img/resturant.jpg";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  //context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img className="swiper-slide" src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-slide" src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-slide" src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-slide" src={MusicApp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
