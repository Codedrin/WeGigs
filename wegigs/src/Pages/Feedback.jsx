import React, { useState } from "react";
import { Star } from "lucide-react";
import axios from "axios";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    features: [],
  });

  const featureOptions = [
    "Great user experience",
    "Easy to navigate",
    "Responsive design",
    "Fast loading speed",
    "Helpful customer support",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const features = checked
        ? [...prev.features, value]
        : prev.features.filter((f) => f !== value);
      return { ...prev, features };
    });
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData,
        rating,
      };

      const res = await axios.post("http://localhost:5000/api/submit", payload);
      alert("✅ Feedback submitted successfully!");
      setFormData({ name: "", email: "", feedback: "", features: [] });
      setRating(0);
    } catch (err) {
      console.error("❌ Error submitting feedback:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-auto">
      <div className="absolute inset-0 flex justify-center items-center px-6">
        <div className="flex flex-col md:flex-row bg-white p-8 rounded-2xl shadow-lg max-w-7xl w-full">
          <div className="flex-1 flex flex-col justify-center text-gray-800 p-4">
            <h1 className="text-3xl font-bold mb-3">We Value Your Feedback</h1>
            <p className="text-lg">
              Your insights help us improve. Please take a moment to share your experience with us.
            </p>
            <br />
            <div className="mt-4">
              {featureOptions.map((feature, idx) => (
                <label key={idx} className="flex items-center space-x-2 mt-2">
                  <input
                    type="checkbox"
                    value={feature}
                    checked={formData.features.includes(feature)}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5"
                  />
                  <span>{feature}</span>
                </label>
              ))}
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
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 mb-3 text-black rounded-md"
              placeholder="Enter your name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 text-black rounded-md"
              placeholder="Enter your email"
            />
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              className="w-full p-3 text-black rounded-md"
              placeholder="Write your feedback here..."
              rows="4"
            />
            <button
              className="mt-4 bg-white text-blue-500 px-10 py-3 rounded-md font-semibold hover:bg-gray-200"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
