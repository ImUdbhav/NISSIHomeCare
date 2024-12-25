import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";
import { MdEmail } from 'react-icons/md'; 
import Form from '../Form';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f1f3f3] to-[#09A8CC] pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-deep-blue text-center mb-12 font-merri-sans"
        >
          Contact Us
        </motion.h1>

        <div className="flex flex-wrap -mx-4 mb-16">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-deep-blue mb-6 font-merri-sans">Get in Touch</h2>
              <Form />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-deep-blue mb-6 font-merri-sans">Contact Information</h2>
              <div className="mb-6 space-y-6">
                <div className="flex items-center">
                  <FaPhone className="text-vibrant-pink mr-3 text-xl" />
                  <span className="text-deep-blue font-open-sans font-bold">+61-415830640</span>
                </div>
                <div className="flex items-center">
                  <MdEmail className="text-vibrant-pink mr-3 text-xl" />
                  <span className="text-deep-blue font-open-sans font-bold">admin@nissihomecare.com.au</span>
                </div>
                <div className="flex items-center">
                  <FaFacebook className="text-vibrant-pink mr-3 text-xl" />
                  <span className="text-deep-blue font-open-sans font-bold">@NISSIHomeCare</span>
                  </div>
                  <div className="flex items-center">

                  <FaInstagram className="text-vibrant-pink mr-3 text-xl" />
                  <span className="text-deep-blue font-open-sans font-bold">@NISSIHomeCare</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-deep-blue mb-6 font-merri-sans">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
            
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.4922812045593!2d114.66245939999999!3d-28.734715599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2bda45a1dda39b1d%3A0xaee774c47f8604bb!2s8%20Protea%20Ave%2C%20Moresby%20WA%206530%2C%20Australia!5e0!3m2!1sen!2sin!4v1727855062664!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;



