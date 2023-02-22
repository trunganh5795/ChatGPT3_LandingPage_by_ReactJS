import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar__links">
        <div className="gpt3__navbar__links__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar__links__container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT3 ?</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Study</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar__sign">
        <p>Sign In</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar__menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar__menu__links slide-bottom-animation">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#wgpt3">What is GPT3 ?</a>
            </p>
            <p>
              <a href="#possibility">Open AI</a>
            </p>
            <p>
              <a href="#features">Case Study</a>
            </p>
            <p>
              <a href="#blog">Library</a>
            </p>
            <div className="gpt3__navbar__menu__links__sign">
              <p>Sign In</p>
              <p>
                <button type="button">Sign up</button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
