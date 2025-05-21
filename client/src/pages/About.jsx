/*
import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="about-container">
      <style>{`
        .about-container {
          padding: 3rem 2rem;
          max-width: 1200px;
          margin: auto;
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

        .about-content {
          display: flex;
          justify-content: center;
          gap: 2rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .about-image {
          width: 350px; /
          height: 400px; 
          object-fit: cover;
          flex-shrink: 0;
        }

        .about-text {
          flex: 1;
          font-size: 0.85rem;
        }

        .about-text p {
          margin-bottom: 0.3rem;
        }

        .about-text h4 {
          margin-top: 1rem;
          margin-bottom: 0.4rem;
          font-weight: bold;
        }

        .choose-container {
          margin-top: 4rem;
           justify-content: flex-start; 
           text-align: left;
        }

        .choose-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          margin-top: 2rem;
        }

        .choose-item {
  border: 1px solid #ddd;
  padding: 1.5rem;
  text-align: left; 
  background-color: #fff;
}

        .choose-item h4 {
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .choose-item p {
          color: #555;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .about-content {
            flex-direction: column;
            text-align: center;
          }

          .about-image {
            width: 100%;
            height: auto;
          }

          .choose-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
        }
      `}</style>

      <div className="section-title">
        <h2>ABOUT <strong>US</strong></h2>
        <div className="title-line"></div>
      </div>

      <div className="about-content">
        <img src={assets.About} alt="about" className="about-image" />
        <div className="about-text">
          <p>
          Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p>
          Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          <h4>Our Mission</h4>
          <p>
          Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div className="choose-container">
        <div className="section-title">
          <h2>WHY <strong>CHOOSE US</strong></h2>
          <div className="title-line"></div>
        </div>

        <div className="choose-grid">
          <div className="choose-item">
            <h4>QUALITY ASSURANCE:</h4>
            <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className="choose-item">
            <h4>CONVENIENCE:</h4>
            <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier</p>
          </div>
          <div className="choose-item">
            <h4>EXCEPTIONAL SERVICE:</h4>
            <p>Our team of dedicated professionals is here to assist you the way. Ensuring your satisfaction is our top priority </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
*/

import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="px-4 py-12 max-w-screen-xl mx-auto text-gray-800 font-sans">
      
      {/* About Us Title */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <h2 className="text-xl font-medium">ABOUT <strong className="font-bold">US</strong></h2>
        <div className="w-24 h-0.5 bg-gray-800" />
      </div>

      {/* About Content */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        <img
          src={assets.About}
          alt="about"
          className="w-80 h-[400px] object-cover rounded shadow-md"
        />
        <div className="flex-1 text-sm max-w-lg">
          <p className="mb-2">
            At Forever, we’re more than just an online store — we’re a lifestyle movement. Created for dreamers, doers, and trendsetters, our brand exists to bring style, comfort, and uniqueness into your everyday life.
          </p>
          <p className="mb-2">
            From must-have fashion pieces to everyday essentials, we handpick each item with love and purpose. Whether you're curating your closet or gifting something special, we've got your back with items that speak your vibe.
          </p>
          <h4 className="font-bold mt-4 mb-1">Our Mission</h4>
          <p>
            We aim to inspire confidence and spark joy through every order. With a focus on simplicity, trust, and flair, our mission is to redefine the way you shop online — easy, exciting, and just for you.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 text-left">
        <div className="flex items-center justify-center gap-3 mb-8">
          <h2 className="text-xl font-medium">WHY <strong className="font-bold">CHOOSE US</strong></h2>
          <div className="w-24 h-0.5 bg-gray-800" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border p-6 bg-white shadow-sm">
            <h4 className="font-bold mb-2">Handpicked Perfection</h4>
            <p className="text-gray-600 text-sm">
              Every product in our collection is chosen with care — only the best styles, trends, and quality make the cut.
            </p>
          </div>
          <div className="border p-6 bg-white shadow-sm">
            <h4 className="font-bold mb-2">Seamless Experience</h4>
            <p className="text-gray-600 text-sm">
              From scroll to doorstep, we make shopping smooth, fast, and frustration-free — just the way it should be.
            </p>
          </div>
          <div className="border p-6 bg-white shadow-sm">
            <h4 className="font-bold mb-2">Support that Cares</h4>
            <p className="text-gray-600 text-sm">
              Have questions? Our friendly team is here to help you, guide you, and make sure your experience is nothing short of amazing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
