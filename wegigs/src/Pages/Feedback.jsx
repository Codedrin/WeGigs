import React, { useState } from "react";
import { Star } from "lucide-react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="relative w-full min-h-screen overflow-auto">
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center px-6">
        <div className="flex flex-col md:flex-row bg-white p-8 rounded-2xl shadow-lg max-w-7xl w-full">
          <div className="flex-1 flex flex-col justify-center text-gray-800 p-4">
            <h1 className="text-3xl font-bold mb-3">We Value Your Feedback</h1>
            <p className="text-lg">Your insights help us improve. Please take a moment to share your experience with us.</p>
            <br />
            <div className="mt-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Great user experience</span>
              </label>
              <label className="flex items-center space-x-2 mt-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Easy to navigate</span>
              </label>
              <label className="flex items-center space-x-2 mt-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Responsive design</span>
              </label>
              <label className="flex items-center space-x-2 mt-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Fast loading speed</span>
              </label>
              <label className="flex items-center space-x-2 mt-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Helpful customer support</span>
              </label>
            </div>
          </div>
          <br />
          <div className="flex-1 bg-blue-500 p-8 rounded-2xl text-white text-center">
            <h2 className="text-xl font-bold mb-4">Rate Your Experience</h2>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <Star
                    key={index}
                    className={`w-10 h-10 cursor-pointer transition-all ${starValue <= (hover || rating) ? "fill-yellow-400" : "fill-white"}`}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(starValue)}
                  />
                );
              })}
            </div>
            <input type="text" className="w-full p-3 mb-3 text-black rounded-md" placeholder="Enter your name" />
            <input type="email" className="w-full p-3 mb-4 text-black rounded-md" placeholder="Enter your email" />
            <textarea className="w-full p-3 text-black rounded-md" placeholder="Write your feedback here..." rows="4"></textarea>
            <button className="mt-4 bg-white text-blue-500 px-10 py-3 rounded-md font-semibold hover:bg-gray-200">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
