import React from "react";
import "./Footer.css";
import { FiTruck } from "react-icons/fi";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-section-container">
      <section className="footer-section">
        <div className="footer-info-container">
          <div className="footer-info-colums">
            <FiTruck fontSize="35px" />
            <div>
              <h3>ENVIAMOS TU COMPRA</h3>
              <p>Entregas a todo el pais</p>
            </div>
          </div>
          <div className="footer-info-colums">
            <BsCreditCard fontSize="35px" />
            <div>
              <h3>PAGA COMO QUIERAS</h3>
              <p>Tarjetas de credito o efectivo</p>
            </div>
          </div>
          <div className="footer-info-colums">
            <AiOutlineLock fontSize="35px" />
            <div>
              <h3>COMPRA CON SEGURIDAD</h3>
              <p>Tus datos siempre protegidos</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
