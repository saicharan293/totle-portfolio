import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaRobot, FaBrain, FaCodeBranch } from 'react-icons/fa'; // Icons for tech stack

const TechnologyInnovation = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="relative bg-white dark:bg-gray-900 text-center py-20">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-20"
        style={{ backgroundImage: "url('/images/vision.jpg')" }} // Replace with an appropriate background
      ></div>

      <div className="relative z-10 py-10 container mx-auto">
        {/* Header: Vision Statement */}
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-tangering to-orange-500 text-transparent bg-clip-text" data-aos="fade-up">
          Technology & Innovation
        </h1>

        {/* Intro Section */}
        <section className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-12" data-aos="fade-up" data-aos-delay="300">
          <p>
            TOTLE’s platform is powered by cutting-edge artificial intelligence and designed to seamlessly integrate AI-driven learning with the human touch. Our advanced technology enables us to create highly personalized and effective learning experiences for students across the globe.
          </p>
        </section>

        {/* AI and Technology Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-center group" data-aos="fade-up" data-aos-delay="400">
            <FaRobot className="text-6xl text-tangering mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">AI-Driven Learning</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our proprietary AI algorithms analyze student performance, learning behaviors, and preferences to create highly tailored educational paths.
            </p>
          </div>

          <div className="flex flex-col items-center group" data-aos="fade-up" data-aos-delay="500">
            <FaBrain className="text-6xl text-blue-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Adaptive AI Models</h3>
            <p className="text-gray-600 dark:text-gray-300">
              TOTLE uses adaptive AI models to constantly evolve and optimize learning experiences based on real-time data and feedback.
            </p>
          </div>

          <div className="flex flex-col items-center group" data-aos="fade-up" data-aos-delay="600">
            <FaCodeBranch className="text-6xl text-green-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Seamless Integration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our platform is built to integrate seamlessly with various educational tools and content, ensuring a smooth experience for both students and educators.
            </p>
          </div>
        </section>

        {/* Infographics Section */}
        <section className="my-12">
  <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-8" data-aos="fade-up" data-aos-delay="300">
    How AI Powers TOTLE’s Learning Platform
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Infographic 1 */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
      <img 
        src="/images/ai-learning.jpg" 
        alt="AI Learning Infographic" 
        className="w-full h-auto mb-4 max-w-xs rounded-lg shadow-md"
      />
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Personalized Learning Paths</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
        Our AI creates customized learning paths based on each student’s individual needs and progress, optimizing their learning journey.
      </p>
    </div>

    {/* Infographic 2 */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="fade-up" data-aos-delay="500">
      <img 
        src="/images/ai-data.jpg" 
        alt="AI Data Insights" 
        className="w-full h-auto mb-4 max-w-xs rounded-lg shadow-md"
      />
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Real-Time Data Insights</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
        TOTLE’s AI provides educators with real-time insights into student performance, allowing them to adjust content and teaching methods on the go.
      </p>
    </div>
  </div>
</section>


        {/* Future Innovations Section */}
        <section className="my-12">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-8" data-aos="fade-up" data-aos-delay="300">
            Future Innovations
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-12" data-aos="fade-up" data-aos-delay="400">
            TOTLE is continuously exploring new AI technologies and educational innovations to further enhance the learning experience. Our R&D team is focused on the future of education, including the integration of immersive technologies like virtual reality (VR) and augmented reality (AR).
          </p>
        </section>

        {/* Call-to-Action Button */}
        {/* <Link
          to="/learn-more"
          className="inline-block bg-tangering text-white py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 mt-12"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Learn More About Our Technology
        </Link> */}
      </div>

      {/* Decorative Divider */}
      <svg
        className="relative mt-10 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        data-aos="fade-up"
        data-aos-delay="600"
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

export default TechnologyInnovation;
