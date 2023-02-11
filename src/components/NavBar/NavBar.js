import React from "react";
import "./NavBar.css";

import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

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

const NavBar = () => {
  return (
    <header>
      <div className="navbar-container">
        <Link to="/">
          <img className="dollar-icon" src="/dollar.png" alt="dollar-brand"/>
        </Link>
        <ul className="navbar-items">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;
