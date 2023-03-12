import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Inicio from "./pages/Inicio/Inicio";
import Productos from "./pages/Productos/Productos";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Context/CartContext";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Colaboraciones from "./pages/Colaboraciones/Colaboraciones";
import CheckOutForm from "./components/CheckOutForm/CheckOutForm";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/products" element={<Productos />} />
          <Route path="/products/:category" element={<Productos />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cartWidget" element={<Cart />} />
          <Route path="/colaboraciones" element={<Colaboraciones />} />
          <Route path="/checkout" element={<CheckOutForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
