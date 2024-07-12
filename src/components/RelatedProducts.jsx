

function RelatedProducts() {
    const products = [
      { name: "Voroama Unisex Backpack", price: 199.00, image: "https://example.com/backpack1.jpg" },
      { name: "Herschel Supply Co. Classic Mid-Volume", price: 44.99, image: "https://example.com/backpack2.jpg" },
      { name: "Fjallraven - Kanken 20", price: 56.00, image: "https://example.com/backpack3.jpg" },
      { name: "Herschel Supply Co. Mammoth Medium", price: 199.00, image: "https://example.com/backpack4.jpg" },
    ]
  
    return (
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">You might also like</h2>
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
    )
  }
  
  export default RelatedProducts