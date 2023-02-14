import React from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";

const Inicio = () => {
  return (
    <main>
      <Link to="/products">
        <div className="dollar-banner"></div>
      </Link>
    </main>
  );
};

export default Inicio;