/*
import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <>
      <style>{`
        .our-policy-container {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          gap: 3rem;
          text-align: center;
          padding: 2rem 0;
        }

        @media (min-width: 640px) {
          .our-policy-container {
            flex-direction: row;
            gap: 2rem;
          }
        }

        .policy-item {
          flex: 1;
        }

        .policy-icon {
          width: 3rem;
          height: 3rem;
          margin: 0 auto 1.25rem auto;
        }

        .policy-title {
          font-weight: 700;
          font-size: 1.1rem;
        }

        .policy-description {
          color: #9ca3af;
          margin-top: 0.25rem;
        }
      `}</style>

      <div className="our-policy-container">
        <div className="policy-item">
          <img src={assets.Exchange} className="policy-icon" alt="Exchange Icon" />
          <p className="policy-title">Easy Exchange Policy</p>
          <p className="policy-description">We offer hassle free exchange policy</p>
        </div>
        <div className="policy-item">
          <img src={assets.Returns} className="policy-icon" alt="Return Icon" />
          <p className="policy-title">7 Days Return Policy</p>
          <p className="policy-description">We provide 7 days free return policy</p>
        </div>
        <div className="policy-item">
          <img src={assets.Csr} className="policy-icon" alt="Customer Support Icon" />
          <p className="policy-title">Best customer support</p>
          <p className="policy-description">we provide 24/7 customer support</p>
        </div>
      </div>
    </>
  );
};

export default OurPolicy;
*/



import React from 'react';

const OurPolicy = () => {
  return (
    <section className="bg-white py-14 px-6 md:px-20">
      
      {/* Section Heading */}
      <div className="text-center mb-12">
        <p className="text-2xl md:text-3xl font-semibold text-gray-500">
          Our <span className="text-gray-800">Policy</span>
        </p>
        <div className="w-20 h-1 bg-gray-800 mx-auto mt-2 mb-4 rounded-full" />
        <p className="text-sm text-gray-500 mx-auto">
          At Jewelia, we prioritize your satisfaction with easy returns, secure shopping, and friendly support.
        </p>
      </div>

      {/* Policies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        
        {/* Return & Exchange */}
        <div className="border border-gray-200 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
          <img
            src="/assets/returnPolicy.jpg"
            alt="Return & Exchange Icon"
            className="w-14 h-14 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">Easy Returns & Exchanges</h3>
          <p className="text-sm text-gray-600 mt-2">
            Shop with peace of mind — 7-day return and exchange policy, no questions asked.
          </p>
        </div>

        {/* Customer Support */}
        <div className="border border-gray-200 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
          <img
            src="/assets/customerSupport.jpg"
            alt="Customer Support Icon"
            className="w-14 h-14 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">24/7 Customer Support</h3>
          <p className="text-sm text-gray-600 mt-2">
            Our expert team is here day and night to assist you with any queries or help.
          </p>
        </div>

        {/* Secure Checkout */}
        <div className="border border-gray-200 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
          <img
            src="/assets/secureCheckout.png"
            alt="Secure Checkout Icon"
            className="w-14 h-14 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">Secure Checkout</h3>
          <p className="text-sm text-gray-600 mt-2">
            Your payments are protected with advanced encryption and trusted gateways.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurPolicy;
