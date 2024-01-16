import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import GitHub from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Profile from '../../img/me.png'
import imoji from '../../img/glassesimoji.png'
import crown from '../../img/crown.png'
import thumbbup from '../../img/thumbup.png'






export const Intro = () => {
  return (
    <div className='intro'>
      {/* Right Side */}
        <div className="i-left">
          <div className="i-name">
              <span>Hi! I am</span>
              <span>Fatemeh Bakhshi</span>
              <span>I am a <span style={{color:'var(--orange)', fontSize:'2rem'}}>Frontend Developer</span></span>
              <span>I am a motivated and versatile individual with <b>(3)years</b> of experince in web designing and web developing, producting the quality work and always eager to take on new challenges with a passion for learning. I am dedicated to delivering high-quality resulats with a positive attitude and a growth mindset,
                I am ready to make a meaningful contribution and achieve great tings.
                </span>
          </div>
          <button className="btn i-btn">Hire Me!</button>
          <div className="i-icons">
            <a href="./">
              <img src={GitHub} alt="" />
            </a>
            <a href="./">
            <img src={LinkedIn} alt="" />
            </a>
            <a href="/">
            <img src={Instagram} alt="" />
            </a>
          </div>
          
        </div>
      {/* Left Side */}
        <div className="i-right">
          <img src={Profile} alt="" />
          <img src={imoji} alt="" />
          <div style={{top:'-4%', left:'57%'}} >
            <FloatingDiv img={crown} txt1='Frontend' txt2='Developer'/>
          </div>
          <div  style={{top:'18rem', left:'0rem'}}>
            <FloatingDiv img={thumbbup} txt1='Creative' txt2='Developer'/>
          </div>
          {/* BlurItem */}
          <div className="blur" style={{
            background: 'rgb(238 210 255'}}>
          </div>
          <div className="blur" style={{
            background: '#C1f5ff',
            top:'17rem',
            width:'21rem',
            height:'11rem' ,
            left: '-9rem '          
            }}>
          </div>     
      </div>  
    </div>
  )
}
