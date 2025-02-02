import React from 'react'
import img from "../img/AboutImg.jpg"
import "../style/AboutUs.css"
export default function AboutUs() {
    return (
        <div id='AboutUs'>
            <p className='headline'>ABOUT US</p>
            <div className='flexContainer'>
                <div className="infoAboutUs">
                    <p>Founded in 2018 in Ekaxara Industries is a trusted name in premium industrial materials. We provide top-quality products like Densified Laminated Wood, Glass Epoxy Sheets, Phenolic Laminate, and more. With a focus on quality, reliability, and customer satisfaction, we deliver tailored solutions and timely service to industries nationwide.
                    </p>
                </div>
                <div className='AboutImg'>
                    <img src={img} alt="aboutImg" />
                </div>
            </div>
        </div>
    )
}
