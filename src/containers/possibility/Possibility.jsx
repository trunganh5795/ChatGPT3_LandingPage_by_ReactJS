import React from "react";
import possibilityImg from "../../assets/possibility.png";
import "./possibility.css";

export default function Possibility() {
  return (
    <div className="possibility section__padding">
      <div className="possibility__image">
        <img src={possibilityImg} alt="possibility" />
      </div>
      <div className="possibility__content">
        <p>Request Early Access to Get Started</p>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p>Request Early Access to Get Started</p>
      </div>
    </div>
  );
}
