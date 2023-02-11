import { RiShoppingCartLine } from "react-icons/ri";
import React from "react";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="cart-container">
      <a href="/cartWidget">
        <RiShoppingCartLine
          color="#f49404"
          fontSize="35px"
          className="cart-icon"
        />
      </a>
      <p>0</p>
    </div>
  );
}

export default CartWidget;
