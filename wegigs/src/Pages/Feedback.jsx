import React, { useState } from "react";
import { Star } from "lucide-react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  
  return (
    <div className="flex justify-center items-center h-screen px-4">
      <div className="bg-blue-500 p-12 rounded-2xl shadow-lg w-full max-w-[500px] text-white text-center">
        <h2 className="text-xl font-bold mb-4">Rate Your Experience</h2>

        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <Star
                key={index}
                className={`w-10 h-10 cursor-pointer transition-all ${
                  starValue <= (hover || rating) ? "fill-yellow-400" : "fill-white"
                }`}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(starValue)}
              />
            );
          })}
        </div>
        <input
          type="text"
          className="w-full p-3 mb-3 text-black rounded-md"
          placeholder="Enter your name"
        />
        <input
          type="email"
          className="w-full p-3 mb-4 text-black rounded-md"
          placeholder="Enter your email"
        />
       
        <textarea
          className="w-full p-3 text-black rounded-md"
          placeholder="Write your feedback here..."
          rows="4"
        ></textarea>
        <button className="mt-4 bg-white text-blue-500 px-28 py-3 rounded-md font-semibold hover:bg-gray-200">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Feedback;
