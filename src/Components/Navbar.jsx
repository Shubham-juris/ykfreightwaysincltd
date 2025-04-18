import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/images/HomePageImages/logo.png'
import { Link, NavLink } from 'react-router-dom';

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
        <NavLink  to="/" className={({isActive})=>isActive
            ? "text-[#00F0FF]  border-b-2 border-[#00F0FF] font-semibold"
            : "text-gray-700 hover:text-[#00F0FF] font-semibold"
            } >HOME</NavLink>
          <NavLink to="/about"  className={({isActive})=>isActive
            ? "text-[#00F0FF]  border-b-2 border-[#00F0FF] font-semibold"
            : "text-gray-700 hover:text-[#00F0FF] font-semibold"
            }>COMPANY</NavLink>
          <NavLink to='/services'  className={({isActive})=>isActive
            ? "text-[#00F0FF]  border-b-2 border-[#00F0FF] font-semibold"
            : "text-gray-700 hover:text-[#00F0FF] font-semibold"
            }>SERVICES</NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white px-4 py-2 rounded-full"
                : "text-black border px-4 py-2 rounded-full hover:bg-black hover:text-white"
            }
          >
            CONTACT US
          </NavLink>
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
          <NavLink  to="/" className={({isActive})=>isActive
            ? "text-[#00F0FF] block font-medium border-b-2 border-[#00F0FF]"
            : "text-gray-700 block font-medium hover:text-[#00F0FF] "
            } >HOME</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive
            ? "text-[#00F0FF] block font-medium border-b-2 border-[#00F0FF]"
            : "text-gray-700 block font-medium hover:text-[#00F0FF] "
            } >COMPANY</NavLink>
          <NavLink to="/services" className={({isActive})=>isActive
            ? "text-[#00F0FF] block font-medium border-b-2 border-[#00F0FF]"
            : "text-gray-700 block font-medium hover:text-[#00F0FF] "
            } >SERVICES</NavLink>
          <NavLink
            href="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white px-4 py-2 rounded-full"
                : "text-black border px-4 py-2 rounded-full hover:bg-black hover:text-white"
            }>
            CONTACT US
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
