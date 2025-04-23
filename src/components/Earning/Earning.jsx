import React from 'react'
import './Earning.css'
import i_icon from "../../assets/i.png";

const Earning = () => {
  return (
    <div className='earning-container'>
        <h1>hello</h1>
        <div className="earning-cards">
            <div className="pay-card">
                <div><h4>Commision pay out</h4>
                <img src={i_icon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Earning