import React from "react";
import Card from "./Card";
import "./Card.css";
import items from './items.json'

function Cards() {
  return (
    <div className="cards-flex">
      {/* items.map((item, index) => {

      <Card 
        img={item.img}
        desc={item.desc}
      />
      })

      ) */}
    </div>
  );
}

export default Cards;
