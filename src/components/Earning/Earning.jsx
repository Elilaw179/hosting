import React from "react";
import "./Earning.css";
import i_icon from "../../assets/i.png";
import group_icon from "../../assets/groups.png";
import gift_icon from "../../assets/gift.png";

const Earning = () => {
  return (
    <div className="earning-container">
      <div className="earning-cards">
        <div className="pay-card">
          <div className="com-div">
            <h4>Commission payout</h4>
            <img src={i_icon} alt="" />
          </div>
          <div className="amount">
            <h1>US$ 0</h1>
            <h3>$50</h3>
          </div>
          <hr />
          <p className="com-approval">
            You don't have any approved commission yet
          </p>
          <div className="payout-method">
            <p>Add payout method</p>
            <p className="pay-blue">Paypal</p> or
            <p className="pay-blue">Wire Transfer</p>
          </div>
        </div>

        <div className="total-com">
         <div > <img src={gift_icon} alt="" />
         <h1>$0</h1>
         <p>Total commission paid out </p>
         </div>
        
        </div>
        <div className="total-com">
         <div > <img src={group_icon} alt="" />
         <h1> 0</h1>
         <p>Total referrals </p>
         </div>
        
        </div>
      </div>
      .
    </div>
  );
};
export default Earning;
