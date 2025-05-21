import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 py-12 font-sans">
      <div className="max-w-6xl mx-auto flex flex-wrap md:flex-nowrap justify-between gap-8">
        {/* Logo */}
        <div className="min-w-[120px]">
          <img
            src="/assets/JeweliaLogo.png"
            alt="JeweliaLuxe Logo"
            className="w-30 h-30"
          />
        </div>

        {/* Company Info */}
        <div className="min-w-[180px]">
          <h2 className="text-lg font-semibold mb-4 text-yellow-800">COMPANY</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="#" className="hover:underline">Home</Link></li>
            <li><Link to="#" className="hover:underline">About Us</Link></li>
            <li><Link to="#" className="hover:underline">Contact</Link></li>
            <li><Link to="#" className="hover:underline">Our Policy</Link></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="min-w-[200px]">
          <h2 className="text-lg font-semibold mb-4 text-yellow-800">GET IN TOUCH</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>(051) 341-0056</li>
            <li>jewlialuxe@gmail.com</li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
          </ul>
        </div>

        {/* Description Paragraph */}
        <div className="flex-1 min-w-[250px] text-sm text-gray-600 leading-relaxed">
          <p>
            At JewliaLuxe, every piece tells a story — crafted with passion,
            inspired by tradition, and designed to celebrate your uniqueness.
            From timeless elegance to modern charm, we bring you handcrafted
            beauty made with heart.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs text-gray-500">
        Copyright 2025 © <span className='text-yellow-800 text-semibold'>JewliaLuxe</span> - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
