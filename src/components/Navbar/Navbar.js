import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes, FaEnvelope } from 'react-icons/fa'; // Icons for search, menu, and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = ()=>{
    window.scrollTo(0, 0);
    if(isOpen){
      setIsOpen(false)
    }
  }

  return (
    <nav className={`fixed w-full z-20 top-0 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'} dark:bg-gray-900`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center transition-colors duration-300">
        {/* Logo */}
        <NavLink to="/" className="text-3xl font-bold text-tangering dark:text-white" onClick={handleLinkClick}>
          TOTLE
        </NavLink>

        {/* Search Icon */}
        {/* <div className="hidden md:flex items-center space-x-4">
          <FaSearch className="text-gray-700 dark:text-white hover:text-tangering cursor-pointer" />
        </div> */}

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="text-gray-700 dark:text-white w-6 h-6 cursor-pointer" />
          ) : (
            <FaBars className="text-gray-700 dark:text-white w-6 h-6 cursor-pointer" />
          )}
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <NavLink to="/" onClick={handleLinkClick} className={ ({ isActive }) =>`transition-all duration-300 dark:text-white hover:text-tangering ${ isActive ? 'text-tangering' : isScrolled ? 'text-gray-700' : 'text-gray-400' }`}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={handleLinkClick} className={({ isActive }) =>`transition-all duration-300 dark:text-white hover:text-tangering ${ isActive ? 'text-tangering' : isScrolled ? 'text-gray-700' : 'text-gray-400' }`}>
            About Us
          </NavLink>
          <NavLink to="/vision" onClick={handleLinkClick} className={({ isActive }) =>`transition-all duration-300 dark:text-white hover:text-tangering ${ isActive ? 'text-tangering' : isScrolled ? 'text-gray-700' : 'text-gray-400' }`}>
            Vision
          </NavLink>
          <NavLink to="/tech" onClick={handleLinkClick} className={({ isActive }) =>`transition-all duration-300 dark:text-white hover:text-tangering ${ isActive ? 'text-tangering' : isScrolled ? 'text-gray-700' : 'text-gray-400' }`}>
            Technology
          </NavLink>
          {/* <Link to="/testimonials" className="text-gray-700 dark:text-white hover:text-tangering transition-all duration-300">
            Testimonials
          </Link> */}
          <NavLink to="/product" onClick={handleLinkClick} className={({ isActive }) =>`transition-all duration-300 dark:text-white hover:text-tangering ${
                isActive ? 'text-tangering' : isScrolled ? 'text-gray-700' : 'text-gray-400'
              }`}>
            Product
          </NavLink>
          <NavLink to="/team" onClick={handleLinkClick} className={({ isActive }) =>`transition-all duration-300 dark:text-white hover:text-tangering ${ isActive ? 'text-tangering' : isScrolled ? 'text-gray-700' : 'text-gray-400' }`}>
            Team
          </NavLink>
          {/* <Link to="/blog" className="text-gray-700 dark:text-white hover:text-tangering transition-all duration-300">
            Blog
          </Link> */}
          <NavLink to="/careers" onClick={handleLinkClick} className={({ isActive }) =>`transition-all duration-300 dark:text-white hover:text-tangering ${ isActive ? 'text-tangering' : isScrolled ? 'text-gray-700' : 'text-gray-400' }`}>
            Careers
          </NavLink>
          <NavLink to="/investors" onClick={handleLinkClick} className={({ isActive }) =>`transition-all duration-300 dark:text-white hover:text-tangering ${ isActive ? 'text-tangering' : isScrolled ? 'text-gray-700' : 'text-gray-400' }`}>
            Investors
          </NavLink>
          <NavLink to="/contact" onClick={handleLinkClick} className="flex items-center bg-tangering text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-all duration-300">
            <FaEnvelope className="mr-2" /> Contact
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 z-30 transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex flex-col items-center justify-center space-y-8 mt-24">
            <NavLink to="/" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-white text-xl hover:text-tangering">
              Home
            </NavLink>
            <NavLink to="/vision" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-white text-xl hover:text-tangering">
              Vision
            </NavLink>
            <NavLink to="/testimonials" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-white text-xl hover:text-tangering">
              Testimonials
            </NavLink>
            <NavLink to="/team" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-white text-xl hover:text-tangering">
              Team
            </NavLink>
            <NavLink to="/blog" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-white text-xl hover:text-tangering">
              Blog
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-white text-xl hover:text-tangering">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
