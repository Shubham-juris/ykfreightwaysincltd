import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/images/HomePageImages/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 md:px-10 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-15" />
        
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-cyan-400 font-semibold hover:underline">HOME</Link>
          <a href="#" className="text-black font-medium hover:text-cyan-400">COMPANY</a>
          <a href="#" className="text-black font-medium hover:text-cyan-400">SERVICES</a>
          <a
            href="#"
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
          >
            CONTACT US
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 md:hidden space-y-4 text-center">
          <a href="#" className="block text-cyan-400 font-semibold">HOME</a>
          <a href="#" className="block text-black font-medium">COMPANY</a>
          <a href="#" className="block text-black font-medium">SERVICES</a>
          <a
            href="#"
            className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            CONTACT US
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
