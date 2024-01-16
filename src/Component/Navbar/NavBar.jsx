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
                    <li>Home</li>
                    <li>Eduction</li>
                    <li>Services</li>
                    <li>Experienc</li>
                    <li>Portfolio</li>
                    <li>Refrence</li>
                </ul>
            </div>
            <button className="btn n-btn">Contact</button>
        </div>
    </div>
  )
}
