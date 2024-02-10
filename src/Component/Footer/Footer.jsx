import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>azadehrezwani@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/ftmh-bakhshi/" target="_blank"  rel="noopener noreferrer">
            <Linkedin color="white" size={"2rem"} />
          </a>
          <a href="https://www.instagram.com/azadeh.nfts?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
            <Insta color="white" size={"2rem"} />
          </a>
          <a href="https://github.com/f-Bakhshi" target="_blank" rel="noopener noreferrer">
            <Gitub color="white" size={"2rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
