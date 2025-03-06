import React, { useState } from 'react';
import logo from '../assets/logo/logo tab.png'; // Adjusted path
import offerImage from '../assets/Offer/card.png'; // Added image import
import Footer from './Footer'; // Import Footer component

const Contact = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
        <br />
        <br />
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row">
          
          {/* Left Side - Contact Info */}
          <div className="md:w-1/2 p-6 flex flex-col items-center">
            {/* Added Logo */}
            <img src={logo} alt="Logo" className="w-32 h-31 mb-4" />

            <h2 className="text-3xl font-bold text-blue-500">Contact Us</h2>
            <p className="text-gray-600 mt-4 text-center">
              Have questions or inquiries? Fill out the form, and we'll get back to you as soon as possible.
            </p>
            
            {/* Enlarged Image with Click-to-View Feature */}
            <img 
              src={offerImage} 
              alt="Offer" 
              className="mt-4 w-80 h-auto rounded-lg cursor-pointer" 
              onClick={() => setIsImageOpen(true)}
            />
          </div>

          {/* Right Side - Contact Form */}
          <div className="md:w-1/2 p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal for Enlarged Image View */}
      {isImageOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center pt-20" onClick={() => setIsImageOpen(false)}>
          <img src={offerImage} alt="Offer Enlarged" className="w-auto max-w-3xl h-auto rounded-lg shadow-lg" />
        </div>
      )}

      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Contact;
