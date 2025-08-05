import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Heading from "./components/Heading";
import Condition from "./components/Condition";
import Foodlist from "./components/Foodlist";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {

  let [foodItems, setFoodItems] = useState([]);
  
  const handleOnKeyDown = (e) => {
    if(e.key === "Enter") {
      let newItem = e.target.value;
      let newFoodItems = [...foodItems, newItem]
      setFoodItems(newFoodItems)
    }
  };
  return (
    <>
      <Container>
        <Heading></Heading>
        <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
        <Condition items={foodItems}></Condition>
        <Foodlist items={foodItems}></Foodlist>
      </Container>

      <Container>
        <p>
          Above is the list of food items that are good for your health and
          well-being
        </p>
      </Container>
    </>
  );
}

export default App;
