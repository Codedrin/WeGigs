import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaPhp } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiExpress, SiTailwindcss, SiArduino, SiMysql } from 'react-icons/si';

// Import all project images
import Proj1 from '../../assets/Projects/Proj1.png';
import Proj2 from '../../assets/Projects/Proj2.png';
import Proj3 from '../../assets/Projects/Proj3.png';
import Proj4 from '../../assets/Projects/Proj4.png';
import Proj5 from '../../assets/Projects/Proj5.png';
import Proj6 from '../../assets/Projects/Proj6.png';
import Proj7 from '../../assets/Projects/Proj7.png';
import Proj8 from '../../assets/Projects/Proj8.jpg';
import Proj10 from '../../assets/Projects/Proj10.jpg';
import Proj11 from '../../assets/Projects/Proj11.jpg';
import Proj12 from '../../assets/Projects/Proj12.jpeg';
import Proj13 from '../../assets/Projects/Proj13.jpeg';

// Array of project data with icons
const projects = [
  { id: 1, image: Proj1, title: 'ISBN barCode Scanner', icons: [FaReact, FaNodeJs, SiExpress, SiTailwindcss, SiMongodb] },
  { id: 2, image: Proj2, title: 'Incident Report Management System', icons: [FaReact, FaNodeJs, SiExpress, SiTailwindcss, SiMongodb] },
  { id: 3, image: Proj3, title: 'Information Management System', icons: [FaReact, FaNodeJs, SiExpress, SiTailwindcss, SiMongodb] },
  { id: 4, image: Proj4, title: 'Real-time Apartment and Boarding House Management System', icons: [FaReact, FaNodeJs, SiExpress, SiTailwindcss, SiMongodb] },
  { id: 5, image: Proj5, title: 'Project Management Tool with Integrated Realtime Messaging', icons: [FaReact, FaNodeJs, SiExpress, SiTailwindcss, SiMongodb] },
  { id: 6, image: Proj6, title: 'Embem: An IoT-based Vendo Print Machine', icons: [FaReact, FaNodeJs, SiExpress, SiTailwindcss, SiMongodb, SiArduino] },
  { id: 7, image: Proj7, title: 'JBLAS: Web-based House Services Booking Management System', icons: [FaPhp, SiMysql] },
  { id: 8, image: Proj8, title: 'iFlood: An IoT-based Real-time Web Flood Monitoring System', icons: [FaPhp, SiMysql, SiArduino] },
  { id: 9, image: Proj10, title: 'Vendo Print: An IoT-based Web App Real-time Coin Operated Printing Machine', icons: [FaReact, FaNodeJs, SiExpress, SiTailwindcss, SiMongodb] },
  { id: 10, image: Proj11, title: 'AutoPomodoroApp: An IoT-based Pomodoro Mobile Application', icons: [FaJava, SiFirebase, SiArduino ] },
  { id: 11, image: Proj12, title: 'E-root', icons: [FaJava, SiFirebase] },
  { id: 12, image: Proj13, title: 'Coffeetect', icons: [FaJava, SiFirebase] },
];

const Website = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12 px-4">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Our Recent Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden relative group flex flex-col justify-between">
            <div>
              <div className="relative w-full h-48">
                <img src={project.image}
                 alt={project.title} 
                 className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              </div>
            </div>
            <div className="flex justify-start space-x-3 p-4">
              {project.icons.map((Icon, index) => (
                <span key={index} className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full text-xl">
                  <Icon />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Website;
