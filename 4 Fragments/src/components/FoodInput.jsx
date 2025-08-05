import "bootstrap/dist/css/bootstrap.min.css";

const FoodInput = ({handleOnKeyDown}) => {
  return (
      <input type="text" placeholder="Search for fooditem" className="form-control my-4" onKeyDown={handleOnKeyDown} />
  );
};

export default FoodInput;
