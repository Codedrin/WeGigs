import React from 'react';
import headerImg from '../assets/images/header_img.jpg';
import aboutImg from '../assets/images/owner_pic.jpg';
import Footer from './Footer';

const Teams = () => {
  return (
    <div>
      {/* Header Section */}
      <div 
        className="relative w-full h-60 md:h-80 lg:h-96 flex flex-col items-center justify-center text-center text-white bg-cover bg-center px-4" 
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-meltix font-bold">This is about WeGigs</h1>
          <p className="mt-4 text-lg md:text-xl font-meltix_regular max-w-2xl mx-auto">
            WeGigs is a freelance platform that connects professionals with commission-based opportunities.
          </p>
        </div>
      </div>
      
      {/* About Us Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
        <img src={aboutImg} alt="About Us" className="w-3/4 md:w-1/3 rounded-lg shadow-lg" />
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-meltix font-bold mb-4">About Us</h2>
          <p className="text-lg font-meltix_regular">
            At WeGigs, we provide a seamless platform for freelancers to explore commission-based work opportunities. 
            Our services go beyond just connecting professionals with clients—we specialize in web application development, 
            IoT solutions, and graphic design. Whether you are looking for a skilled developer to bring your web app to life, 
            an IoT expert to build smart solutions, or a talented graphic designer to create visually stunning content, 
            WeGigs has the right talent for you. Our goal is to foster collaboration and success by bridging the gap between 
            freelancers and clients, ensuring high-quality outcomes for every project.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Teams;