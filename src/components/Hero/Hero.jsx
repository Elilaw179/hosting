import React from "react";
import "./Hero.css";

import pen_icon from "../../assets/pen.png";
import Card from "../Services/Service";

const Hero = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero">
          <div className="hero-text">
            <h2>
              Invite a friend and earn up 450 USD. They'll get 20% discount too.
            </h2>
            <p>Get a 40% commission for Cloud VPS plans untill April 20th</p>
          </div>

          <div className="hero-input">
            <div className="input-wrapper">
              <span className="input-icon">
                <img src={pen_icon} alt="" />
              </span>
              <input
                type="text"
                name="text"
                placeholder="https://hostingerdsjkchdhskchfbvjcjjcjj"
              />
            </div>
            <button>Copy link</button>
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Hero;
