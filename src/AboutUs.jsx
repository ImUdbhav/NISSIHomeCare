import React from 'react';
import { motion } from 'framer-motion';
import About from '../public/homecare.jpg';

const AboutUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#105382] to-[#09A8CC] text-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              About <span className="text-[#CE2F58]">Our Mission</span>
            </motion.h2>
            <motion.p
              className="text-lg mb-6"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              At NDIS Care, we're dedicated to empowering individuals with disabilities to live their best lives. Our mission is to provide personalized, compassionate support that enables our clients to achieve their goals and maximize their independence.
            </motion.p>
            <motion.button
              className="bg-white text-[#105382] font-bold py-3 px-8 rounded-full hover:bg-[#CE2F58] hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <svg className="w-64 h-64 md:w-80 md:h-80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#CE2F58" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.2,15.3,83.8,30.6,76.2,44.2C68.7,57.8,58,69.6,44.7,77.7C31.3,85.7,15.7,90,-0.9,91.5C-17.6,93,-35.2,91.7,-49.2,83.9C-63.2,76,-73.5,61.6,-79.9,46.2C-86.3,30.9,-88.7,15.4,-88.9,-0.1C-89,-15.6,-86.9,-31.3,-80.5,-45.6C-74.1,-59.9,-63.5,-72.9,-49.8,-80.1C-36.1,-87.4,-18,-88.9,-1.3,-86.8C15.5,-84.8,30.9,-83.2,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
              <motion.img
                src={About} // Replace with your actual image path
                alt="About Us"
                className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 object-cover rounded-full"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </section>
  );
};

export default AboutUs;