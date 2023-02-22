import React from "react";

import { Article, Brand, CTA, Feature, Navbar } from "./components";
import {
  Header,
  WhatGPT3,
  Features,
  Possibility,
  Blog,
  Footer,
} from "./containers";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}
