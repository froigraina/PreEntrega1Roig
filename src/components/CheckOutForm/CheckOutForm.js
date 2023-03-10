import React, { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const CheckOutForm = () => {
  const [orderId, setOrderId] = useState("");

  const sendOrder = () => {
    const order = {
      buyer: { name: "Francisco", phone: "1111", email: "aa@a.com" },
      items: [{ name: "bici", price: 100 }],
      total: 100,
    };
    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">E-Mail:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input type="tel" id="phoneNumber" name="phoneNumber" required />

      <button onSubmit={sendOrder} type="submit">
        Submit
      </button>
    </form>
  );
};

export default CheckOutForm;
