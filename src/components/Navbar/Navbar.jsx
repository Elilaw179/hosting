import React from "react";
import "./Navbar.css";
import faq_icon from "../../assets/faq.png";
import logo_icon from "../../assets/logo-h.png";
import male_icon from "../../assets/male_user.png";
import anounce_icon from "../../assets/anounce.png";
import list_icon from "../../assets/bluelist.png";

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
          <div className="big-srn-navs-icons">
            <li>
              <img src={faq_icon} alt="" />
            </li>
            <li >
              <img src={male_icon} alt="" />
            </li>
          </div>
          <li>
              <img src={anounce_icon} alt="" />
              <span className="cart-value">1</span>
            </li>
            <li >
              <img  src={list_icon} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
