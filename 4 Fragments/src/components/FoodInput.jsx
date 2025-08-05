import "bootstrap/dist/css/bootstrap.min.css";

const FoodInput = ({handleOnChange}) => {
  return (
      <input type="text" placeholder="Search for fooditem" className="form-control my-4" onChange={handleOnChange} />
  );
};

export default FoodInput;
