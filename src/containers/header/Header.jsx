import React from "react";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";
import "./header.css";

export default function Header() {
  return (
    <div className="header-container section__padding">
      <div className="header-container__text">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header-container__text__input">
          <input type="text" placeholder="Enter your email" />
          <button>Get Started</button>
        </div>
        <div className="header-container__text__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header-container__image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}
