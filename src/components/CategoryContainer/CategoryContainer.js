import React from "react";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./CategoryContainer.css";

const categories = [
  { title: "short" },
  { title: "hoodies" },
  { title: "tshirt" },
];
let activeStyle = {
  textDecoration: "underline",
};

const CategoryContainer = () => {
  return (
    <Container component={"nav"} className="category-container">
      <h3>Filter By:</h3>
      <NavLink key={`all`} to={`/products`}>
        Show All
      </NavLink>
      {categories.map((category) => (
        <NavLink
          key={category.title}
          to={`/products/${category.title}`}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          {category.title}
        </NavLink>
      ))}
    </Container>
  );
};

export default CategoryContainer;
