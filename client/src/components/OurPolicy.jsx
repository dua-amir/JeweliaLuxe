const OurPolicy = () => {
  return (
    <section className="bg-white py-14 px-6 md:px-20">
      
      {/* Section Heading */}
      <div className="text-center mb-12">
        <p className="text-2xl md:text-3xl font-semibold text-gray-500">
          <span className="text-yellow-800"> Our Policy</span>
        </p>
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
