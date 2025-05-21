/*
import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="contact-container">
      <style>{`
        .contact-container {
          padding: 3rem 2rem;
          max-width: 1100px;
          margin: auto;
          text-align: center;
          font-family: 'Arial', sans-serif;
          color: #333;
        }

        .section-title {
          display: flex;
          align-items: center;
          justify-content: center; 
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .section-title h2 {
          font-size: 1.5rem;
          font-weight: 500;
          margin: 0;
        }

        .section-title strong {
          font-weight: bold;
        }

        .title-line {
          width: 100px;
          height: 2px;
          background-color: #333;
        }

        .contact-content {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
          align-items: center;
        }

        .contact-image {
          width: 350px;
          height: 350px;
          object-fit: cover;
          border-radius: 4px;
        }

        .contact-info {
          flex: 1;
          max-width: 400px;
          text-align: left;
        }

        .contact-section {
          margin-bottom: 2rem;
        }

        .contact-section h3 {
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .explore-button {
          margin-top: 1rem;
          padding: 0.6rem 1.2rem;
          border: 1px solid black;
          background: white;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .explore-button:hover {
          background: black;
          color: white;
        }
      `}</style>

      <div className="section-title">
        <h2>CONTACT <strong>US</strong></h2>
        <div className="title-line"></div>
      </div>

      <div className="contact-content">
        <img
          src={assets.heroes}
          alt="office setup"
          className="contact-image"
        />
        <div className="contact-info">
          <div className="contact-section">
            <h3>Our Store</h3>
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
            <p>Tel: (415) 555-0132</p>
            <p>Email: greatstackdev@gmail.com</p>
          </div>

          <div className="contact-section">
            <h3>Careers at Forever</h3>
            <p>Learn more about our teams and job openings.</p>
            <button className="explore-button">Explore New</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
*/

import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="px-8 py-12 max-w-[1100px] mx-auto text-center font-sans text-gray-800">
      
      {/* Section Title */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <h2 className="text-2xl font-medium">
          CONTACT <strong className="font-bold">US</strong>
        </h2>
        <div className="w-24 h-[2px] bg-gray-800" />
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap gap-8 justify-center items-center">
        
        {/* Image */}
        <img
          src={assets.heroes}
          alt="office setup"
          className="w-[350px] h-[350px] object-cover rounded"
        />

        {/* Info Section */}
        <div className="flex-1 max-w-md text-left">
          
          {/* Store Info */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Our Shop</h3>
            <p>45000 Islamabad</p>
            <p>Block D, Islamabad, Pakistan</p>
            <p>Tel: (051) 341-0056</p>
            <p>Email: jewlialuxe@gmail.com</p>
          </div>

          {/* Explore Button */}
          <div>
            <button className="mt-4 px-5 py-2 border border-black text-black font-medium hover:bg-black hover:text-white transition-all">
              Explore New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
