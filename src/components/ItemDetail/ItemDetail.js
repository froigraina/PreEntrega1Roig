import React from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const ItemDetail = ({ data }) => {
  const { name, image, species, gender, origin, location } = data;

  return (
    <main className="main">
      <div className="item-container">
        <div className="item-column">
          <img src={image} alt={name} />
        </div>
        <div className="item-column">
          <div>
            <h1>{name}</h1>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
            <p>Origin: {origin?.name}</p>
            <p>Location: {location?.name}</p>
          </div>
          <Link to="/products" className="item-link">
            <BiArrowBack /> <span>Volver</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ItemDetail;
