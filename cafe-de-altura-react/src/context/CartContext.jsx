import React, { createContext, useState,useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Carga el carrito desde localStorage al montar el componente
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product) => {

    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(p => p._id === product._id);

        if (existingProductIndex >= 0) {
            const updatedCart = [...prevCart];
            updatedCart[existingProductIndex].quantity += 1; // Incrementa la cantidad
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        } else {
            const newProduct = { ...product, quantity: 1 };  // Añade atributo de cantidad
            const updatedCart = [...prevCart, newProduct];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        }
    });
};

const incrementProduct = (productId) => {
  setCart(prevCart => {
      const newCart = [...prevCart];
      const productIndex = newCart.findIndex(p => p._id === productId);
      if (productIndex > -1) {
          newCart[productIndex].quantity = (newCart[productIndex].quantity ?? 0) + 1;
      }
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
      
  });
};

const decrementProduct = (productId) => {
  setCart(prevCart => {
      const newCart = [...prevCart];
      const productIndex = newCart.findIndex(p => p._id === productId);
      if (productIndex > -1 && (newCart[productIndex].quantity ?? 1) > 1) {
          newCart[productIndex].quantity -= 1;
      } else if (productIndex > -1 && newCart[productIndex].quantity === 1) {
          newCart.splice(productIndex, 1); // Elimina el producto si la cantidad es 1
      }
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
  });
};


const clearCart = () => {
  setCart([]);
  localStorage.removeItem('cart');
};



  return (
    <CartContext.Provider value={{ cart, addToCart, incrementProduct, decrementProduct,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
