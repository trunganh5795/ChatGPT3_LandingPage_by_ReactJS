import React from "react";
import logo from "../../assets/logo.svg";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer section__padding">
      <div className="footer__heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <button>
          <span className="gradient__text">Request Early Access</span>
        </button>
      </div>
      <div className="footer__links">
        <div className="footer__links__logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer__links__list">
          <h3>Links</h3>
          <ul>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer__links__company">
          <h3>Company</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer__links__get-in-touch">
          <h3>Get in touch</h3>
          <ul>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}
