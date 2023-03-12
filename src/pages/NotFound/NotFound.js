import React from "react";
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Página no encontrada</h1>
      <p>Lo sentimos, la página que está buscando no existe.</p>
      <a href="/">Volver a la página principal</a>
    </div>
  );
};

export default NotFound;
