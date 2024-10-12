import React from 'react';
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

const TestimonialsSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What People Are Saying</h2>
        <Slider {...settings}>
          {/* First Testimonial */}
          <div className="p-6 bg-gray-30 rounded-lg shadow-lg text-center">
            <img src="/images/avatar1.jpg" alt="User 1" className="rounded-full mx-auto mb-4" />
            <p className="text-lg text-gray-700">
              "TOTLE has transformed our learning experience. AI-driven assessments are a game-changer!"
            </p>
            <p className="mt-4 text-gray-500">- Sarah, Educator</p>
          </div>

          {/* Second Testimonial */}
          <div className="p-6 bg-gray-30 rounded-lg shadow-lg text-center">
            <img src="/images/avatar2.jpg" alt="User 2" className="rounded-full mx-auto mb-4" />
            <p className="text-lg text-gray-700">
              "Personalized learning at its best. My students love the tailored lessons."
            </p>
            <p className="mt-4 text-gray-500">- John, Teacher</p>
          </div>

          {/* Third Testimonial */}
          <div className="p-6 bg-gray-30 rounded-lg shadow-lg text-center">
            <img src="/images/avatar3.jpeg" alt="User 3" className="rounded-full mx-auto mb-4" />
            <p className="text-lg text-gray-700">
              "TOTLE provides an exceptional blend of human touch and technology."
            </p>
            <p className="mt-4 text-gray-500">- Emily, Parent</p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
