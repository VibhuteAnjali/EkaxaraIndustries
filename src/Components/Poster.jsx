import React from 'react'
import "../style/Poster.css"
import tick from "../img/tick.svg"
export default function Poster() {
    return (
        <div className='Poster'><p className='PosterHeading'>"Delivering Quality, Building Trust."</p>
            <div className="quality">

                <p><img src={tick} alt="tick" />  Superior Quality</p>
                <p><img src={tick} alt="tick" />  Ethical and transparent Business Policy</p>
                <p><img src={tick} alt="tick" />  Cutting-edge solutions </p>
            </div>
        </div>
    )
}
