/*
import React from 'react';
import './Hero.css';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="hero-content">
          <div className="hero-header">
            <p className="hero-line"></p>
            <p className="hero-badge">OUR BESTSELLERS</p>
          </div>
          <h1 className="hero-title">Latest Arrivals</h1>
          <div className="hero-cta">
            <p className="hero-shop">SHOP NOW</p>
            <p className="hero-underline"></p>
          </div>
        </div>
      </div>
      <img src={assets.Hero} alt="hero image"/>
    </div>
  );
};

export default Hero;
*/

import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-white">

      <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
        <img
          src="/assets/hero.webp"
          alt="Jewelry Hero"
          className="w-60 md:w-96 object-contain"
        />
      </div>

      <div className="md:w-1/2 flex flex-col gap-4 text-center md:text-left">
        <div>
          <p className="text-m text-gray-500 tracking-widest uppercase mb-1">Featured Pieces </p>
          <h1 className="text-1xl md:text-3xl font-bold text-gray-800 leading-tight">
            Elevate Your Style <br /> with Timeless Jewelry
          </h1>
        </div>
        <div>
          <p className="text-gray-600 text-sm md:text-base">
            Explore our handpicked collection of elegance and craftsmanship.
          </p>
        </div>
        <button className="mt-4 px-6 py-3 bg-gray-800 text-white  w-fit hover:bg-gray-700 transition">
          Shop Now
        </button>
      </div>

    </div>
  );
};

export default Hero;
