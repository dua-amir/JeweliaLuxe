
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const navigate = useNavigate();

  useEffect(() => {
    let updatedProducts = [...products];

    if (showSearch && search.trim() !== '') {
      const lowerSearch = search.toLowerCase();
      updatedProducts = updatedProducts.filter(product =>
        product.name.toLowerCase().includes(lowerSearch)
      );
    }

    setFilteredProducts(updatedProducts);
  }, [search, showSearch, products]);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="px-6 py-10 md:px-16">
      <div className="flex items-center justify-center gap-4 mb-8">
        <h2 className="text-2xl font-medium text-yellow-800">
          All <strong className="font-bold">Products</strong>
        </h2>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(item => (
            <div
              key={item._id}
              className="cursor-pointer bg-white rounded-lg shadow hover:shadow-md transition p-4 text-center"
              onClick={() => handleProductClick(item._id)}
            >
              <img
                src={item.image.main}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h4 className="text-lg font-semibold">{item.name}</h4>
              <p className="text-gray-600">${item.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No products match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Collection;
