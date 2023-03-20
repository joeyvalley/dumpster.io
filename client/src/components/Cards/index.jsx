import React, { useEffect } from "react";
import Card from "./Card";
import "./Card.css";
import items from './items.json'
import { useState, useEffect } from "react";

function Cards() {
  useEffect(() => {

  })
  return (
    <div className="cards-flex">
      items.map((item, index) => {

      <Card 
        img={item.img}
        desc={item.desc}
      />
      })

      )
    </div>
  );
}

export default Cards;
