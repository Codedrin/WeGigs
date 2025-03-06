import React from 'react';
import HeroImage from '../assets/images/Hero1.png';
import Website from './Projects/Website'; // Import Website component
import Footer from './Footer'; // Import Footer component

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full pt-16"> {/* Added padding-top to lower items */}
      <div className="bg-red-500 w-[98vw] h-[55vh] rounded-2xl flex items-center justify-between mt-4 p-12 md:h-[60vh] md:w-[98vw] sm:w-auto sm:h-auto sm:p-8">
        <div className="text-white max-w-md p-4">
          <h1 className="text-5xl font-bold">This is our project Showcase</h1>
          <p className="mt-4 text-lg">
            Welcome to our project! We are excited to share our work with you. This
            project showcases our dedication and creativity in building something
            amazing.
          </p>
          
        </div>
        <div className="max-w-xs md:max-w-md p-4 translate-x-[-70px] hidden sm:block">
          <img src={HeroImage} alt="Project Showcase" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Website Component - Title and Boxes */}
      <div className="mt-16"> {/* Added margin-top to lower it */}
        <Website />
      </div>

      {/* Full-width Footer Component */}
      <div className="w-full mt-16"> {/* Increased margin-top */}
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
