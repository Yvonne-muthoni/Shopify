

import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from "./components/Profile";


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import RelatedProducts from './components/RelatedProducts';
import Home from './components/home'; // Import the Home component



import Products from './components/Products'
import Orders from './components/Orders'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
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

  return (

    <BrowserRouter>
      <Navbar />
      <Profile />
    </BrowserRouter>
  );
}

export default App;

    <Router>
      <div>

        <header className="border-gray-200 pb-4 mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800">CHECKOUT</h1>
          <nav className="flex justify-center space-x-4">
            <Link to="/" className="text-blue-500 hover:underline"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg></Link>
            <Link to="/checkout" className="text-blue-500 hover:underline"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg></Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/checkout" 
            element={
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-2/3">
                  <ProductDetail addToCart={addToCart} removeFromCart={removeFromCart} />
                  <RelatedProducts />
                </div>
                <div className="lg:w-1/3">
                  <ShoppingCart cart={cart} />
                </div>
              </div>
            } 
          />


        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        
        </Routes>
      </div>
    </Router>
  )
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/" element={<Register />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

