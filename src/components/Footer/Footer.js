import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section-container">
      <section className="footer-section">
        <div className="footer-info-container">
          <div className="footer-info-colums">
            <h3>ENVIAMOS TU COMPRA</h3>
            <p>Entregas a todo el pais</p>
          </div>
          <div className="footer-info-colums">
            <h3>PAGA COMO QUIERAS</h3>
            <p>Tarjetas de credito o efectivo</p>
          </div>
          <div className="footer-info-colums">
            <h3>COMPRA CON SEGURIDAD</h3>
            <p>Tus datos siempre protegidos</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
