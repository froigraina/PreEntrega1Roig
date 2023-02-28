import { RiShoppingCartLine } from "react-icons/ri";
import React from "react";
import "./CartWidget.css";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { getItemCount } = useContext(CartContext);

  return (
    <div className="cart-container">
      <a className="icon-container" href="/cartWidget">
        <RiShoppingCartLine
          color="#f49404"
          fontSize="35px"
          className="cart-icon"
        />
      {getItemCount() > 0 && <span>{getItemCount()}</span>}

      </a>
    </div>
  );
};

export default CartWidget;
