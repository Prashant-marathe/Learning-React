import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Heading from "./components/Heading";
import Condition from "./components/Condition";
import Foodlist from "./components/Foodlist";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = ["Protein", "Meat", "Eggs", "Vegetables", "Beans", "Nuts"];
  const handleOnChange = (e) => {
    console.log(e.target.value);
  }
  return (
    <>
      <Container>
        <Heading></Heading>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
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
