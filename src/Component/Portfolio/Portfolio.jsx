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
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est libero et, reprehenderit vel consectetur, officia debitis dolorem quidem fugiat quos rerum at. Voluptas veniam officia et debitis consequuntur, corporis fugiat!</p>
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