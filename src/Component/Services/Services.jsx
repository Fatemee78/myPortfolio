import React from 'react'
import './services.css'
import HeartEmoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './my cv 1.pdf'
import { themeContext } from "../../Context";
import  { useContext } from "react";



const Services = () => {
     // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='services'>
        {/* leftside */}
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam voluptatum,
            <br /> adipisci consectetur, non tempore ipsa iusto nihil rerum modi debitis eius.</span>
            <a href={Resume} download>  
                <div className="btn s-btn">Download CV</div>
            </a>
            <div className="blur s-blur1" style={{
                background:"#ABF1FF94"
            }}></div>
        </div>
        {/* rightside */}
        <div className="cards">
            <div style={{
                left:"30rem"
            }}>
                <Card
                    emoji={HeartEmoji}
                    heading='Design'
                    detail={"Figma, Photoshop, Adobe Illustrator"}
                />
                
            </div>
            <div style={{
                top:'12rem',
                left:"11rem"
            }}>
                <Card
                    emoji={glasses}
                    heading='Developer'
                    detail={"Tailwind, Bootstrap, Sass, React, Vue"}
                />
                
            </div>
            <div style={{
                top:'19rem',
                left:"28rem"
            }}>
                <Card
                    emoji={Humble}
                    heading='UI/UX'
                    detail={"Lorem ipsum dolor sit amet consectetur adipisicing eli. "}
                />
                
            </div>
            <div className="blur s-blur2" style={{
            background: 'var(--purple)'}}>
            </div>
        </div>
    </div>
  )
}

export default Services