import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '/NissiLogoN.png'
import { NavLink, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-[#f1f3f3] to-[#09A8CC] shadow-lg fixed w-full z-50 top-0 font-merri-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="flex items-center justify-between h-24"> 
          <img src={Logo} alt="Logo" className='w-[130px] max-lg:w-[120px]  ' onClick={() => navigate("/")} />
          <div className="hidden md:flex  space-x-24">
          
            <NavLink to="/" end className="text-deep-blue hover:text-vibrant-pink px-3 py-2 rounded-2xl text-xl font-bold font-merri-sans" onClick={closeMenu}>
            Home
            </NavLink>
            <NavLink to="/services" className="text-deep-blue hover:text-vibrant-pink px-3 py-2 rounded-2xl text-xl font-bold font-merri-sans" onClick={closeMenu}>
            Services
            </NavLink>
            <NavLink to="/contact" className="text-deep-blue hover:text-vibrant-pink px-3 py-2 rounded-2xl text-xl font-bold font-merri-sans" onClick={closeMenu}>
             Contact
            </NavLink>
            {/* <NavLink to="/careers" className="text-deep-blue hover:text-vibrant-pink px-3 py-2 rounded-2xl text-xl font-bold font-merri-sans" onClick={closeMenu}>
            Careers
            </NavLink> */}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-deep-blue hover:text-white hover:bg-deep-blue focus:outline-none focus:bg-deep-blue focus:text-white transition duration-150 ease-in-out"
            >
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden bg-gradient-to-r from-[#f1f3f3] to-[#09A8CC]"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink to="/" end className="block text-deep-blue hover:text-vibrant-pink px-3 py-2 rounded-md text-lg font-medium font-merri-sans" onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink to="/services" className="block text-deep-blue hover:text-vibrant-pink px-3 py-2 rounded-md text-lg font-medium font-merri-sans" onClick={closeMenu}>
                Services
              </NavLink>
              {/* <NavLink to="/careers" className="block text-deep-blue hover:text-vibrant-pink px-3 py-2 rounded-md text-lg font-medium font-merri-sans" onClick={closeMenu}>
                Careers
              </NavLink> */}
              <NavLink to="/contact" className="block text-deep-blue hover:text-vibrant-pink px-3 py-2 rounded-md text-lg font-medium font-merri-sans" onClick={closeMenu}>
              Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
