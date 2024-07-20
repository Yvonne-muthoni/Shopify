import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Products from './components/Products';
import Orders from './components/Orders';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import RelatedProducts from './components/RelatedProducts';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
  const [cart, setCart] = useState([]);
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

  const handleRegister = (newUser) => {
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Router>
      <div>
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/cart" element={
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <ProductDetail addToCart={addToCart} removeFromCart={removeFromCart} />
                <RelatedProducts />
              </div>
              <div className="lg:w-1/3">
                <ShoppingCart cart={cart} />
              </div>
            </div>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
