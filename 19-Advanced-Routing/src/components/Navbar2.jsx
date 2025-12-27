import { useNavigate } from "react-router-dom"

const Navbar2 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-300">
      {/* Page navigation using useNavigate() */}
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-orange-400 px-5 py-2 rounded m-2"
      >
        Return to Home Page
      </button>

      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-orange-400 px-5 py-2 rounded m-2"
      >
        Back
      </button>

      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-orange-400 px-5 py-2 rounded m-2"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
