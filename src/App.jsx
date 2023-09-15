import { useState } from "react";
import "./App.css";
import Courses from "./Components/Courses/Courses";
import Cart from "./Components/Cart/Cart";

function App() {
  const [carts, setCarts] = useState([]);
  const [totalCredit, setTotalCredit] = useState([0]);
  const [remainingCredit, setRemainingCredit] = useState([20]);
  const handleAddToSelect = (course) => {
    const isExit = carts.find((item) => item.id === course.id);
    let totalCredit = course.credit;
    if (isExit) {
      return alert(`You Already Enroll the course`);
    } else {
      carts.forEach((item) => {
        totalCredit += item.credit;
      });
      const remainingCredit = 20 - totalCredit;
      
      if (totalCredit > 20) {
        return alert("You can not take any more pressure ");
      } else {
        setTotalCredit(totalCredit);
        setRemainingCredit(remainingCredit);
        const newCarts = [...carts, course];
        setCarts(newCarts);
      }
    }
  };
  return (
    <>
      <h4 className="text-3xl font-bold text-center pt-5 pb-1 border-b-2">
        Course Registration
      </h4>
      <div className="flex gap-6">
        <Courses handleAddToSelect={handleAddToSelect}></Courses>
        <Cart
          carts={carts}
          remainingCredit={remainingCredit}
          totalCredit={totalCredit}
        ></Cart>
      </div>
    </>
  );
}

export default App;
