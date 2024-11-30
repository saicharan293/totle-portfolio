import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Icons for social media
import AOS from 'aos'; // for scroll animations
import 'aos/dist/aos.css';
import { NavLink, useNavigate } from 'react-router-dom';
// import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const navigate= useNavigate()
  const handleLinkClick = ()=>{
    navigate('/contact')
    window.scrollTo(0, 0);
  }

  return (
    <section className="bg-gray-100 pt-20 text-center">
      {/* Main Header */}
      <h2 className="text-4xl font-bold pt-10 mb-12" data-aos="fade-up">
        Meet Our Team
      </h2>

      {/* Team Members Section */}
      <div className="grid grid-cols-2 px-6 place-items-center">
        {/* Team Member 1 */}
        <div
          className="w-full md:w-11/12 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          data-aos="fade-up"
        >
          <img
            src="/images/sriragh2.png"
            alt="Yashwanth Sriragh"
            className="rounded-full mx-auto mb-4 shadow-lg md:w-30 md:h-28 lg:max-w-44 lg:h-40" // Responsive dimensions
          />
          <h3 className="text-xl font-bold">Yashwanth Sriragh</h3>
          <p className="text-tangering">Founder</p>
          <p className="mt-2 text-gray-600">
            Senior Software Engineer @ Volkswagen | 98.52 percentile @ CAT 2018 | Mechanical Engineer | Screen Writer
          </p>
          {/* Social Media Links */}
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://www.linkedin.com/in/sriragh-pinnapareddy-95961a295" rel="noopener noreferrer" target="_blank" className="text-gray-700 hover:text-blue-500 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/p_sriragh" target='_blank' rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sriragh.yash@gmail.com" rel="noopener noreferrer" target="_blank" className="text-gray-700 hover:text-red-500 transition">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Team Member 2 */}
        <div
          className="w-full md:w-11/12 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          data-aos="fade-up"
        >
          <img
            src="/images/sriragh.jpg"
            alt="Sriragh Yashwanth"
            className="rounded-full mx-auto mb-4 shadow-lg md:w-30 md:h-28 lg:max-w-44 lg:h-40" // Responsive dimensions

            // className="rounded-full w-30 h-[896px] mx-auto mb-4 shadow-lg md:w-32 md:h-32 lg:w-40 lg:h-40" // Responsive dimensions
          />
          <h3 className="text-xl font-bold">Sriragh Yaswanth</h3>
          <p className="text-blue-500">CTO</p>
          <p className="mt-2 text-gray-600">
            Jane leads our tech initiatives, with expertise in AI and machine learning.
          </p>
          {/* Social Media Links */}
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://linkedin.com" className="text-gray-700 hover:text-blue-500 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-700 hover:text-blue-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="mailto:jane@totle.com" className="text-gray-700 hover:text-red-500 transition">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Team Member 3 */}
        {/* <div
          className="w-full md:w-5/12 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          data-aos="fade-up"
        > */}
          {/* <img
            src="/images/team3.jpg"
            alt="Mark Taylor"
            className="rounded-full w-[414px] h-[896px] mx-auto mb-4 shadow-lg md:w-32 md:h-32 lg:w-40 lg:h-40" // Responsive dimensions
          />
          <h3 className="text-xl font-bold">Mark Taylor</h3>
          <p className="text-green-500">Lead Developer</p>
          <p className="mt-2 text-gray-600">
            A full-stack developer, Mark is an expert in scalable systems and platform architecture.
          </p> */}
          {/* Social Media Links */}
          {/* <div className="flex justify-center mt-4 space-x-4">
            <a href="https://linkedin.com" className="text-gray-700 hover:text-blue-500 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-700 hover:text-blue-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="mailto:mark@totle.com" className="text-gray-700 hover:text-red-500 transition">
              <FaEnvelope size={24} />
            </a>
          </div> */}
        {/* </div> */}
      </div>
      <footer className="bg-gray-900 text-gray-400 py-8 px-8 mt-14 flex items-center justify-between gap-4">
        <div className="">
          <p>&copy; {new Date().getFullYear()} TOTLE. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <NavLink className="hover:text-white transition">Privacy Policy</NavLink>
            <NavLink to='/contact' onClick={handleLinkClick} className="hover:text-white transition">Contact Us</NavLink>
          </div>
        </div>
        <div>
          <h4 className='mb-2'>Follow us on</h4>
          <div className='flex gap-4 items-center justify-start'>
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Team;
