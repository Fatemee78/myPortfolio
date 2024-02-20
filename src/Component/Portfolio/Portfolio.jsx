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
          <a href="https://my-portfolio-4op3iuf2c-f-bakhshis-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img className="swiper-slide" src={PersonalWeb} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://shopify-mwo7li7p1-f-bakhshis-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
           <img className="swiper-slide" src={Store} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://f-bakhshi.github.io/resturant/" target="_blank" rel="noopener noreferrer">
            <img className="swiper-slide" src={HOC} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://f-bakhshi.github.io/Mini-online-School-website/" target="_blank" rel="noopener noreferrer">
            <img className="swiper-slide" src={School} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://f-bakhshi.github.io/Admin-dashboard/" target="_blank" rel="noopener noreferrer">
            <img className="swiper-slide" src={dashboard} alt="" />
           </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/f-Bakhshi/Weather-app" target="_blank" rel="noopener noreferrer">
            <img className="swiper-slide" src={Weather} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
