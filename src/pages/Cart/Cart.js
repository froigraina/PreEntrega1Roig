import React from "react";
import { useContext } from "react";
import { CartContext } from "./../../Context/CartContext";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { clearCart, cartItems } = useContext(CartContext);
  
  return (
    <div>
      {cartItems.length === 0 ? (
        <main className="empty-cart-container">
          <h1>Your cart is currently empty :(</h1>
          <Link to="/products" className="item-link">
            <BiArrowBack /> <span>Back to shop</span>
          </Link>
        </main>
      ) : (
        <div className="cart-main-container">
          <div className="cart-titles-container">
            <p className="cart-titles">Your Shopping Cart</p>
            <p className="cart-titles">Product Name</p>
            <p className="cart-titles">Price</p>
            <p className="cart-titles">Quantity</p>
            <p className="cart-titles"></p>
            <p className="cart-titles">Total</p>
          </div>
          <>
            {cartItems.map((cartItems) => (
              <CartItem data={cartItems} key={cartItems.id} />
            ))}
          </>
          <div id="button-container">
            <button>
              <Link to="/products" className="link-items">
                Back to shop
              </Link>
            </button>
            <button onClick={clearCart}>Clear Cart</button>

            <Link to="/checkout" className="link-items">
              <button>Finalizar compra</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
