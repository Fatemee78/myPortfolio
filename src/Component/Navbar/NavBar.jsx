import React from 'react'
import './Navbar.css'

export const NavBar = () => {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">Fatemeh</div>
            <span>Toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Education</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <button className="btn n-btn">Contact</button>
        </div>
    </div>
  )
}
