import React from "react";
import { BiDollarCircle } from "react-icons/bi";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <BiDollarCircle className="loader-icon" />
      </div>
    </div>
  );
};

export default Loader;
