import { useState } from "react";
import "./App.css";
import Courses from "./Components/Courses/Courses";
import Carts from "./Components/Carts/Carts";

function App() {
  const [carts, setCarts] = useState([]);
  const handleAddToSelect = (course) => {
    const newCarts = [...carts, course];
    setCarts(newCarts);
  };
  return (
    <>
      <h4 className="text-3xl font-bold text-center pt-5 pb-1 border-b-2">
        Course Registration
      </h4>
      <div className="flex">
        <Courses handleAddToSelect={handleAddToSelect}></Courses>
        <Carts carts={carts}></Carts>
      </div>
    </>
  );
}

export default App;
