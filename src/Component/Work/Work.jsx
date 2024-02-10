import React, { useContext } from "react";
import './Work.css'
import upWork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from "../../Context";
import {motion} from 'framer-motion'


function Work() {
    // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className='works' id="Experience">
        {/* left side */}
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>Works for These</span>
            <span>Brands & Companies</span>
            <span>I have been working on different projects ranging from small personal websites to larger, more complex web applications using JavaScript and JavaScript Frameworks like ReactJs, and VueJs as a frontend developer, for the past three years for these brands and companies.</span>
            <div className="btn s-btn">Hire Me</div>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="w-right">
            <motion.div
            initial={{rotate: 45}}
            whileInView={{rotate: 0}}
            viewport={{margin:'-40px'}}
            transition={{duration: 3.5, type: 'spring'}}
            className="w-mainCircle">
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
            </motion.div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>

  )
}

export default Work