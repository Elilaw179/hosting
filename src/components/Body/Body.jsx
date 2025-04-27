

import React, { useState } from "react";
import "./Body.css";
import Hero from "../Hero/Hero";
import Work from "../Work/Work";
import Earning from "../Earning/Earning";

import billing_icon from "../../assets/billing.png";
import business_icon from "../../assets/business.png";
import coins_icon from "../../assets/coins.png";
import domain_icon from "../../assets/domain.png";
import email_icon from "../../assets/email.png";
import home_icon from "../../assets/home.png";
import tick_icon from "../../assets/tick.png";
import group_icon from "../../assets/groups.png";
import mssg_icon from "../../assets/mssg.png";

const navItems = [
  { label: "Home", icon: home_icon },
  { label: "Websites", icon: business_icon },
  { label: "Domain", icon: domain_icon, options: ["abcghjfjghj", "def"] },
  { label: "Emails", icon: email_icon },
  { label: "VPS", icon: tick_icon },
  { label: "Dark web monitoring", icon: coins_icon },
  { label: "Billing", icon: billing_icon, options: ["abc", "def"] },
  { label: "Marketplace", icon: coins_icon, options: ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu"] },
];

const Body = ({ showSidebar }) => {
  const [activeTab, setActiveTab] = useState("refer");

  return (
    <div className="body">
      <nav className={`navigations ${showSidebar ? "sidebar-visible" : ""}`}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <div className="nav-item">
                <img src={item.icon} alt={item.label} className="nav-icon" />
                <span>{item.label}</span>
              </div>
              {item.options && (
                <select>
                  <option disabled selected>---</option>
                  {item.options.map((option, i) => (
                    <option key={i}>{option}</option>
                  ))}
                </select>
              )}
            </li>
          ))}
          <div className="p-acct">
            <img src={group_icon} alt="account sharing" />
            <ul><li>Account Sharing</li></ul>
          </div>
        </ul>
      </nav>

      <div className="content">
        <div className="profit-container">
          <div 
            className={`tab-item ${activeTab === "refer" ? "active" : ""}`} 
            onClick={() => setActiveTab("refer")}
          >
            <p>Refer & earn</p>
            <hr />
          </div>
          <div 
            className={`tab-item ${activeTab === "earnings" ? "active" : ""}`} 
            onClick={() => setActiveTab("earnings")}
          >
            <p>My earnings</p>
            <hr />
          </div>
        </div>

        {activeTab === "refer" && (
          <>
            <Hero />
            <Work />
          </>
        )}
        {activeTab === "earnings" && <Earning />}
      </div>

  <div className="mssg-fixed">
        <img src={mssg_icon} alt="message alert" />
      </div>
      
    </div>
  );
};

export default Body;
