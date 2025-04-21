import React from 'react';
import './Work.css';
import email_icon from "../../assets/email.png";
import award_icon from "../../assets/award.png";
import square_icon from "../../assets/square.png";
import cart_icon from "../../assets/cart.png";
import share_icon from "../../assets/purpleshare.png";

const workSteps = [
  {
    icon: email_icon,
    title: "You send an invite",
    description: "Pick a plan for them or send them a referral link so that they can pick themselves"
  },
  {
    icon: cart_icon,
    title: "They make a purchase",
    description: "Referral awaards apply to hosting VPS and email of 12+ month and all 1-month Hosting Horrizons plans."
  },
  {
    icon: square_icon,
    title: "They're active at least 45 days",
    description: "The referral clients keep their subscription active and don't request a refund."
  },
  {
    icon: award_icon,
    title: "You get your commission",
    description: "Your earnings are sent PayPal or Wire Transfer"
  }
];

const Work = () => {
  return (
    <div className='work-container'>
      <div className="work-heading">
        <h2>How do referrals work?</h2>
        <div>
          <p>Terms of Service</p>
          <img src={share_icon} alt="" />
        </div>
      </div>

      <div className="work-cards">
        {workSteps.map((step, index) => (
          <div className="card" key={index}>
            <img src={step.icon} alt="" />
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
