// src/contexts/CartContext.js
import React, { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    console.log('Product:', product); // Log product
    console.log('Quantity:', quantity); // Log quantity
  
    const existingProductIndex = cartItems.findIndex(item => item.product._id === product._id);
    
    if (existingProductIndex >= 0) {
      const updatedCart = [...cartItems];
      updatedCart[existingProductIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { product, quantity }]);
    }
  
    console.log('Updated Cart Items:', cartItems); // Log the updated cart state
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.product._id !== productId);
    setCartItems(updatedCart);
  };

  const updateCartItem = (productId, quantity) => {
    const updatedCart = cartItems.map(item => 
      item.product._id === productId ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
