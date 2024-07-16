import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faBoxOpen, faClipboardList, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/roboto'; 

const NavBar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleCheckoutClick = () => {
    navigate('/checkout');
  };

  return (
    <nav style={{
      backgroundColor: '#9c2483',
      position: 'sticky',
      top: '0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '4.75px 10.5px',
      zIndex: '1',
      
       
      backdropFilter: 'blur(10px)',  // Apply backdrop filter for blur effect
      backgroundImage: 'linear-gradient(to bottom, rgba(231, 236, 239, 0), rgba(231, 236, 239, 1))'  // Apply linear gradient background
    }} className="p-4">
      <div className="text-white font-bold text-xl" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <FontAwesomeIcon icon={faBoxOpen} className="mr-2" />
        E-Com
      </div>
      <div className="flex items-center space-x-6">
        <button onClick={handleHomeClick} className="text-white hover:text-gray-300 flex items-center">
          <FontAwesomeIcon icon={faHome} className="mr-1" />
          Home
        </button>
        <button onClick={handleCheckoutClick} className="text-white hover:text-gray-300 flex items-center">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
          Cart
        </button>
        <Link to="/products" className="text-white hover:text-gray-300 flex items-center">
          <FontAwesomeIcon icon={faBoxOpen} className="mr-1" />
          Products
        </Link>
        <Link to="/orders" className="text-white hover:text-gray-300 flex items-center">
          <FontAwesomeIcon icon={faClipboardList} className="mr-1" />
          Orders
        </Link>
        <Link to="/login" className="text-white hover:text-gray-300 flex items-center">
          <FontAwesomeIcon icon={faSignInAlt} className="mr-1" />
          LogIn
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
