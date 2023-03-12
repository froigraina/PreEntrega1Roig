import React, { useContext, useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import "./CheckOutForm.css";
import { CartContext } from "../../Context/CartContext";
import MessageSuccess from "../MessageSuccess/MessageSuccess";
import { useNavigate } from "react-router-dom";

const buyerInitialState = {
  name: "",
  phoneNumber: "",
  email: "",
};

const CheckOutForm = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState(buyerInitialState);
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const newItems = cartItems.map((item) => {
      return {
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      };
    });

    console.log("cartItems:", cartItems);

    const total = newItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    const docRef = await addDoc(collection(db, "orders"), {
      buyer,
      items: newItems,
      total,
    });

    console.log("Document written with ID:", docRef.id);

    setOrderId(docRef.id);
    setBuyer(buyerInitialState);
  };

  useEffect(() => {
    if (orderId) {
      const timer = setTimeout(() => {
        setOrderId("");
        navigate("/");
        clearCart();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [orderId, navigate, clearCart, cartItems]);
  return (
    <>
      <form id="checkout-form" onSubmit={handleOnSubmit}>
        <h2>Por favor, complete el siguiente formulario</h2>
        <div className="checkout-form-container">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={buyer.name}
            onChange={handleOnChange}
          />

          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={buyer.email}
            onChange={handleOnChange}
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            required
            value={buyer.phoneNumber}
            onChange={handleOnChange}
          />

          <button form="checkout-form" type="submit">
            Submit
          </button>
        </div>
      </form>
      {orderId ? <MessageSuccess orderId={orderId} /> : null}
    </>
  );
};

export default CheckOutForm;
