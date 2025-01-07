import React from "react";
import { cartItems } from "../ItemsSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../ItemsSlice";

function Cart() {
  const cart = useSelector(cartItems);

  const dispatch = useDispatch();

  const totalPrice = cart.reduce(function (acc, item) {
    acc += item.quantity * item.price;
    return acc;
  }, 0);

  return (
    <div>
      <h1>Your Cart {cart.length}</h1>
      <div className="items-cont">
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <p>
                {item.quantity}x <span>{item.price * item.quantity}</span>
              </p>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                remove
              </button>
            </div>
          );
        })}
      </div>
      total price {totalPrice}
    </div>
  );
}

export default Cart;
