import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItems, removeFromCart } from '../features/slices/ItemsSlice'
import * as motion from "motion/react-client"

function ItemsComp({
  confirmationClass,
  confirmation,
  thumbnail,
  button,
  tree,
  button_name,
  onclick,
}) {
  const cart = useSelector(cartItems);

  const dispatch = useDispatch();

  const totalPrice = cart.reduce(function (acc, item) {
    acc += item.quantity * item.price;
    return acc;
  }, 0);

  const styles = {
    span1: { fontWeight: "500", color: "hsl(14, 86%, 42%)" },
    span3: { fontWeight: "500", color: "hsl(12, 20%, 44%)" },
    thumb: { display: "flex", gap: "1rem" },
    totalPriceCont: {background: "hsl(13, 31%, 94%)", padding: '0 1.3rem', borderRadius: ' 0 0 10px 10px'}
  };

  return (
    <div className={`items-component ${confirmationClass}`}>
      {confirmation && (
        <div className="order-image">
          <img
            src={"/assets/images/icon-order-confirmed.svg"}
            alt="confirmed"
          />
          <h1>Ordered Confirmed</h1>
          <p>We hope you enjoyed your food!</p>
        </div>
      )}

      <div className="thumbnail-container">
        {cart.map((item) => {
          const { quantity, price } = item;
          return (
            <motion.section
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            key={item.id}>
              <div style={styles.thumb}>
                {thumbnail && (
                  <img src={item.image.thumbnail} alt={item.name} />
                )}
                <div className="info">
                  <h5>{item.name}</h5>
                  <span style={styles.span1}>{quantity}x</span>
                  <span> @ ${price}</span>
                  {button ? (
                    <span style={styles.span3}>${quantity * price}</span>
                  ) : null}
                </div>
              </div>
              {button ? (
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  <img
                    src={"/assets/images/icon-remove-item.svg"}
                    alt="remove item"
                  />
                </button>
              ) : (
                <span style={styles.span3}>${quantity * price}</span>
              )}
            </motion.section>
          );
        })}
      </div>
      <div style={!button ? styles.totalPriceCont : null}>
        <p className="total-price">
          Order Total <span>${totalPrice}</span>
        </p>
        {tree && (
          <div className="tree">
            <img
              src={"/assets/images/icon-carbon-neutral.svg"}
              alt="carbon-neutral"
            />
            <p>
              This is a <span>carbon-neutral</span> delivery
            </p>
          </div>
        )}
      </div>
      <button onClick={onclick} className="cart-button">
        {button_name}
      </button>
    </div>
  );
}

export default ItemsComp;
