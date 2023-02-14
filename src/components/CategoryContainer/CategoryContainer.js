import React from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import "./CategoryContainer.css";

const categories = [
  { title: "human" },
  { title: "alien" },
  { title: "humanoid" },
];

const CategoryContainer = () => {
  return (
    <Container component={"nav"} className="category-container">
      {categories.map((category) => (
        <Link key={category.title} to={`/products/${category.title}`}>
          {category.title}
        </Link>
      ))}
    </Container>
  );
};

export default CategoryContainer;