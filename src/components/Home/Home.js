import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="hero-bg bg-cover bg-center relative min-h-screen flex items-center justify-center parallax" style={{ backgroundImage: `url('/images/hero.jpg')` }}>
        <div className="overlay bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="text-center relative z-10" data-aos="fade-up">
          <h1 className="text-6xl font-extrabold text-white">
            Shaping the Future of Learning
          </h1>
          <p className="text-xl text-gray-300 mt-4" data-aos="fade-up" data-aos-delay="200">
            AI-powered learning, enhanced by human expertise.
          </p>
          <Link to="/product" className="mt-8 inline-block bg-tangering text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition pulse-animation">
            Learn More
          </Link>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="bg-gray-200 py-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-700" data-aos="fade-up">
          TOTLE combines the power of AI and human expertise to make learning accessible, personalized, and impactful for everyone.
        </h2>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <svg className="mx-auto mb-4 w-12 h-12 text-tangering" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14c0 1.88 1.4 3.57 3.47 3.96A2.5 2.5 0 0113 20h1v2H7v-2h1a2.5 2.5 0 011.53-2.04C9.6 17.57 8 15.88 8 14zm9.62 1.03l-1.27-.6a2.5 2.5 0 010-4.86l1.27-.6a5 5 0 010 6.06zM15 10l.89-.45a2.5 2.5 0 000-4.56L15 4.54a5 5 0 000 5.92zM13.76 17a5 5 0 000-2.75l1.27-.6a2.5 2.5 0 010 4.86l-1.27-.6z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">AI-driven Assessments</h3>
            <p className="text-gray-600">Manage logistics and assessments with AI precision.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <svg className="mx-auto mb-4 w-12 h-12 text-tangering" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7H7v6h6V7z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6v6H9V7zM4 11h2v2H4v-2zm12 0h2v2h-2v-2zm-6 8v2H4v-2h2v-4H4v-2h4v2H6v4h4zM16 15h4v4h-4v-4zM4 11h2v2H4v-2zm4 0h6v2H8v-2z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Personalized Learning Paths</h3>
            <p className="text-gray-600">Tailored learning paths for every student.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <svg className="mx-auto mb-4 w-12 h-12 text-tangering" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.92 12.1l-.96-3.72m1.2 4.62h-3.9m4.62 1.92l-2.7 3.6m0 0l-2.7-3.6m0 0L9.96 9.12M7.8 10.32L8.76 6.6M5.52 10.8h3.9m-.96-1.92l2.7-3.6" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Human-Centric Teaching</h3>
            <p className="text-gray-600">Preserving the human element in education.</p>
          </div>
        </div>
      </section>

      {/* Investor CTA */}
      {/* <section className="py-20 bg-tangering text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Invest in the Future of Education</h2>
        <p className="mb-6 text-lg">TOTLE is redefining education with AI and human-driven learning. Be part of the future by investing today.</p>
        <Link to="/investor" className="inline-block bg-black py-3 px-6 rounded-lg hover:bg-gray-800 transition">
          Learn More
        </Link>
      </section> */}

      {/* Newsletter Signup */}
      {/* <section className="py-10 bg-gradient-to-r from-tangering to-orange-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">Sign up for our newsletter to get the latest updates on TOTLE’s features and job openings.</p>
        <form className="max-w-lg mx-auto flex">
          <input type="email" placeholder="Enter your email" className="w-full p-3 rounded-l-lg focus:outline-none" />
          <button className="bg-black text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition">
            Subscribe
          </button>
        </form>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} TOTLE. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
