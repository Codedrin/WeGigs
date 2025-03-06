import React from "react";
import offerImage from "../assets/Offer/offer.png"; // Import ng image

const Proof2 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Content Wrapper */}
      <div className="text-center flex-grow">
        <h2 className="text-4xl font-bold text-gray-900 mt-6">This is our top client</h2>
        <p className="text-xl text-gray-600 mt-2">This is feedback about our hard work</p>

        {/* Image Below Text */}
        <div className="mt-4 flex justify-center">
          <img
            src={offerImage}
            alt="Offer"
            className="w-[300px] md:w-[400px] lg:w-[500px] rounded-lg shadow-lg"
          />
        </div>
      </div>

     
    </div>
  );
};

export default Proof2;
