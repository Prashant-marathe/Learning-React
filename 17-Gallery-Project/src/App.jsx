import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = <h4 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h4>;
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem}/>
        </div>
      );
    });
  }
  return (
    <div className="w-full h-screen overflow-auto bg-black text-white">
      <div className="flex items-center justify-center flex-wrap gap-10 px-10 py-5">
        {printUserData}
      </div>

      <div className="flex gap-4 items-center justify-center py-4">
        <button onClick={()=> {
          if(index > 1) {
            setUserData([])
            setIndex(index - 1)
          }
        }} className="active:scale-95 px-6 font-semibold py-2 rounded bg-amber-500 text-black text-sm">
          Prev
        </button>
        <h4>Page {index}</h4>
        <button onClick={()=> {
          setUserData([])
            setIndex(index + 1)
        }} className="active:scale-95 px-6 font-semibold py-2 rounded bg-amber-500 text-black text-sm">
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
