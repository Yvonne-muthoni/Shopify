import img1 from '../Images/Image1.jpg';
import img2 from '../Images/Image2.jpg';
import img3 from '../Images/Image3.jpeg';
import img4 from '../Images/Image4.jpg';
import img5 from '../Images/Image5.jpeg';
import img6 from '../Images/Image6.jpg';
import img7 from '../Images/Image7.jpeg';
import img8 from '../Images/Images8.jpeg';

const products = [
    { id: 1, name: "Apple Laptop", price: 2099, rating: 5.0, img: img1 },
    { id: 2, name: "Apple Tablet", price: 1599, rating: 5.0, img: img2 },
    { id: 3, name: "Apple Phone", price: 1099, rating: 5.0, img: img3 },
    { id: 4, name: "Apple Watch", price: 599, rating: 5.0, img: img4 },
    { id: 5, name: "Samsung Laptop", price: 3099, rating: 5.0, img: img5 },
    { id: 6, name: "Samsung Tablet", price: 2599, rating: 5.0, img: img6 },
    { id: 7, name: "Samsung Phone", price: 1599, rating: 5.0, img: img7 },
    { id: 8, name: "Samsung Watch", price: 1299, rating: 5.0, img: img8 },
];

function ProductDetail({ addToCart, removeFromCart }) {
    const handleAddToCart = () => {
        addToCart({ name: "Shopify Supply Co. Heritage", price: 59.99 });
    };

    const handleRemoveFromCart = () => {
        removeFromCart("Shopify Supply Co. Heritage");
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                <div className='cart'>
                    <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={img1} alt="Product" className="w-32 h-32 object-cover" />
                                        </td>
                                    <td>Apple Laptop</td>
                                    <td>1</td>
                                    <td>$3589</td>
                                </tr>
                            </tbody>
                    </table>
                </div>
                    <div className="flex gap-4">
                        <button onClick={handleAddToCart} className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">ADD TO CART</button>
                        <button onClick={handleRemoveFromCart} className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105">REMOVE FROM CART</button>
                    </div>
                </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "BRAND", items: ["Shopify Supply Co."] },
                    { title: "MATERIAL", items: ["Plastics and Polymers", "Semiconductors"] }
                ].map((section, index) => (
                    <div key={index}>
                        <h3 className="font-semibold mb-3 text-gray-700">{section.title}</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {section.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductDetail

