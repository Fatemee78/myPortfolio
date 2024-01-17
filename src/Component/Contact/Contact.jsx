import React, { useContext } from "react";
import './Contact.css'
import { themeContext } from "../../Context";


const Contact = () => {
     //context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className='contact-form'>
        {/* top side */}
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode ? 'white' : ""}}>Get in touch</span>
                <span>Contact Me</span>
                <div className="blur s-blur1" style={{ background: "#ABF!FF94" }}></div>

            </div>
        </div>
        {/* bottom side*/}
        <div className="c-right">
            <form action="">
                <input type="text" name="user_name" className="user"  placeholder="Name"/>
                <input type="email" name="user_email" className="user" placeholder="Email"/>
                <textarea name="message" className="user" placeholder="Message"/>
                <input type="submit" value="Send" className="btn"/>
                <div
                    className="blur c-blur1"
                    style={{ background: "var(--purple)" }}
                ></div>
            </form>
        </div>
    </div>
  )
}

export default Contact