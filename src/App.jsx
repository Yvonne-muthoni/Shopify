import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link,Navigate } from 'react-router-dom';
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
import Home from './components/home'; // Make sure this file exists


function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

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

  return (
    <Router>
      <div>
        
           
         
      
        <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={
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
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
