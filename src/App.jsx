import "./App.css";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";

function App() {
  return (
    <>
      <h4 className="text-3xl font-bold text-center pt-5 pb-1 border-b-2">
        Course Registration
      </h4>
      <div className="flex">
      <Courses></Courses>
      <Cart></Cart>
      </div>
    </>
  );
}

export default App;
