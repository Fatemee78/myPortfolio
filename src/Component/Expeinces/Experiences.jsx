import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './Experiences.css'

function Experiences() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='expe' id="Experience">
        <div className="achivement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3+</div>
            <span style={{color: darkMode?'white':''}}>Years</span>
            <span>Experience</span>
        </div>
        <div className="achivement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3+</div>
            <span style={{color: darkMode?'white':''}}>Companies</span>
            <span>Work</span>
        </div>
        <div className="achivement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3+</div>
            <span style={{color: darkMode?'white':''}}>Completed </span>
            <span>Project</span>
        </div>
    </div>
  )
}

export default Experiences