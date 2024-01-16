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
        <div className="i-left">
            <div className="i-name">
                <span>Hey!</span>
                <span>I am Fatemeh Bakhshi</span>
                <span>Frontend Developer</span>
                <span> with the high level of experince in web designing and web developing, producting the quality work.</span>
            </div>
        <button className="btn i-btn">Hire Me!</button>
        <div className="i-icons">
          <img src={GitHub} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
        </div>
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
            top:'10rem',
            width:'21rem',
            height:'11rem' ,
            left:'-9rem'           
            }}>
          </div>
            
       </div>
       
    </div>
  )
}
