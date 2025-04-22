import React from "react";
import "./Navbar.css";
import faq_icon from "../../assets/faq.png";
import logo_icon from "../../assets/logo-h.png";
import male_icon from "../../assets/male_user.png";
import anounce_icon from "../../assets/anounce.png";
import email_icon from "../../assets/email.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="logo">
          <img src={logo_icon} alt="" />
          <p>HOSTINGER</p>
        </div>
        <div className="nav-icons">
          <p>Refer & earn up to 450 USD</p>
          <ul>
            <li>
              <img src={anounce_icon} alt="" />
              <span className="cart-value">1</span>
            </li>
            <li>
              <img src={faq_icon} alt="" />
            </li>
            <li >
              <img src={male_icon} alt="" />
            </li>
            <li >
              <img  src={email_icon} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
