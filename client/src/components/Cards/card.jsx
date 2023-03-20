import React from "react";
import "./Card.css";

function Card({ id, img, title }) {
  return (
    <div className="card-box" key={id}>
      <img src={img} className="card-img" alt="" />
      <div className="card-info-flex">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
}

export default Card;
