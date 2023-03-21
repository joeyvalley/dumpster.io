import "./Card.css";
import Card from './Card'
import { getItems } from "../../api/items.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cards() {
  const [items, setItems] = useState()
  // const [ info, setInfo ] = useState()

  useEffect(() => {
    const workAround = async () => {
      const items = await getItems()
      setItems(items);
    };
    workAround();
  }, [])

  function handleClick() {
    // setInfo(items);
    console.log('info');
  }

  return (
    <div className="cards-flex">
      {items ?
        items.map(item => (
          <div onClick={handleClick}>
          <Link to={`/item/${item._id}`}>
          <Card
            id={item._id}
            img={item.img}
            title={item.title}
          />
          {/* <Link to="item/:_id"></Link> */}
            
          </Link>
          </div>
        ))
        : null
      }
    </div >
  );
}

export default Cards;