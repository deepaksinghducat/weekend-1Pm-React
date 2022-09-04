import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/CartAction";

const Product = ({data}) => {

  const dispatch = useDispatch();

  return (
    <div class="card my-4">
      <img src={data.image} class="card-img-top" alt={data.title} />
      <div class="card-body">
        <h5 class="card-title">{data.title}</h5>
        <p class="card-text">
           {data.description}
        </p>
		<p>Price: ${data.price}</p>
		<button class="btn btn-primary" onClick={() => dispatch(addToCart(data))}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Product;
