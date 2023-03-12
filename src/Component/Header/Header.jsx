import React from 'react'
import CTA from './CTA'
import phOne from '../../Assets/pexels-amar-preciado-13085461.jpg'
import './header.css'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ipinmoroti Oluseyi</h1>
        <h5 className="text-light">Frontend developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
            <img src={phOne} alt="" />
        </div>
        <a href="#footer" className="scrollDown">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header