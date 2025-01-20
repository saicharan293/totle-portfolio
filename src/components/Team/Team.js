import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaFacebookSquare } from 'react-icons/fa'; // Icons for social media
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
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 px-6 place-items-center">
        {/* Team Member 1 */}
        <div
          className="w-full md:w-11/12 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          data-aos="fade-up"
        >
          <img
            src="/images/sriragh2.png"
            alt="Yashwanth Sriragh"
            className="rounded-2xl h-40 max-w-48 mx-auto mb-4 shadow-lg md:w-30 md:h-28 lg:max-w-44 lg:h-40" // Responsive dimensions
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
            src="/images/manohar.jpeg"
            alt="Manohar"
            className="rounded-2xl h-40 max-w-48 mx-auto mb-4 shadow-lg md:w-30 md:h-28 lg:max-w-44 lg:h-40" // Responsive dimensions
            />
          <h3 className="text-xl font-bold">Manohar</h3>
          <p className="text-blue-500">Co-Founder</p>
          <p className="mt-2 text-gray-600">
          With extensive expertise in customer support and a proven ability to oversee operations, ensuring seamless and timely execution.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://www.linkedin.com/in/manohar-jannala-9b49131b4" rel="noopener noreferrer" target="_blank" className="text-gray-700 hover:text-blue-500 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-700 hover:text-blue-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jannalamanohar@gmail.com" rel="noopener noreferrer" target="_blank" className="text-gray-700 hover:text-red-500 transition">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Team Member 3 */}
        {/* <div
          className="w-full md:w-11/12 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          data-aos="fade-up"
        >
          <img
            src="/images/Nikhila2.png"
            alt="Nikhila Shawla"
            className="rounded-full mx-auto mb-4 shadow-lg md:w-30 md:h-28 lg:max-w-44 lg:h-40" // Responsive dimensions
          />
          <h3 className="text-xl font-bold">Nikhila Shawla</h3>
          <p className="text-blue-500">Business Development Analyst</p>
          <p className="mt-2 text-gray-600">
          Nikhila leads our Business initiatives, bringing expertise in Business strategy and market analysis.
          </p>
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
        </div> */}
        
      </div>
      <footer className="bg-gray-900 text-gray-400 py-8 px-8 mt-14 md:flex items-center justify-between gap-4">
        <div className="">
          <p>&copy; {new Date().getFullYear()} TOTLE. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <NavLink className="hover:text-white transition">Privacy Policy</NavLink>
            <NavLink to='/contact' onClick={handleLinkClick} className="hover:text-white transition">Contact Us</NavLink>
          </div>
        </div>
        <div>
          <h4 className='mb-2'>Follow us on</h4>
          <div className='flex gap-4 items-center justify-start list-none'>
            <li>
              <a href="http://www.linkedin.com/in/totle-edu-3b0792347" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://x.com/TotleEdu" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/totle_edu/?next=%2F" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61572098313677" target="_blank" rel="noreferrer">
                <FaFacebookSquare />
              </a>
            </li>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Team;
