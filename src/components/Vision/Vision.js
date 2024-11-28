import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos'; // for scroll animations
import 'aos/dist/aos.css';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'; 
import 'react-circular-progressbar/dist/styles.css';
// import { FaUsers, FaHandshake, FaLaptopCode } from 'react-icons/fa'; 

const VisionMission = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section className="relative bg-white dark:bg-gray-900 text-center py-20">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-20"
        style={{ backgroundImage: "url('/images/vision-bg.jpg')" }} // Replace with your background image
      ></div>

      <div className="relative z-10 py-10 container mx-auto">
        {/* Header: Vision Statement */}
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-tangering to-orange-500 text-transparent bg-clip-text" data-aos="fade-up">
          Empowering Growth Through Education
        </h1>

        {/* Mission Section */}
        <section className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-12" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-4">Our Mission</h2>
          <p>
            TOTLE is committed to democratizing education by merging the power of AI with expert-driven education.
            Our mission is to ensure every learner has access to a world-class, personalized education experience, regardless of where they are or their background.
          </p>
          <p className="mt-6">
            By combining technology and human expertise, we aim to foster growth, ignite curiosity, and create pathways
            for lifelong learning.
          </p>
        </section>

        {/* Impact Goals */}
        

        {/* Call-to-Action Button */}
        <Link
          to="/learn-more"
          className="inline-block bg-tangering text-white py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 mt-12"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Learn More About Our Vision
        </Link>
      </div>

      {/* Decorative Divider */}
      {/* <svg
        className="relative mt-10 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        <path
          fill="#f3f4f6"
          fillOpacity="1"
          d="M0,192L48,192C96,192,192,192,288,213.3C384,235,480,277,576,277.3C672,277,768,235,864,213.3C960,192,1056,192,1152,202.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}
    </section>
  );
};

export default VisionMission;
