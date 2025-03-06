import React from 'react';
import Service from './Service'; // Import the Service component
import Footer from './Footer';
const Home = () => {

  
  return (
    <div>
      <header className="relative bg-[url('/src/assets/images/image.jpg')] bg-cover bg-center bg-no-repeat text-white py-60"> 
        <div className="absolute inset-0 bg-black/70"></div> 
        <div className="relative container mx-auto text-center px-4">
          <h1 className="text-6xl font-bold mb-4 font-meltix">
            Welcome to <span className="text-blue-500">We</span>
            <span className="text-orange-500">Gigs</span>
          </h1>
          <p className="text-lg font-meltix max-w-[70%] mx-auto leading-tight -mt-2">
            Let's transform your ideas into reality with innovation, passion, and cutting-edge technology
            <br /> Build, create, and bring your vision to life
          </p>

          {/* Buttons Section */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
            >
              Get Started
            </a>
            <a 
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <Service />
      <Footer />
    </div>
  );
}

export default Home;
