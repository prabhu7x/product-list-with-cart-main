import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/slices/ItemsSlice";

function AddToCart({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      className="add-to-cart-button"
      onClick={() => dispatch(addToCart(id))}
    >
      <img src={"/assets/images/icon-add-to-cart.svg"} alt="" />
      Add to Cart
    </button>
  );
}

export default AddToCart;
