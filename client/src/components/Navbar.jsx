/*
import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  // State for hover effect on nav items
  const [hovered, setHovered] = useState(null);

  // State to toggle mobile menu visibility
  const [visible, setVisible] = useState(false);

  // Context values: show search modal & get cart count
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  // Define navigation items for the navbar
  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/collection', label: 'COLLECTION' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <div className="navbar">
      
      <Link to='/'>
        <img src={assets.logo} className="logo" alt="Logo" />
      </Link>

      <ul className="nav-links">
        {navItems.map((item, index) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="nav-link"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <p>{item.label}</p>

            <hr
              className="separator"
              style={{ opacity: hovered === index ? 1 : 0 }}
            />
          </NavLink>
        ))}
      </ul>
      <div className="icon-section">

        <img
          onClick={() => setShowSearch(true)}
          src={assets.searchIcon}
          className="icon"
          alt="search"
        />

        <div className="profile-container">
        <Link to="/login">
        <img src={assets.profileIcon} className="icon" alt="profile" />
        </Link>
        <div className="dropdown-menu">
        <p className="dropdown-item">Profile</p>
        <p className="dropdown-item">Orders</p>
        <p className="dropdown-item">Logout</p>
        </div>
        </div>


        <Link to="/cart" className="cart-container">
          <img src={assets.cart} className="cart-icon" alt="cart" />
          <p className="cart-count">{getCartCount()}</p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menuIcon}
          className="menu-icon"
          alt="menu"
        />
      </div>

      <div className={`mobile-menu ${visible ? 'show' : ''}`}>
        <div className="mobile-menu-content">


          <div onClick={() => setVisible(false)} className="back-btn">
            <p>Back</p>
          </div>

          <NavLink to="/" className="mobile-link">HOME</NavLink>
          <NavLink to="/collection" className="mobile-link">COLLECTION</NavLink>
          <NavLink to="/about" className="mobile-link">ABOUT</NavLink>
          <NavLink to="/contact" className="mobile-link">CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
*/


import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [visible, setVisible] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const { setShowSearch, getCartCount } = useContext(ShopContext);

  // For demo, replace this with real auth context/state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/collection', label: 'COLLECTION' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between font-sans relative z-50">
      
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-24 object-contain" />
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-10">
        {navItems.map((item, index) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative text-gray-700 hover:text-gray-900 font-semibold px-1 ${
                isActive ? 'text-gray-900' : ''
              }`
            }
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <p>{item.label}</p>
            <hr
              className="border-t-2 border-gray-900 absolute left-0 right-0 bottom-0 transition-opacity duration-200"
              style={{ opacity: hovered === index ? 1 : 0 }}
            />
          </NavLink>
        ))}
      </ul>

      {/* Icons Section */}
      <div className="flex items-center space-x-6">
        {/* Search Icon */}
        <button
          onClick={() => setShowSearch(true)}
          className="focus:outline-none"
          aria-label="Search"
        >
          <img src={assets.searchIcon} alt="Search" className="w-6 h-6" />
        </button>

        {/* Profile Icon with dropdown */}
        <div className="relative">
          <button
            onClick={() => setProfileDropdown(!profileDropdown)}
            className="focus:outline-none"
            aria-label="User Profile"
          >
            <img
              src={assets.profileIcon}
              alt="Profile"
              className="w-7 h-7 rounded-full hover:ring-2 hover:ring-gray-300 transition"
            />
          </button>

          {profileDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-2 text-gray-700 font-medium text-sm">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setProfileDropdown(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setProfileDropdown(false)}
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setProfileDropdown(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      // Add logout logic here
                      setIsLoggedIn(false);
                      setProfileDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Cart Icon (no item count) */}
        <Link to="/cart" className="relative focus:outline-none">
          <img src={assets.cart} alt="Cart" className="w-7 h-7" />
        </Link>

        {/* Mobile menu icon */}
        <button
          onClick={() => setVisible(true)}
          className="md:hidden focus:outline-none"
          aria-label="Open menu"
        >
          <img src={assets.menuIcon} alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transform transition-transform duration-300 ${
          visible ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="bg-white w-64 h-full p-6 flex flex-col">
          {/* Close Button */}
          <button
            onClick={() => setVisible(false)}
            className="mb-6 text-gray-700 font-semibold focus:outline-none"
          >
            &larr; Back
          </button>

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="mb-4 text-gray-700 font-semibold hover:text-gray-900"
              onClick={() => setVisible(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

