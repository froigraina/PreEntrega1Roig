import React from "react";
import "./CartItem.css";
import { CartContext } from "./../../Context/CartContext";
import { useContext } from "react";

const CartItem = ({ data }) => {
  const { name, img, price, id } = data;
  const { cartItems, removeItemFromCart, addItemQuantity } =
    useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);

  console.log(data);

  return (
    <section className="cart-items-container">
      <img className="cart-items" src={img} alt={name} />
      <h4 className="cart-items">{name}</h4>
      <p className="cart-items">${price}</p>
      <div className="cart-item-count">
        <button
          className="cart-count-button"
          onClick={() => removeItemFromCart(id)}
        >
          -
        </button>
        <p className="cart-items">{cartItem.quantity}</p>
        <button
          className="cart-count-button"
          onClick={() => addItemQuantity(id)}
        >
          +
        </button>
      </div>
      <p className="cart-items"></p>
      <p className="cart-items">${price * cartItem.quantity}</p>
    </section>
  );
};

export default CartItem;
