import React from 'react';
import logo from '../assets/images/HomePageImages/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      {/* Google Map Embed */}
      <div className="px-4">
        <iframe
          title="YK Freightways Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2001.5421744944203!2d-114.77627352230083!3d55.28269427308859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x539f67f1b6d4f087%3A0x420e40021e64c8e0!2s215%20Main%20St%20NW%2C%20Slave%20Lake%2C%20AB%20T0G%202A1%2C%20Canada!5e0!3m2!1sen!2sca!4v1715080048840"
          width="100%"
          height="300"
          className="border-0 rounded-lg shadow-lg w-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Footer Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">ABOUT YK FREIGHTWAYS</h3>
          <img src={logo} alt="YK Freightways Logo" className="w-32 mb-4" />
          <p className="text-xs text-gray-400">
            YK Freightways is committed to delivering logistics excellence across Canada and globally.
            With a strong network and dedicated professionals, we provide comprehensive transport,
            warehousing, and freight forwarding solutions tailored to your business needs.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">NAVIGATION</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-cyan-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400 transition">Company</Link></li>
            <li><Link to="/services" className="hover:text-cyan-400 transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">CONTACT INFO</h3>
          <p className="text-sm text-gray-400 mb-2">#209-215, Main St NW, Slave Lake, AB T0G 2A1, Canada</p>
          <p className="text-sm text-gray-400 mb-2">Phone: +1 587-907-8614</p>
          <p className="text-sm text-gray-400">Email: info@ykfreightways.com</p>
        </div>

        {/* Optional: Social Media or Newsletter */}
     
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500 px-4">
        © {new Date().getFullYear()} YK Freightways. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
