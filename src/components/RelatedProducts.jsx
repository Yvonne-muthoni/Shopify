import img2 from '../Images/Image2.jpg';
import img3 from '../Images/Image3.jpeg';
import img6 from '../Images/Image6.jpg';
import img7 from '../Images/Image7.jpeg';

function RelatedProducts() {
  const products = [
    { name: "Apple Tablet", price: 1599, image: img2 },
    { name: "Apple Phone", price: 1099, image: img3 },
    { name: "Samsung Tablet", price: 2599, image: img6},
    { name: "Samsung Phone", price: 1599, image: img7 }
  ];

  return (
    <div className="mt-16 mb-10">
      <h2 className="text-2xl font-semibold ml-8 mb-8 text-gray-800">You might also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="font-semibold text-gray-800 mb-2 truncate">{product.name}</h3>
            <p className="text-gray-600 font-medium">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
