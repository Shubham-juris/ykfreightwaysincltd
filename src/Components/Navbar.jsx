import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/images/HomePageImages/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md px-4 md:px-10 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-cyan-400 font-semibold hover:underline">HOME</Link>
          <Link to="/about" className="text-black font-medium hover:text-cyan-400">COMPANY</Link>
          <Link to="/services" className="text-black font-medium hover:text-cyan-400">SERVICES</Link>
          <Link
            to="/contact"
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link to="/" className="text-cyan-400 font-semibold hover:underline" onClick={toggleMenu}>HOME</Link>
          <Link to="/about" className="text-black font-medium hover:text-cyan-400" onClick={toggleMenu}>COMPANY</Link>
          <Link to="/services" className="text-black font-medium hover:text-cyan-400" onClick={toggleMenu}>SERVICES</Link>
          <Link
            to="/contact"
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
            onClick={toggleMenu}
          >
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
