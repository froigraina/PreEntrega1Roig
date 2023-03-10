import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "./../../firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const requestProduct = async () => {
      const productQuery = doc(db, "clothes", id);
      const product = await getDoc(productQuery);
      const productData = product.data();
      if (productData) {
        productData.id = id;
      }
      console.log("productdata: " + productData);
      setProduct(productData);
    };
    requestProduct();
  }, [id]);

  return (
    <>
      <ItemDetail data={product} />
    </>
  );
};

export default ItemDetailContainer;
