import React from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';
import Open from './Opento';
import Footer from './Footer';
import { motion } from 'framer-motion';

const bounceVariants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 0, -5, 0],
    transition: { duration: 0.5, repeat: 2, ease: 'easeOut' },
  },
};

const Home = () => {
  return (
    <div>
      <header className="relative bg-[url('/src/assets/images/image.jpg')] bg-cover bg-center bg-no-repeat text-white py-60">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container mx-auto text-center px-4 flex flex-col items-center justify-center h-full">
          <h1 className="text-6xl font-bold mb-4 font-meltix flex flex-col items-center leading-tight sm:flex-row sm:gap-2 sm:justify-center">
            <motion.span variants={bounceVariants} initial="initial" animate="animate" className="inline-block">
              Welcome
            </motion.span>
            <motion.span variants={bounceVariants} initial="initial" animate="animate" className="inline-block text-white sm:ml-2">
              To
            </motion.span>
            <span className="flex">
              <motion.span variants={bounceVariants} initial="initial" animate="animate" className="inline-block text-blue-500">
                We
              </motion.span>
              <motion.span variants={bounceVariants} initial="initial" animate="animate" className="inline-block text-orange-500">
                Gigs
              </motion.span>
            </span>
          </h1>
          <p className="text-lg font-meltix max-w-[70%] mx-auto leading-tight -mt-2">
            Let's transform your ideas into reality with innovation, passion, and cutting-edge technology
            <br /> Build, create, and bring your vision to life
          </p>

          {/* Buttons Section */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
            >
              Contact Us
            </Link>
            <Link 
              to="/teams"
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <Open />
      <Service />
      <Footer />
    </div>
  );
};

export default Home;
