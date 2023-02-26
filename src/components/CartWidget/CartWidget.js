import { RiShoppingCartLine } from "react-icons/ri";
import React from "react";
import "./CartWidget.css";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { getItemCount } = useContext(CartContext);

  return (
    <div className="cart-container">
      <a href="/cartWidget">
        <RiShoppingCartLine
          color="#f49404"
          fontSize="35px"
          className="cart-icon"
        />
      </a>
      {getItemCount() > 0 && <span>{getItemCount()}</span>}
    </div>
  );
};

export default CartWidget;
