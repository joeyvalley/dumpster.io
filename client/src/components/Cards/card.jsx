import React from "react";
import "./Card.css";
import item from "../../assets/items/trashcan.png";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import items from './items.json';

console.log(items);


function Card() {
  return (
    <div className="card-box">
      <img src={item} className="card-img" alt="" />
      <div className="card-info-flex">
        <h3 className="card-title">Item</h3>
        <div className="card-rating">
          <StarRateRoundedIcon />
          <p>10</p>
          <div className="price">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
