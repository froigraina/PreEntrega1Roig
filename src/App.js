import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Inicio from "./pages/Inicio/Inicio";
import Productos from "./pages/Productos/Productos";
import Contacto from "./pages/Contacto/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/products" element={<Productos />} />
        <Route path="/products/:category" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;