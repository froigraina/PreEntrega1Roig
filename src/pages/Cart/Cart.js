import React from 'react'
import { useContext } from 'react';
import { CartContext } from './../../Context/CartContext';


const Cart = () => {
const {clearCart} = useContext(CartContext);

  return (
    <button onClick={clearCart}>
      Clear Cart
    </button>
  )
}

export default Cart
