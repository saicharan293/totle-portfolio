import React, { useEffect } from 'react';
import AOS from 'aos'; // for scroll animations
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

import { FaRobot, FaBookOpen, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa'; // Icons for features

const Product = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="relative bg-white dark:bg-gray-900 text-center py-20">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-20"
        style={{ backgroundImage: "url('/images/product.jpg')" }} // Replace with your background image
      ></div>

      <div className="relative z-10 py-10 container mx-auto">
        {/* Header: Product Overview */}
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-tangering to-orange-500 text-transparent bg-clip-text" data-aos="fade-up">
          TOTLE Product Overview
        </h1>

        {/* Product Overview Section */}
        <section className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-12" data-aos="fade-up" data-aos-delay="300">
          <p>
            TOTLE is an innovative AI-powered educational platform designed to bridge the gap between traditional learning and modern technology. Our platform offers personalized learning paths, expert-driven sessions, and AI-driven recommendations, enabling students to have a world-class learning experience that is tailored to their unique needs.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Feature 1: AI-Driven Recommendations */}
          <div className="flex flex-col items-center group" data-aos="fade-up" data-aos-delay="400">
            <FaRobot className="text-6xl text-tangering mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">AI-Driven Recommendations</h3>
            <p className="text-gray-600 dark:text-gray-300">
              TOTLE’s AI analyzes student data to provide tailored course recommendations, ensuring personalized learning paths for every user.
            </p>
          </div>

          {/* Feature 2: Topic-Wise Navigation */}
          <div className="flex flex-col items-center group" data-aos="fade-up" data-aos-delay="500">
            <FaBookOpen className="text-6xl text-blue-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Topic-Wise Navigation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Students can easily navigate through topics, with a clear progression and access to additional resources for deeper learning.
            </p>
          </div>

          {/* Feature 3: Expert Sessions */}
          <div className="flex flex-col items-center group" data-aos="fade-up" data-aos-delay="600">
            <FaChalkboardTeacher className="text-6xl text-green-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Expert-Driven Sessions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              TOTLE offers sessions led by experts in various fields, providing valuable insights and mentorship to students.
            </p>
          </div>

          {/* Feature 4: Completion Tracking */}
          <div className="flex flex-col items-center group" data-aos="fade-up" data-aos-delay="700">
            <FaUserGraduate className="text-6xl text-purple-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Completion Tracking</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Keep track of your progress and accomplishments through detailed progress reports, celebrating milestones along the way.
            </p>
          </div>
        </section>

        {/* User Journey Section */}
        <section className="my-12">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-8" data-aos="fade-up" data-aos-delay="300">
            A User’s Journey with TOTLE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1: Choose Platform */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Step 1: Choose Platform</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Users choose whether to enter TOTLE's free platform, where the best Bridger is assigned, or the paid platform, offering various Bridger, Expert, or Master-led options.
              </p>
            </div>

            {/* Step 2: AI-Powered Learning Path */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="500">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Step 2: AI-Powered Learning Path</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                TOTLE’s AI generates a customized learning path based on user preferences and performance, offering relevant topics to master.
              </p>
            </div>

            {/* Step 3: Bridger or Expert Sessions */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Step 3: Bridger or Expert Sessions</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Users engage in live Bridger or Expert sessions, learning from the best teachers and advancing their knowledge on specific topics.
              </p>
            </div>

            {/* Step 4: AI Evaluation and Feedback */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="700">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Step 4: AI Evaluation and Feedback</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                After each session, TOTLE’s AI evaluates the user's understanding and offers detailed feedback to both the student and future Bridgers.
              </p>
            </div>

            {/* Step 5: Progress Tracking */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="800">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Step 5: Progress Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                The user monitors their progress and achievements through detailed reports, providing motivation and insights into their learning journey.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Button */}
        {/* <Link
          to="/learn-more"
          className="inline-block bg-tangering text-white py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 mt-12"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          Learn More About Our Product
        </Link> */}
      </div>

      {/* Decorative Divider */}
      <svg
        className="relative mt-10 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <path
          fill="#f3f4f6"
          fillOpacity="1"
          d="M0,192L48,192C96,192,192,192,288,213.3C384,235,480,277,576,277.3C672,277,768,235,864,213.3C960,192,1056,192,1152,202.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Product;
