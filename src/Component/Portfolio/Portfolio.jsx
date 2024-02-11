import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import PersonalWeb from "../../img/portfolio.jpg";
import Store from "../../img/store.jpg";
import dashboard from "../../img/dashboard.jpg";
import HOC from "../../img/resturant.jpg";
import School from "../../img/school.jpg";
import Weather from "../../img/weather.png";

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
        spaceBetween={36}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img className="swiper-slide" src={PersonalWeb} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-slide" src={Store} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-slide" src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-slide" src={School} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-slide" src={dashboard} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-slide" src={Weather} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
