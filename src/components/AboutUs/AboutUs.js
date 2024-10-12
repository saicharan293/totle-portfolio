import React, { useEffect } from 'react';
import AOS from 'aos'; // For animations on scroll
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-bg bg-cover bg-center relative min-h-screen flex items-center justify-center parallax" style={{ backgroundImage: `url('/images/about-us-hero.jpg')` }}>
        <div className="overlay bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="text-center relative z-10" data-aos="fade-up">
          <h1 className="text-6xl font-extrabold text-white">About TOTLE</h1>
          <p className="text-xl text-gray-300 mt-4">Our story, mission, and values</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6 text-tangering">Company Overview</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            TOTLE was founded with the goal of reshaping education by combining artificial intelligence with human expertise. We believe in providing an accessible, personalized, and impactful learning experience for students of all backgrounds.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6 text-tangering">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Our mission is to democratize education by leveraging AI-powered learning solutions that maintain the human touch, ensuring that everyone has access to personalized, world-class learning opportunities.
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We aim to build a future where education is not limited by geographical, economic, or social boundaries, but is available to everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6 text-tangering">Our Founding Story</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            TOTLE was born out of a shared vision between a group of educators and technologists who saw the potential for AI to transform learning. After years of development, TOTLE launched with a mission to bridge the gap between technology and traditional education. Our founders were driven by a passion to provide a more personalized and accessible learning experience for students around the globe.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6 text-tangering">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">We embrace cutting-edge technology to deliver the best learning experiences.</p>
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
    </div>
  );
};

export default AboutUs;
