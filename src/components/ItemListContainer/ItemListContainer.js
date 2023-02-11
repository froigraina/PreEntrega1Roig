import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import Item from "../Item/Item.js";
import CategoryContainer from './../CategoryContainer/CategoryContainer';

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10")
      .then((response) => response.json())
      .then((json) => setProduct(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="main">
      <div className="category-container">
        <CategoryContainer category={"Gender"}/>
        <CategoryContainer category={"Species"}/>
        <CategoryContainer category={"Status"}/>
      </div>
      <div className="item-list-container">
        {product.map((product) => {
          return <Item key={product.id} data={product} />;
        })}
      </div>
    </main>
  );
};

export default ItemListContainer;
