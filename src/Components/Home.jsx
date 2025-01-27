import React, { useEffect } from 'react'
import img from "../img/LandingPageImg.png";
import "../style/Home.css";

export default function Home() {
        useEffect(() => {
          const image = new Image();
          image.src = img; // Provide your image path here
        }, []);
    
    return (
        <div className='Home' id='Home'>
            <div className="content">
                <div className="tagline">
                    <p>Powering Industries,<br />
                        Delivering Excellence.</p>
                </div>
                <p className='subTagline'>"Committed to Quality, Driven by Trust."</p>
                <button className='MainExplore'><a href="#Products">Explore</a></button>
            </div>
            <div className="HomeImg">
                    <img src={img} alt="homeImg" />
               
            </div>
        </div>
    )
}
