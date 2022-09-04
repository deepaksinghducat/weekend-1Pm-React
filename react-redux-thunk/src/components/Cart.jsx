import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const {cartItem} = useSelector(state => state.cart);
  return (
    <ul className="list-group mt-4">
		{
			cartItem.length > 0 ? cartItem.map(item => (
				<li className="list-group-item" key={item.id}>{item.title}</li>
			)): ( <li className="list-group-item">No Cart</li>)
		}
    </ul>
  );
};

export default Cart;
