import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const localCart = () => {
  let storage = localStorage.getItem(`cart`);
  if (storage) {
    return JSON.parse(storage);
  } else {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localCart());

  useEffect(() => {
    localStorage.setItem(`cart`, JSON.stringify(cartItems));
  }, [cartItems]);

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const addItemToCart = (item) => {
    const newItem = { ...item, quantity: 1 };

    if (isInCart(newItem.id)) {
      const findProduct = cartItems.find((item) => item.id === newItem.id);
      const productIndex = cartItems.indexOf(findProduct);
      const newCart = [...cartItems];
      newCart[productIndex].quantity += newItem.quantity;
      setCartItems(newCart);
    } else {
      setCartItems([...cartItems, newItem]);
    }
  };

  const addItemQuantity = (id) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const removeItemFromCart = (id) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === id);
    if (existingCartItem.quantity > 1) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getItemCount = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        getItemCount,
        addItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
