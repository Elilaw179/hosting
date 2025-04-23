import React from "react";
import "./Service.css";

import star_icon from "../../assets/star.png";
import right_icon from "../../assets/right_arrow.png";
import top_icon from "../../assets/pupletop.png";
import cloud_icon from "../../assets/cloud.png";
import tick_icon from "../../assets/tick.png";
import coins_icon from "../../assets/coins.png";
import green_icon from "../../assets/green.png";
import email_icon from "../../assets/email.png";

const serviceCards = [
  {
    icon: coins_icon,
    title: "Managed hosting",
    description: "web and cloud hosting plans for projects of any scale",
    refer: false,
  },
  {
    icon: star_icon,
    title: "Hosting horizons",
    description: "AI platform to create web apps tools and software",
    refer: true,
  },
  {
    icon: email_icon,
    title: "Business email",
    description: "professional email address for one's business",
    refer: true,
  },
  {
    icon: cloud_icon,
    title: "VPS hosting",
    description: "powerful KVM-base servers",
    refer: false,
  },
  {
    icon: tick_icon,
    title: "Website builders",
    description: "AI powered drag-and-drop site builder tool",
    refer: false,
  },
];

const Service = () => {
  return (
    <div className="services-container">
      <h2>Refer services to your friend</h2>
      <div className="cards-holder">
        {serviceCards.map((card, index) => (
          <div className="services-card" key={index}>
            <img src={card.icon} alt="" />
            <div className="card-txt">
              <div>
                <h4>{card.title}</h4>  
             
                <p>{card.description}</p>
                {card.refer && (
                  <div className="green-txt">
                    <p>Refer existing client too</p>
                    <span>
                      <img src={green_icon} alt="" />
                    </span>
                  </div>
                )}
              </div>
              <img src={right_icon} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="hide-icon">
        <p>Hide</p>
        <img src={top_icon} alt="" />
      </div>
    </div>
  );
};

export default Service;
