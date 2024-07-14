import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import RelatedProducts from './components/RelatedProducts';
import Home from './components/home'; // Import the Home component

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
    <Router>
      <div>
        <header className="border-gray-200 pb-4 mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800">CHECKOUT</h1>
          <nav className="flex justify-center space-x-4">
            <Link to="/" className="text-blue-500 hover:underline">Home</Link>
            <Link to="/checkout" className="text-blue-500 hover:underline">Checkout</Link>
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
