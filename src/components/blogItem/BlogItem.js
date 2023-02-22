import React from "react";
import "./blogitem.css";

export default function BlogItem({ title, time, img }) {
  return (
    <div className="blog-item">
      <img src={img} alt={title} />
      <div className="blog-item__content">
        <div>
          <p>{time}</p>
          <h1>{title}</h1>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}
