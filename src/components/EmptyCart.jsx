import React from "react";
import emptyCartIcon from "/assets/images/illustration-empty-cart.svg"

function EmptyCart() {
  return (
    <div className="empty-cart">
      <img src={emptyCartIcon} alt="" />
      <p>Your added items will appear here</p>
    </div>
  );
}

export default EmptyCart;
