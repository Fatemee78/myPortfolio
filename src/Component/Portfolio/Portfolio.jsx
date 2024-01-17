import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import SideBar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import MusicApp from '../../img/musicapp.png'
import Hoc from '../../img/hoc.png'


function Portfolio() {
  return (
    <div className='portfolio'>
      {/* heading */}
      <span>Recent Project</span>
      <span>Portfolio</span>
      {/* slider */}
      <Swiper 
      spspaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={SideBar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide> 
         <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio