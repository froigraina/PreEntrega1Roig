import React from "react";
import "./NavBar.css";

import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const links = [
  {
    to: "/",
    title: "inicio",
    dropdown: false,
  },
  {
    to: "/products",
    title: "productos",
    dropdown: true,
  },

  {
    to: "/colaboraciones",
    title: "colaboraciones",
    dropdown: false,
  },
];

let activeStyle = {
  textDecoration: "underline",
};
const NavBar = () => {
  return (
    <header>
      <div className="navbar-container">
        <Link to="/">
          <img className="dollar-icon" src="/dollar.png" alt="dollar-brand" />
        </Link>
        <ul className="navbar-items">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
