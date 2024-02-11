import React from 'react'
import './services.css'
import HeartEmoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './my cv 1.pdf'
import { themeContext } from "../../Context";
import  { useContext } from "react";
import {motion} from 'framer-motion'



const Services = () => {
    
     // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  //motion
  const transition = {durantion: 2, type : 'spring'}


  return (
    <div className='services' id='Services'>
        {/* leftside */}
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
            <span>Services</span>
            <span>
                I started off at a small startup company where my skills were put to test right away.
                 Even though there were only few people on the team, we worked tirelessly towards our 
                 goal of creating innovative products that would make an impact in people's lives. 
                 My role involved designing user interfaces (UI) and writing clean front-end codes using HTML/CSS/JavaScript while 
                 collaborating closely with back-end developers.</span>
            <a href={Resume} download>  
                <div className="btn s-btn">Download CV</div>
            </a>
            <div className="blur s-blur1" style={{
                background:"#ABF1FF94"
            }}></div>
        </div>
        {/* rightside */}
        <div className="cards">
            <motion.div
                initial={{left:'78%'}}
                whileInView={{left:'30rem'}}
                transition={transition}
                style={{
                    left:"30rem"
                }}>
                <Card
                    emoji={HeartEmoji}
                    heading='Design'
                    detail={"Figma, Photoshop, Adobe Illustrator"}
                />
                
            </motion.div>
            <motion.div 
            initial={{left:'25%'}}
            whileInView={{left:'11rem'}}
            transition={transition}
            style={{
                top:'12rem',
                left:"11rem"
            }}>
                <Card
                    emoji={glasses}
                    heading='Developer'
                    detail={"Tailwind, Bootstrap, Sass, React, Vue"}
                />
                
            </motion.div>
            <motion.div
            initial={{ left:'20rem'}}
            whileInView={{left:'28rem'}}
            transition={transition}
            style={{
                top:'19rem',
                left:"28rem"
            }}>
                <Card
                    emoji={Humble}
                    heading='UI/UX'
                    detail={"Lorem ipsum dolor sit amet consectetur adipisicing eli. "}
                />
                
            </motion.div>
            <div className="blur s-blur2" style={{
            background: 'var(--purple)'}}>
            </div>
        </div>
    </div>
  )
}

export default Services