import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import Item from "../Item/Item.js";
import CategoryContainer from "./../CategoryContainer/CategoryContainer";
import { Link, useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const [product, setProduct] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      fetch(
        "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,22,43,76,14,21,69,115,13,306,265,244,242"
      )
        .then((response) => response.json())
        .then((json) => {
          const filteredCharacters = json.filter(
            (character) => character.species.toLowerCase() === category
          );
          setProduct(filteredCharacters);
        })
        .catch((error) => console.log(error));
    } else {
      fetch(
        "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,22,43,76,14,21,69,115,13,306,265,244,242"
      )
        .then((response) => response.json())
        .then((json) => setProduct(json))
        .catch((error) => console.log(error));
    }
  }, [category]);

  return (
    <main className="main">
      <CategoryContainer />
      <div className="item-list-container">
        <ItemList product={product}/>
      </div>
    </main>
  );
};

export default ItemListContainer;