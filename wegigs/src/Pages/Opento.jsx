import React, { useRef, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import openImage from "../assets/images/owner_pic.jpg";

const Opento = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    let bounds;

    function rotateToMouse(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      card.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;
      
      card.querySelector(".glow").style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
    }

    function onMouseEnter() {
      bounds = card.getBoundingClientRect();
      document.addEventListener("mousemove", rotateToMouse);
    }

    function onMouseLeave() {
      document.removeEventListener("mousemove", rotateToMouse);
      card.style.transform = "";
    }

    card.addEventListener("mouseenter", onMouseEnter);
    card.addEventListener("mouseleave", onMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", onMouseEnter);
      card.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <section id="open" className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        {/* Left Image with 3D Hover Effect */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div ref={cardRef} className="relative w-4/5 md:w-3/5 rounded-lg shadow-lg overflow-hidden card">
            <img
              src={openImage}
              alt="Open To Opportunities"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 glow" />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">We are open To</h2>
          <ul className="space-y-4 text-xl text-gray-700">
            {[
              "Rush and Not Rush",
              "Open for M.O.A",
              "Open for Meet Up",
              "Open for Contract",
              "Open for Company Project",
              "Open for Collaboration",
              "Open for Reservation",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={28} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Opento;
