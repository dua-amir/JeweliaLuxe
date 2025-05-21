
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${id}`} className="block h-full">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center">
          <p className="text-lg font-semibold text-gray-800 mb-2">{name}</p>
          <p className="text-sm text-gray-600">{currency}{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;

