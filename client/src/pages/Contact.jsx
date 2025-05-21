
const Contact = () => {
  return (
    <div className="px-8 py-12 max-w-[1100px] mx-auto text-center font-sans text-gray-800">
      
      {/* Section Title */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <h2 className="text-2xl font-medium text-yellow-800">
          CONTACT <strong className="font-bold">US</strong>
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap gap-8 justify-center items-center">
        
        {/* Image */}
        <img
          src="assets/contactUs.avif"
          alt="office setup"
          className="w-[350px] h-[350px] object-cover rounded"
        />

        {/* Info Section */}
        <div className="flex-1 max-w-md text-left">
          
          {/* Store Info */}
          <div className="mb-6 space-y-2 text-lg leading-relaxed text-gray-700">
            <h3 className="text-xl font-bold mb-4 text-yellow-800">Our Shop</h3>
            <p>45000 Islamabad</p>
            <p>Block D, Islamabad, Pakistan</p>
            <p>Tel: (051) 341-0056</p>
            <p>Email: jewlialuxe@gmail.com</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
