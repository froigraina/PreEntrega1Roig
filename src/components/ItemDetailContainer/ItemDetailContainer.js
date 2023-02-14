import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => setProduct(json))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <ItemDetail data={product} />
    </>
  );
};

export default ItemDetailContainer;