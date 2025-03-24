import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo/logo tab.png';
import offerImage from '../assets/Offer/card.png';
import Footer from './Footer';

const Contact = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('https://wegigs.onrender.com/api/Contactsubmit', formData);
      alert('✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('❌ Error sending message:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <br />
      <br />
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row">
          {/* Left - Info & Card */}
          <div className="md:w-1/2 p-6 flex flex-col items-center">
            <img src={logo} alt="Logo" className="w-32 h-31 mb-4" />
            <h2 className="text-3xl font-bold text-blue-500">Contact Us</h2>
            <p className="text-gray-600 mt-4 text-center">
              Have questions or inquiries? Fill out the form, and we'll get back to you as soon as possible.
            </p>
            <img
              src={offerImage}
              alt="Offer"
              className="mt-4 w-80 h-auto rounded-lg cursor-pointer"
              onClick={() => setIsImageOpen(true)}
            />
          </div>

          {/* Right - Contact Form */}
          <div className="md:w-1/2 p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Enlarged Image Modal */}
      {isImageOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center pt-20"
          onClick={() => setIsImageOpen(false)}
        >
          <img
            src={offerImage}
            alt="Offer Enlarged"
            className="w-auto max-w-3xl h-auto rounded-lg shadow-lg"
          />
        </div>
      )}

      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Contact;
