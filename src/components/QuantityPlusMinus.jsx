import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItems, decrement, increment, removeFromCart } from "../features/slices/ItemsSlice";
import decrementIcon from "/assets/images/icon-decrement-quantity.svg"
import incrementIcon from  "/assets/images/icon-increment-quantity.svg"
import * as motion from 'motion/react-client';

function QuantityPlusMinus({ name, id }) {
  const dispatch = useDispatch();
  const cart = useSelector(cartItems);
  const itemQuantity = cart.find((item) => item.id === id);

  useEffect(() => {
    if (itemQuantity.quantity === 0) {
      dispatch(removeFromCart(id));
    }
  }, [decrement()]);

  return (
    <div className="item-plus-minus">
      <button onClick={() => dispatch(decrement(id))} className="minus">
        <img
          src={decrementIcon}
          alt={name}
        />
      </button>
      <motion.span
              key={itemQuantity.quantity} // Using key triggers re-mounting on count change
              initial={{ scale: 0 }}
              animate={{ scale: [0.5, 0.8, 0.5] }} // Keyframe animation: scale down and back up
              transition={{ duration: 0.3 }}
              style={{ display: "inline-block", fontSize: "2rem" }}
      >{itemQuantity.quantity}</motion.span>
      <button onClick={() => dispatch(increment(id))}>
        <img
          src={incrementIcon}
          alt={name}
        />
      </button>
    </div>
  );
}

export default QuantityPlusMinus
