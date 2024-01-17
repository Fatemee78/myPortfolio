import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'


export const NavBar = () => {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">Fatemeh</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={ true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>About</li>
                    </Link>
                    <Link spy={ true} to='Services' smooth={true} >
                        <li>Services</li>
                    </Link>
                    <Link spy={ true} to='Experience' smooth={true} >
                        <li>Experience</li>
                    </Link>
                    <Link spy={ true} to='Portfolio' smooth={true} >
                        <li>Portfolio</li>
                    </Link>
                    <Link spy={ true} to='Education' smooth={true} >
                        <li>Education</li>
                    </Link>
                    <Link spy={ true} to='Testimonial' smooth={true} >
                        <li>Testimonial</li>
                    </Link>
                </ul>
            </div>
            <button className="btn n-btn">Contact</button>
        </div>
    </div>
  )
}
