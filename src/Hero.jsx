import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero1 from '/HeroM.webp';
import Hero2 from '/DHero.webp';
import Hero3 from '/NISSIHero2.webp';

import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Hero2, Hero1, Hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-deep-blue mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink to-olive-green" 
             style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}
        ></div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 flex items-center px-4 lg:px-12 z-10 py-12 lg:py-0">
          <div>
            <motion.h1 
              className="text-5xl md:text-6xl font-merri-sans font-bold text-white mb-6"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Empowering Choices
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-blue to-light-blue">Enriching Lives</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-light-blue font-open-sans mb-8 max-w-lg"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Navigate your journey to independence with our expert support and personalized care. We're here to help you make the most of your NDIS plan.
            </motion.p>
            
            <motion.button 
              className="px-8 py-4 bg-vibrant-pink text-white font-merri-sans font-bold rounded-full text-lg shadow-lg hover:bg-olive-green transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={() => navigate("/contact")}
            >
              Start Your Journey
            </motion.button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[300px] lg:min-h-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImageIndex}
              className="absolute inset-0 "
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
            >
              <img
                src={images[currentImageIndex]}
                alt="NDIS Support"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 opacity-90" />
            </motion.div>
          </AnimatePresence>

          {/* Floating Elements */}
          {/* <motion.div 
            className="absolute right-1/4 top-1/4 w-32 h-32 rounded-full bg-olive-green opacity-20"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute left-1/4 bottom-1/4 w-24 h-24 rounded-full bg-light-blue opacity-20"
            animate={{ 
              y: [0, -30, 0],
              x: [0, 30, 0],
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute left-1/3 top-1/3 w-16 h-16 rounded-full bg-vibrant-pink opacity-20"
            animate={{ 
              scale: [1, 1.3, 1],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;