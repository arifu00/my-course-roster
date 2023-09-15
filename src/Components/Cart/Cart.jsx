import React from "react";

const Cart = ({carts}) => {
    // console.log(carts);
  return (
    <div>
      <div className="w-96 mt-5 bg-white rounded-lg">
        <h3 className=" text-center text-xl font-bold text-[#2F80ED] pt-5">
          Credit Hour Remaining
        </h3>
        <div className="flex justify-center mt-2">
          <hr className="border-b-2 w-9/12 " />
        </div>
        <div className="pl-4 mt-5">
          <h3 className="text-xl font-bold text-[#1C1B1B] mb-5">Course Name</h3>
        </div>
        <div className="text-lg text-[#1c1b1b99] pb-5 pl-10 font-normal list-decimal">
          {carts.map((cart, idx) => (
            // console.log(cart)
            <li key={idx}>{cart.title}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
