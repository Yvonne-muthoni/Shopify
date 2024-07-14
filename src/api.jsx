// src/api.js
const API_BASE_URL = 'http://localhost:5000'; // adjust the base URL as needed

export const addToCart = async (product_id, quantity, token) => {
  const response = await fetch(`${API_BASE_URL}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ product_id, quantity })
  });
  return response.json();
};

export const getCartItems = async (token) => {
  const response = await fetch(`${API_BASE_URL}/cart`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.json();
};
