import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Icons for social media
import AOS from 'aos'; // for scroll animations
import 'aos/dist/aos.css';

const Team = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section className="bg-gray-100 py-20 text-center">
      {/* Main Header */}
      <h2 className="text-4xl font-bold pt-10 mb-12" data-aos="fade-up">
        Meet Our Team
      </h2>

      {/* Team Members Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Team Member 1 */}
        <div
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          data-aos="fade-up"
        >
          <img
            src="/images/team1.jpg"
            alt="John Doe"
            className="rounded-full w-32 h-32 mx-auto mb-4 shadow-lg"
          />
          <h3 className="text-xl font-bold">John Doe</h3>
          <p className="text-tangering">Co-Founder & CEO</p>
          <p className="mt-2 text-gray-600">
            Experienced in scaling education platforms, John drives TOTLE’s strategic vision.
          </p>
          {/* Social Media Links */}
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://linkedin.com" className="text-gray-700 hover:text-blue-500 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-700 hover:text-blue-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="mailto:john@totle.com" className="text-gray-700 hover:text-red-500 transition">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Team Member 2 */}
        <div
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="/images/team2.jpg"
            alt="Jane Smith"
            className="rounded-full w-32 h-32 mx-auto mb-4 shadow-lg"
          />
          <h3 className="text-xl font-bold">Jane Smith</h3>
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
        <div
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img
            src="/images/team3.jpg"
            alt="Mark Taylor"
            className="rounded-full w-32 h-32 mx-auto mb-4 shadow-lg"
          />
          <h3 className="text-xl font-bold">Mark Taylor</h3>
          <p className="text-green-500">Lead Developer</p>
          <p className="mt-2 text-gray-600">
            A full-stack developer, Mark is an expert in scalable systems and platform architecture.
          </p>
          {/* Social Media Links */}
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://linkedin.com" className="text-gray-700 hover:text-blue-500 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-700 hover:text-blue-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="mailto:mark@totle.com" className="text-gray-700 hover:text-red-500 transition">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Advisors Section */}
      {/* <h2 className="text-4xl font-bold mt-16 mb-12" data-aos="fade-up">
        Advisors & Investors
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* Advisor 1 */}
        {/* <div
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          data-aos="fade-up"
        >
          <img
            src="/images/advisor1.jpg"
            alt="Advisor Name"
            className="rounded-full w-32 h-32 mx-auto mb-4 shadow-lg"
          />
          <h3 className="text-xl font-bold">Dr. Emily Carter</h3>
          <p className="text-blue-500">AI Advisor</p>
          <p className="mt-2 text-gray-600">
            An AI specialist, Dr. Carter advises on TOTLE’s AI strategy and educational applications.
          </p>
        </div> */}

        {/* Advisor 2 */}
        {/* <div
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="/images/advisor2.jpg"
            alt="Investor Name"
            className="rounded-full w-32 h-32 mx-auto mb-4 shadow-lg"
          />
          <h3 className="text-xl font-bold">Michael Jordan</h3>
          <p className="text-tangering">Investor & Advisor</p>
          <p className="mt-2 text-gray-600">
            As a key investor, Michael brings strategic insights and connections to the education sector.
          </p>
        </div> */}
      </div>

      {/* Collaborations Section */}
      {/* <h2 className="text-4xl font-bold mt-16 mb-12" data-aos="fade-up">
        Collaborations & Partnerships
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* Collaboration 1 */}
        {/* <div
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          data-aos="fade-up"
        >
          <img
            src="/images/partner1.jpg"
            alt="Partner 1"
            className="rounded w-full h-auto mb-4"
          />
          <h3 className="text-xl font-bold">Stanford University</h3>
          <p className="mt-2 text-gray-600">
            TOTLE collaborates with Stanford University to enhance AI-based educational research.
          </p>
        </div> */}

        {/* Collaboration 2 */}
        {/* <div
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="/images/partner2.jpg"
            alt="Partner 2"
            className="rounded w-full h-auto mb-4"
          />
          <h3 className="text-xl font-bold">MIT Media Lab</h3>
          <p className="mt-2 text-gray-600">
            In collaboration with MIT Media Lab, TOTLE explores cutting-edge technology in education.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Team;
