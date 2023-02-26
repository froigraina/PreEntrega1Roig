import React from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";

const Inicio = () => {
  return (
    <main>
      <h2 className="dollar-subtittle">WELCOME TO DA DOLLAR LIFE.</h2>
      <Link to="/products">
        <div className="dollar-banner"></div>
      </Link>
      <section>
        <img src="/imgs/DSC07106.jpg" alt="dollar" />
        <img src="/imgs/DSC07297.jpg" alt="dollar" />
        <img src="/imgs/DSC07190.jpg" alt="dollar" />
        <img src="/imgs/DSC07438.jpg" alt="dollar" />
        <img src="/imgs/DSC07434.jpg" alt="dollar" />
      </section>
      <section className="dollar-info">
        <div className="dollar-info-1">
          <h3>ENVIAMOS TU COMPRA</h3>
          <p>Entregas a todo el pais</p>
        </div>
        <div className="dollar-info-1">
          <h3>PAGA COMO QUIERAS</h3>
          <p>Tarjetas de credito o efectivo</p>
        </div>
        <div>
          <h3>COMPRA CON SEGURIDAD</h3>
          <p>Tus datos siempre protegidos</p>
        </div>
      </section>
    </main>
  );
};

export default Inicio;
