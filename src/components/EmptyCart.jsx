import React from "react";

function EmptyCart() {
  return (
    <div className="empty-cart">
      <img src={"/assets/images/illustration-empty-cart.svg"} alt="" />
      <p>Your added items will appear here</p>
    </div>
  );
}

export default EmptyCart;
