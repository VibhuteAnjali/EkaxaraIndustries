import React from 'react'
import Logo from "../img/Logo.jpg";
import "../style/Navbar.css"
export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className='logoNav'>
        <img src={Logo} alt="" />
      </div>
      <div className="navlinks">
        <ul className='linkContainer'>
          <a href="#AboutUs" className="links">About Us</a>
          <a href="#Products" className="links">Our Products</a>
          <button className='exploreBtn'><a href="#Products">EXPLORE</a></button>
        </ul>
      </div>
    </div>
  )
}
