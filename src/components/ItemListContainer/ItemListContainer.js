import React from "react";
import "./Styles.css";

function ItemListContainer(props) {
  const { greeting } = props;

  return (
    <main className="main">
      <div className="main-container">
        <h1>{greeting}</h1>
      </div>
    </main>
  );
}

export default ItemListContainer;
