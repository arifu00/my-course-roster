const Cart = ({ cart }) => {
  const { title, credit, price } = cart;
  console.log(title, credit, price);
  return (
    <div>
   
        <li className="list-decimal">{title}</li>

    </div>
  );
};

export default Cart;
