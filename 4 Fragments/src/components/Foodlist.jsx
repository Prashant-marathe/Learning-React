import Item from "./Item";
function Foodlist({items}) {
    return <ul className="list-group">
        {items.map((item) => (
          <Item key={item} foodItem={item} handleOnClick={() => {console.log(`${item} bought`);}}></Item>
        ))}
      </ul>
}

export default Foodlist;