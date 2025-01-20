import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import AOS from 'aos'; // For animations on scroll
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebookSquare } from 'react-icons/fa'; // Icons for social media
import 'aos/dist/aos.css';
import { NavLink, useNavigate } from 'react-router-dom';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  const handleLinkClick = ()=>{
    navigate('/contact')
    window.scrollTo(0, 0);
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-bg bg-cover bg-center relative min-h-screen flex items-center justify-center parallax" style={{ backgroundImage: `url('/images/about-us.jpg')` }}>
        <div className="overlay bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="text-center relative z-10" data-aos="fade-up">
          <h1 className="text-6xl font-extrabold text-white">About TOTLE</h1>
          <p className="text-xl text-gray-300 mt-4">Our story, vision and values</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6 text-tangering">Company Overview</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          TOTLE is found to reshape the face of education by combining Artificial intelligence with human expertise. We aim to provide accessible, personalised, and impactful learning experiences for students of all backgrounds across various domains by adapting to the learner's pace while preserving human essence in the knowledge transfer.
          </p>
        </div>
      </section>

      
      {/* Founding Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6 text-tangering">Our Founding Story</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            TOTLE was born out of a shared vision between a group of educators and technologists who saw the potential for AI to transform learning. After years of development, TOTLE launched with a mission to bridge the gap between technology and traditional education. Our founders were driven by a passion to provide a more personalized and accessible learning experience for students around the globe.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6 text-tangering">Our Vision</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Our vision is to democratize education by leveraging AI-powered learning solutions that maintain the human touch, ensuring that everyone has access to personalized, world-class learning opportunities.
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We aim to build a future where education is not limited by geographical, economic, or social boundaries, but is available to everyone, everywhere.
          </p>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6 text-tangering">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Profit with Purpose</h3>
              <p className="text-gray-600">Although a profit-making entity, every rupee earned will be 
              reinvested back into education.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="text-gray-600">We strive for continuous improvement, both in our platform and for our users.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Learning</h3>
              <p className="text-gray-600">We believe in lifelong learning and making education a journey, not a destination.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">We are committed to acting with honesty and transparency in all that we do.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-400 py-8 px-8 mt-14 flex items-center justify-between gap-4">
        <div className="">
          <p>&copy; {new Date().getFullYear()} TOTLE. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <NavLink className="hover:text-white transition">Privacy Policy</NavLink>
            <NavLink to='/contact' onClick={handleLinkClick} className="hover:text-white transition">Contact Us</NavLink>
          </div>
        </div>
        <div className=''>
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
    </div>
  );
};

export default AboutUs;
