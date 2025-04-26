import React from "react";
import "./Earning.css";
import i_icon from "../../assets/i.png";
import group_icon from "../../assets/groups.png";
import gift_icon from "../../assets/gift.png";
import pen_icon from "../../assets/pen.png";
import copy_icon from "../../assets/copy.png";
import hands_shake from "../../assets/hand_shake.webp";

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
          <div>
            <img src={gift_icon} alt="" />
            <h1>$0</h1>
            <p>Total commission paid out </p>
          </div>
        </div>
        <div className="total-com">
          <div>
          
            <img src={group_icon} alt="" />
            <h1> 0</h1>
            <p>Total referrals </p>
          </div>
        </div>
      </div>
      <div className="referral-container">
        <div className="ref-content">
          <img src={hands_shake} alt="" />
          <h3>
            Refer a friend and earn a 40% commission for Cloud and VPS (20% for
            Web Hosting plans).
          </h3>
          <p>They 'll get 20% discount too</p>

          <div className="referral-input">
            <div className="referral-input-wrapper">
              <span className="referral-input-icon">
                <img src={pen_icon} alt="" />
              </span>
              <input
                type="text"
                name="text"
                placeholder="https://hostingerdsjkchdhskchfbvjcjjcjj"
              />
            </div>
            <button>
              <img src={copy_icon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Earning;
