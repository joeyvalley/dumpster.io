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
      {items ?
        items.map(item => (
          <Card
            id={item._id}
            img={item.img}
            title={item.title}
          />
        ))
        : console.log("no")
      }
    </div >
  );
}

export default Cards;
