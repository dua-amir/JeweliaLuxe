

import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes('/collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  if (!visible || !showSearch) return null;

  return (
    
      <div className="max-w-3xl mx-auto flex items-center bg-white rounded-full border border-gray-300 px-4 ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="flex-grow py-2 px-3 text-gray-700 placeholder-gray-400 rounded-full focus:outline-none"
        />

        <img
          src="/assets/searchIcon.png"
          alt="Search Icon"
          className="w-5 h-5 ml-3"
          draggable={false}
        />

        <button onClick={() => setShowSearch(false)} className="ml-4 focus:outline-none">
          <img
            src="/assets/crossIcon.png"
            alt="Close Icon"
            className="w-4 h-4"
            draggable={false}
          />
        </button>
      </div>

  );
};

export default SearchBar;
