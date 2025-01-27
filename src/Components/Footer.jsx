import React from 'react'
import Logo from "../img/Logo.jpg"
import "../style/Footer.css"
export default function Footer() {
    return (
        <div className='footer'>
            <div className="logo">
                <img src={Logo} alt='Logo' />
            </div>
            <div className="MainFooterBox">

            <div className="FooterLinks">
                <a href="#Home" className="links">Home</a>
                <a href="#AboutUs" className="links">About Us</a>
                <a href="#Products" className="links">Our Products</a>
            </div>
            <div className="FooterLinks">
                <p>Contact Us</p>
                <p>info@ekaxara.com</p>
                <p>+91 8668603669</p>
            </div>
            </div>
        </div>
    )
}
