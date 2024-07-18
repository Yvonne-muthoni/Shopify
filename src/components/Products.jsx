import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../Images/Image1.jpg';
import img2 from '../Images/Image2.jpg';
import img3 from '../Images/Image3.jpeg';
import img4 from '../Images/Image4.jpg';
import img5 from '../Images/Image5.jpeg';
import img6 from '../Images/Image6.jpg';
import img7 from '../Images/Image7.jpeg';
import img8 from '../Images/Images8.jpeg';

const products = [
    { id: 1, name: "Apple Laptop", price: 2099, img: img1 },
    { id: 2, name: "Apple Tablet", price: 1599, img: img2 },
    { id: 3, name: "Apple Phone", price: 1099, img: img3 },
    { id: 4, name: "Apple Watch", price: 599, img: img4 },
    { id: 5, name: "Samsung Laptop", price: 3099, img: img5 },
    { id: 6, name: "Samsung Tablet", price: 2599, img: img6 },
    { id: 7, name: "Samsung Phone", price: 1599, img: img7 },
    { id: 8, name: "Samsung Watch", price: 1299, img: img8 },
];

function Products({ addToCart }) {
    const navigate = useNavigate();
    const [quantities, setQuantities] = useState({});
    const [ratings, setRatings] = useState({});

    const handleAddToCart = (product) => {
        addToCart(product, quantities[product.id] || 1); // Default quantity is 1 if not specified
        navigate(`/product/${product.id}`);
    };

    const incrementQuantity = (productId) => {
        setQuantities(prev => ({
            ...prev,
            [productId]: (prev[productId] || 0) + 1
        }));
    };

    const decrementQuantity = (productId) => {
        if (quantities[productId] > 0) {
            setQuantities(prev => ({
                ...prev,
                [productId]: prev[productId] - 1
            }));
        }
    };

    const handleRatingChange = (productId, rating) => {
        setRatings(prev => ({
            ...prev,
            [productId]: rating
        }));
    };

    return (
        <>
            <h1 className='text-4xl font-extrabold text-center mt-20 text-gray-800 dark:text-white'>Products Available</h1>
            <div className='flex py-20 flex-wrap justify-center'>
                {products.map(product => (
                    <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
                        <a href="#">
                            <img className="p-10 rounded-t-lg w-full h-64 object-cover" src={product.img} alt={`${product.name} image`} />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                {[...Array(5)].map((star, index) => (
                                    <svg key={index} className={`w-4 h-4 cursor-pointer ${index < (ratings[product.id] || 0) ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"
                                         onClick={() => handleRatingChange(product.id, index + 1)}>
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                ))}
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                <div className="flex items-center">
                                    <button onClick={() => decrementQuantity(product.id)} className="text-gray-600 border border-gray-300 px-3 py-1 rounded-full focus:outline-none focus:border-blue-500 bg-gradient-to-r from-yellow-200 to-yellow-50">-</button>
                                    <span className="mx-2">{quantities[product.id] || 0}</span>
                                    <button onClick={() => incrementQuantity(product.id)} className="text-gray-600 border border-gray-300 px-3 py-1 rounded-full focus:outline-none focus:border-blue-500 bg-gradient-to-r from-yellow-200 to-yellow-50">+</button>
                                </div>
                            </div>
                            <button onClick={() => handleAddToCart(product)} className="mt-3 text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products;
