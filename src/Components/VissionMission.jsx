import React from 'react'
import vission from "../img/Vission2.1.jpg"
import mission from "../img/Mission2.1.jpg"
import "../style/VissionMission.css"
export default function VissionMission() {
    return (
        <div className='flexRow'>
            <div className="box">
                <div className="img"><img src={vission} alt="VissionImg" className='VMimg'/></div>
                <h3 className='boldTEXT'>Vission</h3>
                <div className="textContent"><p>"To be a globally recognized leader in the industrial sector, renowned for our unwavering commitment to quality, innovation, and customer satisfaction—empowering industries with excellence and driving sustainable growth worldwide."</p></div>
            </div>
            <div className="box">
                <div className="img"><img src={mission} alt="MissionImg" className='VMimg'/></div>
                <h3 className='boldTEXT'>Mission</h3>
                <div className="textContent"><p>"To provide superior industrial materials that empower businesses with reliable, cost-effective solutions, while cultivating lasting partnerships built on exceptional service, trust, and unwavering commitment to excellence."</p></div>
            </div>
        </div>
    )
}
