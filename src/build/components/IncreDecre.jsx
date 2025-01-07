import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItems, decrement, increment, removeFromCart } from "../ItemsSlice";

function IncreDecre({ name, id }) {
  const dispatch = useDispatch();
  const cart = useSelector(cartItems);
  const itemQuantity = cart.find((item) => item.id === id);

  // const decrementItem = (itemID) => {
  //   dispatch(decrement(itemID));
  //   if (itemQuantity.quantity === 0) {
  //     return removeFromCart(itemID);
  //   }
  // };

  useEffect(() => {
    if (itemQuantity.quantity === 0) {
      dispatch(removeFromCart(id));
    }
  }, [decrement()]);

  return (
    <div className="item-plus-minus">
      <button onClick={() => dispatch(decrement(id))} className="minus">
        <img
          src={"../public/assets/images/icon-decrement-quantity.svg"}
          alt={name}
        />
      </button>
      <span>{itemQuantity.quantity}</span>
      <button onClick={() => dispatch(increment(id))}>
        <img
          src={"../public/assets/images/icon-increment-quantity.svg"}
          alt={name}
        />
      </button>
    </div>
  );
}

export default IncreDecre;
