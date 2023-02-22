import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="cta section__margin">
      <div className="cta__text">
        <p>Request Early Access to Get Started</p>
        <h1>Register today & start exploring the endless possiblities.</h1>
      </div>
      <div className="cta__button">
        <button>
          <span className="gradient__text--hover">Get Started</span>
        </button>
      </div>
    </div>
  );
};
export default CTA;
