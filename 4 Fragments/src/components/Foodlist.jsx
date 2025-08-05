import { useState } from "react";
import Item from "./Item";
function Foodlist({ items }) {

  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item, e) => {
     let newItems = [...activeItems, item]
     setActiveItems(newItems)
  }


  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleOnClick={(e) => onBuyButton(item, e)
          }
        ></Item>
      ))}
    </ul>
  );
}

export default Foodlist;
