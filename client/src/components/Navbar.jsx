import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { setShowSearch } = useContext(ShopContext);

  const username = localStorage.getItem("username");

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/collection', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleLogout = () => {
    localStorage.clear();
    alert("Logout successful!");
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="w-full mb-10 shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/assets/JeweliaLogo.png" alt="Logo" className="h-18 object-contain" />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-10">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={({ isActive }) =>
                `relative text-lg font-semibold transition-colors duration-300 ${
                  isActive ? 'text-yellow-800' : 'text-gray-700 hover:text-yellow-600'
                }`
              }
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 w-full h-[2px] bg-yellow-600 transition-opacity duration-300 ${
                  hovered === index ? 'opacity-100' : 'opacity-0'
                }`}
              ></span>
            </NavLink>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <img
            src="/assets/searchicon.jpg"
            alt="Search"
            className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => setShowSearch(true)}
          />

          <Link to="/cart">
            <img
              src="/assets/cartIcon.png"
              alt="Cart"
              className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform"
            />
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <img
              src="/assets/profileIcon.png"
              alt="Profile"
              className="w-8 h-8 cursor-pointer rounded-full border border-gray-300 p-1 hover:shadow-md transition-shadow"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-10 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
                {username ? (
                  <>
                    <p className="px-4 py-2 text-yellow-600 font-medium">Hi, {username}</p>
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        navigate("/profile");
                      }}
                      className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Login / Sign Up
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <img
            src="/assets/menuIcon.png"
            alt="Menu"
            onClick={() => setVisible(true)}
            className="w-6 h-6 cursor-pointer md:hidden"
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          visible ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <div className="flex flex-col p-5 space-y-5">
          <button
            onClick={() => setVisible(false)}
            className="self-end text-gray-500 hover:text-gray-800 text-xl"
          >
            ✕
          </button>

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setVisible(false)}
              className="text-lg text-gray-700 hover:text-yellow-500 font-medium"
            >
              {item.label}
            </NavLink>
          ))}

          <hr />

          {username ? (
            <>
              <p className="text-gray-600">Hi, {username}</p>
              <button
                onClick={() => {
                  setVisible(false);
                  navigate("/profile");
                }}
                className="text-left text-gray-700 hover:text-yellow-500"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  setVisible(false);
                  handleLogout();
                }}
                className="text-left text-gray-700 hover:text-yellow-500"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setVisible(false)}
              className="text-gray-700 hover:text-yellow-500"
            >
              Login / Sign Up
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
