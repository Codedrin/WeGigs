import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo tab.png';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white py-6 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div>
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="My Logo" className="h-16" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-500 text-lg md:text-xl transition duration-200">Home</Link>
            <Link to="/proof" className="text-gray-600 hover:text-blue-500 text-lg md:text-xl transition duration-200">Proof</Link>
            <Link to="/projects" className="text-gray-600 hover:text-blue-500 text-lg md:text-xl transition duration-200">Projects</Link>
            <Link to="/teams" className="text-gray-600 hover:text-blue-500 text-lg md:text-xl transition duration-200">About Us</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-500 text-lg md:text-xl transition duration-200">Contact</Link>
            <Link to="/feed" className="text-gray-600 hover:text-blue-500 text-lg md:text-xl transition duration-200">Feedback</Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-500 mt-2 mr-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Right side) */}
      <div className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col items-center space-y-4">
          <Link to="/" className="text-gray-600 hover:text-blue-500 text-lg md:text-xl transition duration-200" onClick={closeMenu}>Home</Link>
          <Link to="/proof" className="text-gray-600 hover:text-blue-500 text-lg md:text-xl transition duration-200" onClick={closeMenu}>Proof</Link>
          <Link to="/projects" className="text-gray-600 hover:text-blue-500 text-lg md:text-xl transition duration-200" onClick={closeMenu}>Projects</Link>
          <Link to="/teams" className="text-gray-600 hover:text-blue-500 py-4 text-xl" onClick={closeMenu}>About Us</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500 py-4 text-xl" onClick={closeMenu}>Contact</Link>
          <Link to="/feed" className="text-gray-600 hover:text-blue-500 text-lg md:text-xl transition duration-200">Feedback</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
