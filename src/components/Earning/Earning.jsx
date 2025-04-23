import React from 'react'
import './Earning.css'
import i_icon from "../../assets/i.png";

const Earning = () => {
  return (
    <div className='earning-container'>
        <div className="earning-cards">
            <div className="pay-card">
                <div><h4>Commision pay out</h4>
                <img src={i_icon} alt="" />
                </div>
                <div className="amount">
                  <h1>US$ 0</h1>
                  <h5>$50</h5>
                </div>
                <hr />
                <p>You don't have any approved commision yet</p>
                <div className="payout-method">
                  <p>Add payout method</p>
                  <p>Paypal</p> or
                  <p>Wire Transfer</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Earning