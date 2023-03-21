import "./Card.css";
import Card from './Card'
import { getItems } from "../../api/items.js";
import { useEffect, useState } from "react";

function Cards() {
  const [items, setItems] = useState()

  useEffect(() => {
    const workAround = async () => {
      const items = await getItems()
      setItems(items);
    };
    workAround();
  }, [])

  return (
    <div className="cards-flex">
      {items ?
        items.map(item => (
          <Card
            id={item._id}
            title={item.title}
            description={item.description}
            img={item.img}
            location={item.location}
            date={item.dateUploaded}
          />
        ))
        : null
      }
    </div >
  );
}

export default Cards;