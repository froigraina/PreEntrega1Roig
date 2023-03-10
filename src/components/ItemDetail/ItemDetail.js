import React from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { CartContext } from "./../../Context/CartContext";
import { useContext } from "react";
import { RiShoppingCartLine } from "react-icons/ri";

const ItemDetail = ({ data }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, img, size, price } = data;

  return (
    <main className="main">
      <div className="item-container">
        <div className="item-left-column">
          <img src={img} alt={name} />
        </div>
        <div className="item-right-column">
          <h1>{name}</h1>

          <div id="size-container">
            <p>Size:</p>
            <p>Color:</p>
            <span> {size}</span>
            <span> Unico</span>
          </div>
          <h2> ${price}</h2>

          <button
            className="addtocart-button"
            onClick={() => addItemToCart(data)}
          >
            <span>
              <RiShoppingCartLine color="rgb(199, 199, 199)" fontSize="30px" />
            </span>
            <span> Agregar al carrito</span>
          </button>
          <Link to="/products" className="item-link">
            <BiArrowBack /> <span>Volver</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ItemDetail;
