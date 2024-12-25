import React from 'react';
import { motion } from 'framer-motion';
import HeroIllust from '../public/NISSIHero.jpeg';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#09A8CC] to-[#105382] text-white py-20 px-4">
      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <motion.h2 
            className="text-7xl lg:text-[7.3rem] font-merri-sans font-extrabold mb-6 leading-[6.2rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            Empower<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CE2F58] to-[#836D21]">
              Your Story
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl p-2 mb-8 max-w-2xl font-open-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          >
            Navigate the NDIS with confidence. We're here to support your unique path to independence and well-being.
          </motion.p>
          <motion.button 
            className="group relative overflow-hidden bg-white text-[#09A8CC] font-bold py-4 px-10 rounded-full text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Start Your Journey</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#CE2F58] to-[#836D21]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          <motion.div 
            className="relative w-[20rem] h-[20rem] lg:w-[34rem] lg:h-[34rem] rounded-full overflow-hidden"
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img src={HeroIllust} alt="Hero Illustration" className='object-cover h-full w-full' />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-[#09A8CC] to-transparent opacity-50"
              animate={{ opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
      <motion.svg 
        className="absolute bottom-0 left-0 w-full bg-blend-color"
        viewBox="0 0 1440 320"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <path 
          fill="#ffffff" 
          fillOpacity="1" 
          d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,165.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </motion.svg>
    </section>
  );
};

export default HeroSection;
