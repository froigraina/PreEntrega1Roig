import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import CategoryContainer from "./../CategoryContainer/CategoryContainer";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import Loader from "../Loader/Loader";

const ItemListContainer = (props) => {
  const [product, setProduct] = useState([]);
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState([false]);

  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      const docs = [];

      if (category) {
        const q = query(
          collection(db, "clothes"),
          where("category", "==", category)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProduct(docs);
      } else {
        const q = query(collection(db, "clothes"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProduct(docs);
      }
    };
    getProducts();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [category]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main className="main">
          <CategoryContainer />
          <div className="item-list-container">
            <ItemList product={product} />
          </div>
        </main>
      )}
    </>
  );
};

export default ItemListContainer;
