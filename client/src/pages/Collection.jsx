/*
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title'; // Reusing consistent title format

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortOption, setSortOption] = useState("Relevance");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const navigate = useNavigate();

  useEffect(() => {
    let updatedProducts = [...products];

    if (selectedCategories.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedMaterials.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        selectedMaterials.includes(product.material)
      );
    }

    if (showSearch && search.trim() !== '') {
      const lowerSearch = search.toLowerCase();
      updatedProducts = updatedProducts.filter(product =>
        product.name.toLowerCase().includes(lowerSearch)
      );
    }

    if (sortOption === "Price: Low to High") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [selectedCategories, selectedMaterials, sortOption, search, showSearch, products]);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className="collection-container">

        <div className="filters">
          <h2>FILTERS</h2>

          <div className="filter-box">
            <h3>CATEGORY</h3>
            {['Earrings', 'Necklace', 'Bracelet', 'Ring'].map(category => (
              <label key={category}>
                <input
                  type="checkbox"
                  value={category}
                  onChange={(e) => {
                    const { value, checked } = e.target;
                    setSelectedCategories(prev =>
                      checked ? [...prev, value] : prev.filter(cat => cat !== value)
                    );
                  }}
                />
                {category}
              </label>
            ))}
          </div>

          <div className="filter-box">
            <h3>MATERIAL</h3>
            {['Gold', 'Silver', 'Platinum'].map(material => (
              <label key={material}>
                <input
                  type="checkbox"
                  value={material}
                  onChange={(e) => {
                    const { value, checked } = e.target;
                    setSelectedMaterials(prev =>
                      checked ? [...prev, value] : prev.filter(mat => mat !== value)
                    );
                  }}
                />
                {material}
              </label>
            ))}
          </div>
        </div>

        <div className="collection-content">
          <div className="collection-header">
            <Title text1="ALL" text2="COLLECTIONS" />
            <select className="sort-dropdown" onChange={(e) => setSortOption(e.target.value)}>
              <option>Sort by Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item, index) => (
                <div
                  key={index}
                  className="product-card"
                  onClick={() => handleProductClick(item.id)}
                >
                  <img src={item.image.main} alt={item.name} />
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                </div>
              ))
            ) : (
              <p>No products match your filters.</p>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .collection-container {
          display: flex;
          padding: 40px;
          font-family: sans-serif;
        }

        .filters {
          width: 250px;
          padding-right: 30px;
        }

        .filters h2 {
          font-size: 20px;
          margin-bottom: 20px;
        }

        .filter-box {
          border: 1px solid #ddd;
          padding: 15px;
          margin-bottom: 20px;
        }

        .filter-box h3 {
          font-size: 16px;
          margin-bottom: 10px;
        }

        .filter-box label {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          font-size: 14px;
        }

        .filter-box label input {
          margin-right: 5px;
        }

        .collection-content {
          flex: 1;
        }

        .collection-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

   
        .collection-header h2 {
          font-size: 70px; 
          font-weight: 600;
        }

        .collection-header span {
          color: #888;
        }

        .sort-dropdown {
          padding: 8px 12px;
          font-size: 14px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 30px;
        }

        .product-card {
          padding: 10px;
          border-radius: 8px;
          text-align: center;
          transition: 0.3s;
          cursor: pointer;
        }

        .product-card:hover {
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        .product-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          margin-bottom: 10px;
          border-radius: 4px;
        }

        .product-card h4 {
          font-size: 16px;
          margin: 5px 0;
        }

        .product-card p {
          font-size: 14px;
          color: #444;
        }

        @media (max-width: 768px) {
          .collection-container {
            flex-direction: column;
            padding: 20px;
          }

          .filters {
            width: 100%;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default Collection;
*/

import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

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
      <div className="flex justify-center mb-10">
        <Title text1="ALL" text2="COLLECTIONS" />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(item => (
            <div
              key={item.id}
              className="cursor-pointer bg-white rounded-lg shadow hover:shadow-md transition p-4 text-center"
              onClick={() => handleProductClick(item.id)}
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
