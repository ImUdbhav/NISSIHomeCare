import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCog, FaHandsHelping, FaCar, FaNotesMedical, FaHome, FaBrain, FaBroom, FaUsers, FaCalendarAlt, FaHeartbeat } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md p-6 m-4 overflow-hidden relative transition-transform transform hover:scale-105"
      whileHover={{ boxShadow: "0px 8px 15px rgba(0,0,0,0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className="bg-[#105382] text-white p-3 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-[#0394BA] text-xl font-semibold font-merri-sans">{title}</h3>
      </div>
      <p className="text-gray-700 mb-4 font-open-sans">{description}</p>
      <Link
        to={`/services#${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="inline-block text-[#105382] font-medium text-lg font-open-sans"
      >
        <motion.span
          whileHover={{ x: 5 }}
        >
          Explore →
        </motion.span>
      </Link>
      <motion.div
        className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#CE2F58] rounded-full opacity-30"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  );
};




const Services = () => {
  const services = [
    {
      title: "Assist-Life Stage Transition",
      description: "Tailored support for seamless transitions through various life stages, ensuring comfort and adaptability.",
      icon: <FaUserCog size={24} />
    },
    {
      title: "Assist Personal Activities",
      description: "Personalized assistance with daily activities, promoting independence and enhancing quality of life.",
      icon: <FaHandsHelping size={24} />
    },
    {
      title: "Assist-Travel/Transport",
      description: "Reliable transportation and travel support, ensuring safe and comfortable journeys for all your needs.",
      icon: <FaCar size={24} />
    },
    {
      title: "Community Nursing Care",
      description: "Professional nursing services within the community, providing expert healthcare and support.",
      icon: <FaNotesMedical size={24} />
    },
    {
      title: "Daily Tasks/Shared Living",
      description: "Support with everyday tasks and fostering a collaborative living environment for enhanced well-being.",
      icon: <FaHome size={24} />
    },
    {
      title: "Development-Life Skills",
      description: "Empowering individuals through life skills training, fostering personal growth and independence.",
      icon: <FaBrain size={24} />
    },
    {
      title: "Household Tasks",
      description: "Comprehensive assistance with household chores, maintaining a clean and organized living space.",
      icon: <FaBroom size={24} />
    },
    {
      title: "Participate Community",
      description: "Facilitating active community involvement, encouraging social connections and civic engagement.",
      icon: <FaUsers size={24} />
    },
    {
      title: "Group/Centre Activities",
      description: "Engaging group activities at community centers, promoting social interaction and personal development.",
      icon: <FaCalendarAlt size={24} />
    },
    {
      title: "Respite Care",
      description: "Temporary relief care for caregivers, providing a break while ensuring continued support for loved ones.",
      icon: <FaHeartbeat size={24} />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#09A8CC] to-[#105382]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 font-merri-sans">
          Comprehensive Care Services
        </h2>
        <p className="text-white text-center max-w-2xl mx-auto mb-12 font-open-sans">
          Discover our wide range of personalized care services designed to support and enhance your daily life, fostering independence and well-being.
        </p>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
  {services.slice(0, 9).map((service, index) => (
    <ServiceCard
      key={index}
      title={service.title}
      description={service.description}
      icon={service.icon}
    />
  ))}
</div>
<div className="mt-6 flex justify-center">
  <ServiceCard
    title={services[9].title}
    description={services[9].description}
    icon={services[9].icon}
  />
</div>
      </div>
    </section>
  );
};

export default Services;