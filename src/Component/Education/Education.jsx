import React, { useContext } from "react";
import './Education.css'
import SoloLearn from '../../img/solo learn.png'
import FreeCodeCamp from '../../img/free code camp.png'
import HeratUniversity from '../../img/herat university.png'
import CodeToInspire from '../../img/code to inspire.png'
import ITCH from '../../img/itch.png'
import { themeContext } from "../../Context";
import {motion} from 'framer-motion'


function Education() {
    // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className='works' id="Experience">
        {/* left side */}
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>Certification</span>
            <span>Education & Awards</span>
            <span>Ever since I was young, coding has always fascinated me. As soon as I graduated from college with my 
                degree in Computer Science, it became clear to me that this was what I wanted to do – create beautiful and functional websites through lines of code.
                </span>
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
                    <img src={SoloLearn} alt="" /></div>
                <div className="w-secCircle">
                    <img src={FreeCodeCamp} alt="" /></div>
                <div className="w-secCircle">
                    <img src={HeratUniversity} alt="" /></div>
                <div className="w-secCircle">
                    <img src={CodeToInspire} alt="" /></div>
                <div className="w-secCircle">
                    <img src={ITCH} alt="" /></div>
            </motion.div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>

  )
}

export default Education