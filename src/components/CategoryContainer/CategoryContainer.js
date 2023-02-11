import React from "react";
import "./CategoryContainer.css";

const CategoryContainer = ({ data, category }) => {
  return (
    <div className="category">
      <div className="category-img">
        <img src="./dollar.png" alt="dollar" />
      </div>
      <div className="category-content">
        <h1>{category}</h1>
      </div>
      <div className="category-atributes">
        <div className="category-atribute">
          <p>"Ver todos"</p>
        </div>
        <div className="category-atribute">
          <p>Blaba</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;
