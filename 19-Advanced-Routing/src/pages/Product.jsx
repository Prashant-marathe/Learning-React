import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-10">
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
      </div>
      <div>
            {/* Only chlid component will render here */}
        <Outlet />
      </div>
    </div>
  );
};

export default Product;
