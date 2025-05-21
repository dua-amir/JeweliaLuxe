
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { products, addToCart } = useContext(ShopContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find(p => p._id === productId);
    if (found) {
      setProduct(found);
    } else {
      // Fallback: fetch product directly from backend
      fetch(`http://localhost:5000/api/products/${productId}`)
        .then(res => {
          if (!res.ok) throw new Error('Product fetch failed');
          return res.json();
        })
        .then(data => setProduct(data))
        .catch(err => console.error("Product fetch error:", err));
    }
  }, [productId, products]);

  if (!product) {
    return <div className="text-center py-20 text-gray-600">Product not found!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left - Product Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={product.image.main} 
            alt={product.name} 
            className="w-full max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right - Info and Description */}
        <div className="md:w-1/2 flex flex-col gap-8">
          {/* Top Card: Name, Price, Add to Cart */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">{product.name}</h2>
              <p className="text-2xl font-bold text-gray-800 mt-2">${product.price}</p>
            </div>
            <button
              onClick={() => {
                const token = localStorage.getItem("authToken");
                if (!token) {
                  alert("Please login to add items to your cart.");
                  navigate("/login");
                  return;
                }

                addToCart(product._id);
                console.log('Add to cart clicked for:', product._id);
                alert("Item added to cart!");
              }}
              className="bg-black text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-900 transition"
            >
              Add to Cart
            </button>
          </div>

          {/* Bottom Card: Description */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
