import React from 'react';
import { motion } from 'framer-motion';
import NDIS from '/HeroE.webp';
import { useNavigate } from 'react-router-dom';

const NDISInfo = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-gradient-to-r from-[#105382] to-[#09A8CC] text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 font-merri-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What is NDIS?
          </motion.h2>
          <motion.p
            className="mb-6 text-lg font-open-sans leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The National Disability Insurance Scheme (NDIS) is a revolutionary program in Australia designed to provide support and services to individuals with disabilities. By offering funding for personalized care, NDIS empowers participants to achieve their goals, increase their independence, and enhance their social and economic participation. At NISSI Home Care, we are dedicated to helping you navigate and make the most of your NDIS plan, ensuring you receive the support you need to thrive.
          </motion.p>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 font-merri-sans">Individualized Support</h3>
              <p className="font-open-sans">NDIS provides tailored support based on individual needs and goals, ensuring a personalized approach to care and services.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 font-merri-sans">Funding for Services</h3>
              <p className="font-open-sans">Participants receive funding for a variety of supports including daily personal activities, transportation, therapeutic supports, and more.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 font-merri-sans">Community Engagement</h3>
              <p className="font-open-sans">NDIS encourages and supports community involvement, fostering social connections and inclusion for individuals with disabilities.</p>
            </div>
          </motion.div>
          <motion.a
            onClick={() => navigate("/contact")}
            className="inline-block mt-8 text-lg  bg-vibrant-pink  text-white py-3 px-6 rounded-full transition-colors cursor-pointer font-merri-sans"
            whileHover={{ scale: 1.05 }}
          >
            Learn More About NDIS
          </motion.a>
        </div>
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img
            src={NDIS}
            alt="NDIS Illustration"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default NDISInfo;
