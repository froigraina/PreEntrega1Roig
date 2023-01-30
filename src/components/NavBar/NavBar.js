import React from "react";
import "./Styles.css";

import CartWidget from "../CartWidget/CartWidget";

const links = [
  {
    to: "/",
    title: "inicio",
    dropdown: false,
  },
  {
    to: "/productos",
    title: "productos",
    dropdown: true,
  },
  {
    to: "/contacto",
    title: "contacto",
    dropdown: false,
  },
  {
    to: "/quienes-somos",
    title: "quienes somos",
    dropdown: false,
  },
];

function NavBar() {
  return (
    <header>
      <div className="navbar-container">
        <a href="/">
          <img className="dollar-icon" src="/dollar.png" />
        </a>
        <ul className="navbar-items">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.to}>{link.title}</a>
            </li>
          ))}
        </ul>
        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;
