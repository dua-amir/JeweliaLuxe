/*
import React from 'react'; 
import { assets } from '../assets/assets'; // Import logo

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          
          <div className="footer-left">
            <img src={assets.logo} alt="Logo" className="footer-logo" />
            <p className="footer-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="footer-right">


            <div className="footer-section">
              <h2 className="footer-heading">COMPANY</h2>
              <ul className="footer-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Delivery</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h2 className="footer-heading">GET IN TOUCH</h2>
              <ul className="footer-list">
                <li> (051) 341-0056</li>
                <li>jewlialuxe@gmail.com</li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          Copyright 2025@ JewliaLuxe - All Right Reserved.
        </div>
      </footer>

      <style>{`
        .footer {
          background-color: white;
          color: #333;
          padding: 60px 20px;
          font-family: sans-serif;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .footer-left {
          flex: 1;
          min-width: 300px;
          align-self: flex-start; 
          margin-top: -10px;
        }

        .footer-right {
          display: flex;
          gap: 60px;
          flex: 1;
          justify-content: flex-end;
          min-width: 300px;
          margin-top: 10px; 
          flex-wrap: wrap;
        }

        .footer-section {
          min-width: 150px;
        }

        .footer-logo {
          width: 130px;
          margin-bottom: 20px;
        }

        .footer-text {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
        }

        .footer-heading {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          font-size: 14px;
          color: #555;
        }

        .footer-list li {
          margin-bottom: 10px;
        }

        .footer-list a {
          color: #555;
          text-decoration: none;
        }

        .footer-list a:hover {
          text-decoration: underline;
        }

        .footer-bottom {
          border-top: 1px solid #e0e0e0;
          margin-top: 40px;
          padding-top: 20px;
          text-align: center;
          font-size: 13px;
          color: #777;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 40px;
          }

          .footer-right {
            flex-direction: column;
            gap: 30px;
            margin-top: 0;
          }

          .footer-left {
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
*/


import React from 'react';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 py-12 font-sans">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8">
        
        {/* Left Section: Logo and Description */}
        <div className="flex-1 min-w-[280px]">
          <div className="flex items-start gap-4">
            <img
              src="/assets/JeweliaLogo.png"
              alt="JeweliaLuxe Logo"
              className="w-20 h-auto mt-1"
            />
            <p className="text-sm text-gray-600 leading-relaxed">
              At JewliaLuxe, every piece tells a story — crafted with passion, inspired by tradition, and designed to celebrate your uniqueness. From timeless elegance to modern charm, we bring you handcrafted beauty made with heart.
            </p>
          </div>
        </div>

        {/* Right Section: Links */}
        <div className="flex flex-1 justify-end flex-wrap gap-16 min-w-[280px]">
          
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">COMPANY</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="#" className="hover:underline">Our Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">GET IN TOUCH</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>(051) 341-0056</li>
              <li>jewlialuxe@gmail.com</li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs text-gray-500">
        Copyright 2025 © JewliaLuxe - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;


