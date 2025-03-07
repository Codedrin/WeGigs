import React from "react";
import { CheckCircle } from "lucide-react";
import openImage from "../assets/images/owner_pic.jpg"; // Replace with actual image path

const Opento = () => {
  return (
    <section id="open" className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={openImage}
            alt="Open To Opportunities"
            className="w-4/5 md:w-3/5 rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">We are open To</h2>
          <ul className="space-y-4 text-xl text-gray-700">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" size={28} />
              Rush and Not Rush
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" size={28} />
              Open for Memorandum of Agreement
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" size={28} />
              Open for Meet Up
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" size={28} />
              Open for Contract
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" size={28} />
              Open for Company Project
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" size={28} />
              Open for Collaboration
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" size={28} />
              Open for Reservation
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Opento;
