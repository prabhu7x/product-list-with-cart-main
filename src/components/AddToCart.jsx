import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/slices/ItemsSlice";
import addToCartIcon from '/assets/images/icon-add-to-cart.svg'

function AddToCart({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      className="add-to-cart-button"
      onClick={() => dispatch(addToCart(id))}
    >
      <img src={addToCartIcon} alt="" />
      Add to Cart
    </button>
  );
}

export default AddToCart;
