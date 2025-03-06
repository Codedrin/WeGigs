import React from 'react';
import logo from '../assets/logo/logo tab.png'; // Importing the logo

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Logo */}
        <img 
          src={logo} 
          alt="Company Logo" 
          className="h-12 md:h-16 mb-4 md:mb-0 filter invert brightness-0 saturate-100"
        />

        {/* Right: Text */}
        <div className="text-center md:text-right">
          <p className="text-lg font-semibold">
            &copy; 2025 WeGigs. All rights reserved.
          </p>
          <p className="text-sm text-gray-200 mt-1">Designed and developed by WeGigs</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
