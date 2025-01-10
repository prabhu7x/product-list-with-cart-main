import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadedItems, cartItems, startNewOrder } from "../features/slices/ItemsSlice"
import AddToCart from "./AddToCart";
import QuantityPlusMinus from "./QuantityPlusMinus";
import ItemsComp from "./ItemsComp";
import EmptyCart from "./EmptyCart";
import {  motion } from "motion/react";

function ItemsPages() {
  const items = useSelector((state) => state.items.data);
  const cart = useSelector(cartItems);
  const dispatch = useDispatch();
  const [confirmation, setConfirmation] = useState(false);

  const overlay = () => {
    document.body.classList.add("overlay");
    setConfirmation(true);
  };
  const confirmClicked = () => {
    document.body.classList.remove("overlay");
    setConfirmation(false);
    dispatch(startNewOrder())
  };
  useEffect(() => {
    dispatch(loadedItems());
  }, [dispatch]);


  return (
    <div className="item-page">
      <div className="items">
        {items.map((item) => {
          return (
            <motion.article 
                  key={item.id}
                  initial={{scale: 0}}
                  animate={{scale: 1}}
                  transition={{ type: "spring", stiffness: 100, ease: "easeInOut" }}
                  >
              <figure className="thumbnail">
                <picture>
                  <source
                    srcSet={item.image.desktop}
                    media="(min-width: 600px)"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                  <source
                    srcSet={item.image.mobile}
                    media="(max-width: 599px)"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                  <img
                    src={item.image.mobile}
                    style={{ width: "100%",...(cart.find((cartItem) => cartItem.id === item.id) ? {border: 'solid 2px red'} : {} )}}
                    alt="image"
                  />
                </picture>
                <div className="add-to-cart-cont">
                  {cart.find((cartItem) => cartItem.id === item.id) ? (
                    <QuantityPlusMinus id={item.id} name={item.name} />
                  ) : (
                    <AddToCart id={item.id} />
                  )}
                </div>
                <figcaption className="info">
                  <p>{item.category}</p>
                  <h4>{item.name}</h4>
                  <p className="price">${item.price}</p>
                </figcaption>
              </figure>
            </motion.article>
          );
        })} 
      </div>
      <div className="cart-cont">
        <h2>Your Cart ({cart.length})</h2>
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <ItemsComp
            confirmation={false}
            thumbnail={false}
            button={true}
            button_name={"Confirm Order"}
            tree={true}
            onclick={overlay}
          />
        )}
      </div>
      {confirmation ? (
        <div id="confirmation">
          <ItemsComp
            confirmation={true}
            thumbnail={true}
            button={false}
            button_name={"Start New Order"}
            tree={false}
            onclick={confirmClicked}
            confirmationClass={"confirmation"}
          />
        </div>
      ) : null}
    </div>
  );
}

export default ItemsPages;
