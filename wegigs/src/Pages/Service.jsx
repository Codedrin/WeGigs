import React from 'react';
import { FaCode, FaMobileAlt, FaPalette, FaVideo, FaBrush, FaMicrochip } from 'react-icons/fa';
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";

const services = [
  { id: 1, title: "Web Development", description: "We create modern and responsive websites.", icon: <FaCode size={32} className="text-blue-500" />, image: image2 },
  { id: 2, title: "App Development", description: "We build high-performance mobile applications.", icon: <FaMobileAlt size={32} className="text-orange-500" />, image: image3 },
  { id: 3, title: "UI/UX Design", description: "We design engaging and user-friendly interfaces.", icon: <FaPalette size={32} className="text-purple-500" />, image: image4 },
  { id: 4, title: "Graphic & Logo Design", description: "We create visually appealing designs, including logos and branding materials.", icon: <FaBrush size={32} className="text-green-500" />, image: image5 },
  { id: 5, title: "Banner & Video Editing", description: "We craft stunning banners and edit professional-quality videos.", icon: <FaVideo size={32} className="text-red-500" />, image: image6 },
  { id: 6, title: "IoT Development", description: "We develop smart IoT solutions for connected devices and automation.", icon: <FaMicrochip size={32} className="text-cyan-500" />, image: image1 }
];

const Service = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-gray-800">Our Services</h2>
        <p className="text-lg text-gray-600 mt-2">Empowering Your Projects with Innovation and Excellence.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <img src={service.image} alt={service.title} className="w-full h-52 object-cover rounded-t-lg" />
              <div className="p-5 text-left">
                <div className="flex items-center space-x-3 mb-3">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
