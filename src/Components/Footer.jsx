import React from 'react';
import logo from '../assets/images/HomePageImages/logo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Our Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">ABOUT OUR COMPANY</h3>
          <div className="flex items-center mb-2">
            <svg
              className="w-6 h-6 mr-2 text-[#34ccff]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m12 0h6m-6 0H5"
              /> */}
            </svg>
            <span className="font-bold"><img src={logo} width="100%"></img></span>
          </div>
          <p className="text-sm mb-4">WE DELIVER CARGO WORLDWIDE</p>
          <p className="text-xs">
            Logistic was founded to make a mark in London's Clearing and Forwarding industry.
            Logistic started its operations in all the major cities in Europe with the aim to offer the best in
            logistics services.
          </p>
        </div>

        {/* Useful Links (Column 1) */}
        <div>
          <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#" className="hover:text-[#34ccff]">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-[#34ccff]">
                Company Timeline
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-[#34ccff]">
                History
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-[#34ccff]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#34ccff]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links (Column 2) */}
        <div>
          <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#" className="hover:text-[#34ccff]">
                Ads &amp; Promos 02
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-[#34ccff]">
                Warehousing
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-[#34ccff]">
                Logistics
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-[#34ccff]">
                Project Transport
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-[#34ccff]">
                Overland Network
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#34ccff]">
                Sea Freight
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
          <p className="text-sm mb-2">
            Address: Global Logistic, London 45 Spring St. London
          </p>
          <p className="text-sm mb-4">
            Phone Number: +44 20 8788 7200
          </p>

          <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
          <div className="flex">
            <input
              type="email"
              className="bg-gray-800 text-gray-400 border border-gray-700 rounded-l-md py-2 px-3 text-sm focus:outline-none focus:border-[#34ccff] w-full"
              placeholder="Email Address"
            />
            <button
              className="bg-[#34ccff] hover:text-[#34ccff] text-white font-semibold py-2 px-4 rounded-r-md text-sm focus:outline-none"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4 mt-8">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs">
          <p>© 2022 Logistic - All Rights Reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#34ccff]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.538v-2.89h2.538V8.539c0-2.538 1.562-3.92 3.834-3.92 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.227 0-1.467.615-1.467 1.503v1.967h2.966l-.391 2.89h-2.575v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-[#34ccff]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.288-.02-572-.062-.858.401-.289.754-.643 1.038-.967a8.28 8.28 0 00-2.517 2.326c-.675.972-1.54 1.822-2.516 2.48a11.248 11.248 0 01-4.022 2.056c-2.6 1.672-5.146-1.28-5.146-3.281 0-.674.237-1.268.635-1.729a11.312 11.312 0 01-2.76-1.833c-.361-.52-.608-1.154-.732-1.823V8.78c0-3.597 2.548-6.253 6.122-6.253 3.22 0 5.892 2.079 6.41 4.905-.586-.175-1.272-.272-1.994-.272-2.18 0-4.042 1.792-4.042 4.002 0 .314.039.627.116.923-.487-.147-.92-.305-1.316-.487a8.824 8.824 0 01-2.063 2.372c-.355.22-.74.416-1.152.578a6.78 6.78 0 01-1.761.187 2.824 2.824 0 002.104.822c.201-.06.392-.15.571-.262a7.177 7.177 0 01-1.425-.892c.205.044.412.086.621.126a6.304 6.304 0 002.305-.872c-.206.064-.42.11-.648.144z" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#34ccff]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.707 15.293a1 1 0 01-1.414 0L12 13.414l-2.293 2.879a1 1 0 01-1.414-1.414l2.293-2.879L8.293 8.707a1 1 0 011.414-1.414L12 10.586l2.293-2.879a1 1 0 011.414 1.414L13.414 12l2.293 2.879a1 1 0 010 1.414z" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#34ccff]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.707 15.293a1 1 0 01-1.414 0L12 13.414l-2.293 2.879a1 1 0 01-1.414-1.414l2.293-2.879L8.293 8.707a1 1 0 011.414-1.414L12 10.586l2.293-2.879a1 1 0 010 1.414L13.414 12l2.293 2.879a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;