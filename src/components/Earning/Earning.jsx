import React from "react";
import "./Earning.css";
import i_icon from "../../assets/i.png";
import group_icon from "../../assets/groups.png";
import gift_icon from "../../assets/gift.png";
import pen_icon from "../../assets/pen.png";
import copy_icon from "../../assets/copy.png";
import hands_shake from "../../assets/hand_shake.webp";
import down_arrow from "../../assets/down_arrow.png";

const faqQuestions = [
  "Which services are applicable referral commissions?",
  "Can I refer an existing client?",
  "How is referral program different from Affiliate program?",
  "Why doesn't my referral work?",
  "Why does it take 45 days to get my reward?",
  "How do I get paid?",
  "When will I receive my earnings?",
  "My payment was declined by PayPal, why and what should I do?",
  "How can my friends get discounts with my referral link?",
  "How can I earn?"
];

const Earning = () => {
  return (
    <div className="earning-container">

      <div className="earning-cards">
        <div className="pay-card">
          <div className="com-div">
            <h4>Commission payout</h4>
            <img src={i_icon} alt="info icon" />
          </div>

          <div className="amount">
            <h1>US$ 0</h1>
            <h3>$50</h3>
          </div>

          <hr />
          <p className="com-approval">You don't have any approved commission yet</p>

          <div className="payout-method">
            <p>Add payout method</p>
            <p className="pay-blue">Paypal</p> or
            <p className="pay-blue">Wire Transfer</p>
          </div>
        </div>

        {[
          { icon: gift_icon, amount: "$0", text: "Total commission paid out" },
          { icon: group_icon, amount: "0", text: "Total referrals" }
        ].map((item, index) => (
          <div className="total-com" key={index}>
            <div>
              <img src={item.icon} alt="stat icon" />
              <h1>{item.amount}</h1>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="referral-container">
        <div className="ref-content">
          <img src={hands_shake} alt="Handshake" />
          <h3>Refer a friend and earn a 40% commission for Cloud and VPS (20% for Web Hosting plans).</h3>
          <p>They'll get 20% discount too</p>

          <div className="referral-input">
            <div className="referral-input-wrapper">
              <span className="referral-input-icon">
                <img src={pen_icon} alt="pen icon" />
              </span>
              <input
                type="text"
                placeholder="https://hostingerdsjkchdhskchfbvjcjjcjj"
              />
            </div>
            <button>
              <img src={copy_icon} alt="copy icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="faq-container">
        <h2>Refer & Earn FAQ</h2>
        <br />

        {faqQuestions.map((question, idx) => (
          <div className="questions" key={idx}>
            <div>
              <h3>{question}</h3>
              <img src={down_arrow} alt="arrow down" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Earning;
