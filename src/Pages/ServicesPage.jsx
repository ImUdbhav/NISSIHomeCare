import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Daily from '/NissiDaily.webp';
import Comm2 from '/Nissicommunity2.webp';
import Skills from '/NissiSkills1.webp';
import Group from '/NissiGroup1.webp';
import Daily1 from '/NissiDaily1.webp';
import Daily2 from '/Nissidaily2.webp';
import LifeStage from '/NissiLifeStage.webp';
import Nursing from '/NissiNursing.webp';
import Shared from '/NissiShared.webp';
import Personal from '/NissiPersonal.webp';
import Transport from '/NissiTansport.webp';
import Respite from '/NissiRespite.webp'; 
import { useLocation } from 'react-router-dom';



const ServiceDetails = ({ title, description, index, color, imageUrl, serviceRef }) => {
  const controls = useAnimation();
  const ref = serviceRef || useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className={`bg-white rounded-2xl shadow-2xl p-8 mb-16 transform ${isHovered ? 'scale-105' : 'scale-100'} transition-all duration-300`}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, rotate: 0 },
        hidden: { opacity: 0, y: 50, rotate: -5 }
      }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ boxShadow: `0 10px 30px -10px ${color}` }}
    >
      <div className="flex flex-col items-center mb-6">
        <motion.div
          className={`w-32 h-32 mb-4 overflow-hidden rounded-full bg-${color} flex items-center justify-center`}
          // animate={{ rotate: isHovered ? 360 : 0 }}
          // transition={{ duration: 0.5 }}
        >
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </motion.div>
        <h3 className="text-3xl font-merri-sans font-black text-[#CE2F58] tracking-tight text-center">{title}</h3>
      </div>
      <p className="text-gray-600 font-open-sans leading-relaxed text-lg text-center">{description}</p>
      <motion.button
        className={`mt-6 px-6 py-3 bg-${color} text-white rounded-full font-semibold tracking-wide block mx-auto`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
};

const ServicesPage = () => {
  const location = useLocation();
  const refs = {
    'assist-life-stage-transition': useRef(null),
    'assist-personal-activities': useRef(null),
    'assist-travel/transport': useRef(null),
    'community-nursing-care': useRef(null),
    'daily-tasks/shared-living': useRef(null),
    'development-life-skills': useRef(null),
    'household-tasks': useRef(null),
    'participate-community': useRef(null),
    'group/centre-activities': useRef(null),
    'respite-care': useRef(null)
  };

  useEffect(() => {
    const hash = location.hash.substring(1); // Get the hash from the URL
    if (hash && refs[hash] && refs[hash].current) {
      refs[hash].current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, refs]);

  const services = [
    {
      title: "Assist-Life Stage Transition",
      description: "Embark on a transformative journey through life's pivotal moments with our expert guidance. We're here to turn challenges into opportunities, ensuring you thrive in every new chapter.",
      color: "purple-500",
      imageUrl: LifeStage,
    },
    {
      title: "Assist Personal Activities",
      description: "Experience the perfect blend of independence and support. Our personalized assistance empowers you to live life on your terms, with a touch of care that feels just right.",
      color: "blue-500",
      imageUrl: Personal,
    },
    {
      title: "Assist-Travel/Transport",
      description: "Buckle up for adventures without boundaries! Our transport assistance isn't just about reaching destinations; it's about exploring the world with confidence and excitement.",
      color: "green-500",
      imageUrl: Transport,
    },
    {
      title: "Community Nursing Care",
      description: "Bringing heartfelt care right to your doorstep. Our nursing team doesn't just treat symptoms; we nurture well-being, turning every day into an opportunity for better health.",
      color: "red-500",
      imageUrl: Nursing,
    },
    {
      title: "Daily Tasks/ Shared Living",
      description: "Transform everyday chores into shared moments of joy. Our approach to daily living creates a vibrant community where support and independence dance in perfect harmony.",
      color: "yellow-500",
      imageUrl: Shared,
    },
    {
      title: "Development - Life Skills",
      description: "Unlock your hidden potential and watch yourself soar! Our life skills program is your launchpad to personal growth, turning dreams into achievable goals.",
      color: "indigo-500",
      imageUrl: Skills,
    },
    {
      title: "Household Tasks",
      description: "Wave goodbye to household stress! We sprinkle a bit of magic into every corner, creating a living space that's not just clean, but a true reflection of your vibrant lifestyle.",
      color: "pink-500",
      imageUrl: Daily,
    },
    {
      title: "Participate Community",
      description: "Dive into a world of connections and shared experiences. We're not just about participation; we're about creating a tapestry of friendships and unforgettable moments.",
      color: "teal-500",
      imageUrl: Comm2,
    },
    {
      title: "Group/Centre Activities",
      description: "Step into a playground of endless possibilities! Our group activities are where fun meets personal growth, creating a colorful mosaic of experiences tailored just for you.",
      color: "orange-500",
      imageUrl: Group,
    },
    {
      title: "Respite Care",
      description: "Take a well-deserved break while we provide compassionate care for your loved ones. Our respite services offer a refreshing pause, ensuring peace of mind and renewed energy for caregivers.",
      color: "cyan-500",
      imageUrl: Respite,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F4F8] to-[#D1E3F8] overflow-hidden mt-20">
      <div className="container mx-auto px-4 py-16 relative">
        <motion.h1 
          className="text-5xl md:text-6xl font-merri-sans font-black text-center text-[#836D21] mb-5 relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#105382]">Our Care </span><span className="text-[#0394BA]">Services</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-center text-gray-600 mb-16 max-w-3xl mx-auto relative z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover a world where care meets creativity, independence dances with support, and every day is an adventure in well-being.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceDetails 
  title={services[0].title}
  description={services[0].description}
  index={0} 
  color="purple-500" 
  imageUrl={LifeStage}
  serviceRef={refs['assist-life-stage-transition']} 
/>
<ServiceDetails 
  title={services[1].title}
  description={services[1].description}
  index={1} 
  color="blue-500" 
  imageUrl={Personal}
  serviceRef={refs['assist-personal-activities']}
/>
<ServiceDetails 
  title={services[2].title}
  description={services[2].description}
  index={2} 
  color="green-500" 
  imageUrl={Transport}
  serviceRef={refs['assist-travel/transport']}
/>
<ServiceDetails 
  title={services[3].title}
  description={services[3].description} 
  index={3} 
  color="red-500" 
  imageUrl={Nursing}
  serviceRef={refs['community-nursing-care']}
/>
<ServiceDetails 
  title={services[4].title}
  description={services[4].description} 
  index={4} 
  color="yellow-500" 
  imageUrl={Shared}
  serviceRef={refs['daily-tasks/shared-living']}
/>
<ServiceDetails 
  title={services[5].title}
  description={services[5].description} 
  index={5} 
  color="indigo-500" 
  imageUrl={Skills}
  serviceRef={refs['development-life-skills']}
/>
<ServiceDetails 
  title={services[6].title}
  description={services[6].description} 
  index={6} 
  color="pink-500" 
  imageUrl={Daily}
  serviceRef={refs['household-tasks']}
/>
<ServiceDetails 
 title={services[7].title}
 description={services[7].description}
  index={7} 
  color="teal-500" 
  imageUrl={Comm2}
  serviceRef={refs['participate-community']}
/>
<ServiceDetails 
  title={services[8].title}
  description={services[8].description}
  index={8} 
  color="orange-500" 
  imageUrl={Group}
  serviceRef={refs['group/centre-activities']}
/>
        </div>
        <div className="mt-8 flex justify-center">
          <ServiceDetails
            title={services[9].title}
            description={services[9].description}
            index={9}
            color={services[9].color}
            imageUrl={services[9].imageUrl}
            serviceRef={refs['respite-care']}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-20"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;