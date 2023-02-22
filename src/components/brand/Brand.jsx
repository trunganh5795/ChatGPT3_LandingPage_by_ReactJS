import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./import.js";
import "./brand.css";

const Brand = () => {
  return (
    <div className="section__padding brand">
      <img src={google} alt="google" />
      <img src={slack} alt="slack" />
      <img src={atlassian} alt="atlassian" />
      <img src={dropbox} alt="dropbox" />
      <img src={shopify} alt="shopify" />
    </div>
  );
};
export default Brand;
