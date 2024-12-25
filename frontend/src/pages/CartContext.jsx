import React, { createContext, useContext, useState } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Create a provider for the CartContext
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add a game to the cart
  const addToCart = (game) => {
    setCart([...cart, game]);
  };

  // Function to remove a game from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((game) => game.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);