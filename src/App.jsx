import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Products from './components/Products';
import Orders from './components/Orders';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import RelatedProducts from './components/RelatedProducts';
import Home from './components/home';
import Checkout from './components/Checkout';


function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productName) => {
    const index = cart.map(item => item.name).lastIndexOf(productName);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  };

  const handleLogin = (email) => {
    const user = { email };
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleRegister = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/product-detail/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/cart" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/related-products" element={<RelatedProducts />} />
        <Route path="/checkout" element={<Checkout />} />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
