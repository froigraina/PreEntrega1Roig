import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Inicio from "./pages/Inicio/Inicio";
import Productos from "./pages/Productos/Productos";
import Contacto from "./pages/Contacto/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Context/CartContext";
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/products" element={<Productos />} />
          <Route path="/products/:category" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cartWidget" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
