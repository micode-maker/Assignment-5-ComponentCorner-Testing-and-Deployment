import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';




function App() {
  const [cart, setCart] = useState(() => {
    const cartItems = localStorage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const addToCart = (product) => {
    console.log('Product added to cart:', product);
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    let removedOnce = false;
    setCart(cart.filter((product) => {
      if (product.id === productId && !removedOnce) {
        removedOnce = true;
        return false;
      }
      return true;
    }));
  };

  const products = [
    { 
      id: 1, 
      name: "Wireless Headphones", 
      price: 99.99, 
      image: '/wireless-headphones.jpg',
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    { 
      id: 2, 
      name: "Smart Watch", 
      price: 249.99, 
      image: "/smart-watch.jpg",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    { 
      id: 3, 
      name: "Bluetooth Speaker", 
      price: 79.99, 
      image: "/bluetooth-speaker.jpg",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    { 
      id: 4, 
      name: "Laptop Stand", 
      price: 49.99, 
      image: "/laptop-stand.jpg",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    { 
      id: 5, 
      name: "Webcam", 
      price: 129.99, 
      image: "/webcam.jpg",
      description: "4K webcam with auto-focus and noise reduction"
    },
    { 
      id: 6, 
      name: "Mechanical Keyboard", 
      price: 159.99, 
      image: "/mechanical-keyboard.jpg",
      description: "RGB backlit keyboard with custom switches"
    }
  ];

  return (
    <BrowserRouter>
      <div className="app">
        <Header cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      <Footer 
        title="Component Corner"
        email="Email:hello@componentcorner.com"
        phonenumber="(555) 123-4567"
        address="Address: 123 React Street, Component City, RC 12345"
      />
    </div>
    </BrowserRouter>
  );
}

export default App;