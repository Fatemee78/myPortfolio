import React from 'react'
import './Work.css'
import upWork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'


function Work() {
  return (
    <div className='works'>
        {/* left side */}
        <div className="awesome">
            <span>Works for These</span>
            <span>Brands & Companies</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam voluptatum,
            <br /> adipisci consectetur, non tempore ipsa iusto nihil rerum modi debitis eius.</span>
            <div className="btn s-btn">Hire Me</div>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={upWork} alt="" /></div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" /></div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" /></div>
                <div className="w-secCircle">
                    <img src={shopify} alt="" /></div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" /></div>
            </div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>

  )
}

export default Work