import React from 'react';
import { FaCode, FaMobileAlt, FaPalette, FaVideo, FaBrush, FaMicrochip } from 'react-icons/fa'; // Import icons

// Service Data
const services = [
  {
    id: 1,
    title: "Web Development",
    description: "We create modern and responsive websites.",
    icon: <FaCode size={40} className="text-blue-500" />,
    image: "/src/assets/images/image2.jpg" // Update with actual path
  },
  {
    id: 2,
    title: "App Development",
    description: "We build high-performance mobile applications.",
    icon: <FaMobileAlt size={40} className="text-orange-500" />,
    image: "/src/assets/images/image3.jpg" // Update with actual path
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "We design engaging and user-friendly interfaces.",
    icon: <FaPalette size={40} className="text-purple-500" />,
    image: "/src/assets/images/image4.jpg" // Update with actual path
  },
  {
    id: 4,
    title: "Graphic & Logo Design",
    description: "We create visually appealing designs, including logos and branding materials.",
    icon: <FaBrush size={40} className="text-green-500" />,
    image: "/src/assets/images/image5.jpg" // Update with actual path
  },
  {
    id: 5,
    title: "Banner & Video Editing",
    description: "We craft stunning banners and edit professional-quality videos.",
    icon: <FaVideo size={40} className="text-red-500" />,
    image: "/src/assets/images/image6.jpg" // Update with actual path
  },
  {
    id: 6,
    title: "IoT Development",
    description: "We develop smart IoT solutions for connected devices and automation.",
    icon: <FaMicrochip size={40} className="text-cyan-500" />,
    image: "/src/assets/images/image1.jpg" // Update with actual path
  }
];

const Service = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="text-lg text-gray-600 mt-2">Empowering Your Projects with Innovation and Excellence.</p>

        {/* Services Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
              {/* Image Section */}
              <img src={service.image} 
              alt={service.title} 
              className="w-full h-48 object-cover" />

              {/* Content Section */}
              <div className="p-6">
                {/* Icon + Title Section */}
                <div className="flex items-center space-x-4">
                  <div>{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                {/* Description */}
                <p className="text-gray-600 mt-3 text-left">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
