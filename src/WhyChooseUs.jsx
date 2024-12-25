import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCog, FaUsers, FaBalanceScale, FaComments } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    { title: "Personalized Care", description: "Tailored support plans for your unique needs", icon: <FaUserCog /> },
    { title: "Experienced Team", description: "Dedicated professionals with years of NDIS expertise", icon: <FaUsers /> },
    { title: "Holistic Approach", description: "Addressing all aspects of your well-being", icon: <FaBalanceScale /> },
    { title: "Transparent Communication", description: "Clear, open dialogue throughout your journey", icon: <FaComments /> },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#105382] text-center mb-16 font-merriweather-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why <span className="text-[#CE2F58]">Choose Us</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            >
              <motion.div
                className="text-5xl mb-6 text-[#09A8CC] group-hover:text-[#CE2F58] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {reason.icon}
              </motion.div>
              <h3 className="text-2xl font-medium text-[#105382] mb-4 font-merri-sans">{reason.title}</h3>
              <p className="text-gray-600 font-open-sans">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Static background graphics */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 Q50,50 100,0 V100 H0 Z"
          fill="url(#grad1)"
          opacity="0.1"
        />
        <path
          d="M0,100 Q50,50 100,100 V0 H0 Z"
          fill="url(#grad2)"
          opacity="0.1"
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#09A8CC" />
            <stop offset="100%" stopColor="#CE2F58" />
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#CE2F58" />
            <stop offset="100%" stopColor="#09A8CC" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default WhyChooseUs;
