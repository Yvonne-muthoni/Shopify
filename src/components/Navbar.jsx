import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faBoxOpen, faClipboardList, faSignInAlt, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/roboto';

const Navbar = ({ user, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleCheckoutClick = () => {
    navigate('/checkout');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    onLogout();
    setDropdownOpen(false);
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
      backdropFilter: 'blur(10px)',  
      backgroundImage: 'linear-gradient(to bottom, rgba(231, 236, 239, 0), rgba(231, 236, 239, 1))' 
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
        <button onClick={handleCartClick} className="text-white hover:text-gray-300 flex items-center">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
          Cart
        </button>
        <button onClick={handleCheckoutClick} className="text-white hover:text-gray-300 flex items-center">
          <FontAwesomeIcon icon={faCreditCard} className="mr-1" />
          Checkout
        </button>
        <Link to="/products" className="text-white hover:text-gray-300 flex items-center">
          <FontAwesomeIcon icon={faBoxOpen} className="mr-1" />
          Products
        </Link>
        <Link to="/orders" className="text-white hover:text-gray-300 flex items-center">
          <FontAwesomeIcon icon={faClipboardList} className="mr-1" />
          Orders
        </Link>
        {user ? (
          <div className="relative">
            <button onClick={toggleDropdown} className="text-white hover:text-gray-300 flex items-center">
              <FontAwesomeIcon icon={faSignInAlt} className="mr-1" />
              {user.email}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="text-white hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-1" />
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
