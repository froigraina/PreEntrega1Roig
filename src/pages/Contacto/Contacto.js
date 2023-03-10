import React from "react";
import "./Contacto.css";

import { BsInstagram } from "react-icons/bs";
import CheckOutForm from "../../components/CheckOutForm/CheckOutForm";

const Contacto = () => {
  return (
    <section className="contact-section-container">
      <ul className="icon-list-container">
        <li>
          <a href="/">
            <BsInstagram fontSize={96} className="instagram" />
          </a>
        </li>
        <li>
          <a href="/">a</a>
        </li>
      </ul>
    </section>
  );
};

export default Contacto;
