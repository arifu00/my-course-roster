import Cart from "../Cart/Cart";

const Carts = ({ carts }) => {
  // console.log(carts);
  return (
    <div>
      <div className="w-80 mt-5 bg-white">
        <h3 className=" text-center text-lg font-bold text-[#2F80ED]">
          Credit Hour Remaining
        </h3>
        <div className="flex justify-center mt-2">
          <hr className="border-b-2 w-9/12 " />
        </div>
        <div className="pl-4 mt-5">
          <h3 className="text-xl font-bold text-[#1C1B1B] mb-5">Course Name</h3>
          <ol className="pl-4">
          {carts.map((cart, idx) => (
            <Cart key={idx} cart={cart}></Cart>
          ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Carts;
