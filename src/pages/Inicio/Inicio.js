import React from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";

const Inicio = () => {
  return (
    <main>
      <div className="dollar-banner"></div>
      <Link to="/products">
        <section className="homesection homesection-img">
          <div className="homeimgContainer">
            <img src="/imgs/Imagen2.jpg" alt="dollar" />
            <img src="/imgs/Imagen3.jpg" alt="dollar" />
            <img src="/imgs/Imagen1.jpg" alt="dollar" />
            <img src="/imgs/Imagen5.jpg" alt="dollar" />
            <img src="/imgs/Imagen4.jpg" alt="dollar" />
          </div>
        </section>
      </Link>

      <h2 className="hometitle">WELCOME TO THE DOLLAR LIFE.</h2>
    </main>
  );
};

export default Inicio;
