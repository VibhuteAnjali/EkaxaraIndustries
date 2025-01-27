import React, { useState } from 'react'
import img from "../img/AboutImg.jpg"
import "../style/Carousel.css"
import data from "../Data/data.json";
export default function Carousel() {
    const [visibleIndex, setVisibleIndex] = useState(0);
    return (
        <div>
            <p className='headline'>Product Gallery</p>
            <div className='carouselFlexContainer'>
                <div>
                    <button disabled={visibleIndex === 0 ? true : false} className='arrow'>
                        <img src={`https://img.icons8.com/?size=40&id=9438&format=png&color=${visibleIndex === 0 ? "EBEBEB" : "000000"}`} alt="arrow" className='pointer' onClick={() => setVisibleIndex(visibleIndex - 1)} />

                    </button>
                </div>
                <div>
                    <div className="carouselImg">
                        <img src={data.carouselData[visibleIndex].img} alt="arrow" />
                    </div>
                    <div className="carouselContent">
                        {data.carouselData[visibleIndex].heading}

                    </div>
                </div>
                <div>
                    <button className="arrow" disabled={visibleIndex === 3 ? true : false}>

                        <img src={`https://img.icons8.com/?size=40&id=98967&format=png&color=${visibleIndex === 3 ? "EBEBEB" : "000000"}`} alt="arrow" className='pointer' onClick={() => setVisibleIndex(visibleIndex + 1)} />
                    </button>
                </div>
            </div>
        </div>
    )
}
