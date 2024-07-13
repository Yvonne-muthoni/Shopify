import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/checkout" />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
