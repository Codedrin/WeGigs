import React, { useRef, useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Proof2 from "./Proof2"; // Import ng bagong component
import Footer from "./Footer"; // Import Footer component

import proof1 from "../assets/Proof/Proof1.jpg";
import proof2 from "../assets/Proof/Proof2.jpeg";
import proof3 from "../assets/Proof/Proof3.jpg";
import proof4 from "../assets/Proof/Proof4.jpeg";
import proof6 from "../assets/Proof/Proof6.jpg";
import proof7 from "../assets/Proof/Proof7.jpg";

const images = [proof1, proof2, proof3, proof4, proof6, proof7];

const Proof = () => {
  const sliderRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    let animation;

    if (slider) {
      animation = slider.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
        {
          duration: 5000,
          iterations: Infinity,
          easing: "linear",
        }
      );

      const handleMouseEnter = () => animation.pause();
      const handleMouseLeave = () => animation.play();

      slider.addEventListener("mouseenter", handleMouseEnter);
      slider.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        slider.removeEventListener("mouseenter", handleMouseEnter);
        slider.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="w-full overflow-hidden pb-0">
<br />
<br />
      <div ref={sliderRef} className="flex space-x-4">
        {images.concat(images).map((src, index) => (
          <div key={index} className="min-w-[200px] h-[150px] cursor-pointer" onClick={() => openModal(index % images.length)}>
            <img src={src}
             alt={`Proof ${index + 1}`}
            className="w-full h-full object-cover rounded-md shadow-md" />
          </div>
        ))}
      </div>

      {/* Title and Description */}
      <Proof2 />

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button onClick={closeModal} className="absolute top-5 right-5 text-white text-3xl">
            <X size={32} />
          </button>
          <div className="relative flex flex-col items-center">
            <img src={selectedImage} alt="Full View" className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg" />
            <div className="flex items-center justify-between w-full mt-4">
              <button onClick={prevImage} className="text-white px-4 py-2">
                <ChevronLeft size={48} />
              </button>
              <span className="text-white text-lg">{currentIndex + 1} / {images.length}</span>
              <button onClick={nextImage} className="text-white px-4 py-2">
                <ChevronRight size={48} />
              </button>
            </div>
          </div>
        </div>
      )}

<Footer />
    </div>
  );
};

export default Proof;
