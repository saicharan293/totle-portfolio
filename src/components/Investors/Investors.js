import React, { useEffect } from 'react';
import AOS from 'aos'; // for scroll animations
import 'aos/dist/aos.css';

const Investors = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section className="bg-gray-100 py-20 text-center">
      {/* Main Header */}
      <h2 className="text-4xl font-bold pt-10 mb-12" data-aos="fade-up">Invest in TOTLE</h2>

      {/* Investor Pitch Deck Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h3 className="text-3xl font-semibold mb-6 text-tangering" data-aos="fade-up">Investor Pitch Deck</h3>
        <p className="text-lg text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">
          Download our investor pitch deck to learn more about TOTLE’s mission, growth strategy, and how we plan to transform education with AI-driven solutions.
        </p>
        <a
          href="/documents/TOTLE-Investor-Pitch-Deck.pdf"
          className="inline-block bg-tangering text-white py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Download Pitch Deck
        </a>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-16 bg-gradient-to-r from-tangering to-orange-500 text-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-6" data-aos="fade-up">Market Opportunity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-2xl font-bold mb-4">The EdTech Revolution</h4>
              <p className="text-lg">
                The global education technology market is expected to grow at an exponential rate over the next decade. With an increasing demand for personalized, AI-powered learning experiences, TOTLE is positioned to capture a significant share of this market.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <h4 className="text-2xl font-bold mb-4">Scalability</h4>
              <p className="text-lg">
                TOTLE’s platform is designed to scale globally, with a flexible, AI-powered infrastructure capable of supporting millions of learners from diverse educational backgrounds and geographical regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financials & Projections Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-6 text-tangering" data-aos="fade-up">Financials & Projections</h3>
          <p className="text-lg text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">
            Our financial projections highlight the robust potential for revenue growth as we expand our platform and reach a larger audience. These figures represent our commitment to building a scalable, profitable business in the education sector.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Financials 1 */}
            <div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4 className="text-xl font-bold text-tangering mb-4">Projected Revenue</h4>
              <p className="text-gray-600">
                We project a 200% growth in annual revenue over the next 3 years, driven by increased adoption of AI-driven learning solutions in the education sector.
              </p>
            </div>

            {/* Financials 2 */}
            <div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h4 className="text-xl font-bold text-blue-500 mb-4">Global Expansion</h4>
              <p className="text-gray-600">
                With plans to expand into new markets, we aim to reach over 10 million users globally within the next five years.
              </p>
            </div>

            {/* Financials 3 */}
            <div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h4 className="text-xl font-bold text-green-500 mb-4">Profitability</h4>
              <p className="text-gray-600">
                By leveraging AI to reduce operational costs and improve educational outcomes, TOTLE is on track to achieve profitability within the next 24 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-tangering" data-aos="fade-up">Get in Touch</h3>
        <p className="text-lg text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">
          Interested in learning more about TOTLE and exploring potential investment opportunities? Reach out to us by filling in the form below or contacting us directly.
        </p>
        {/* Contact Form */}
        <form className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-tangering"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-tangering"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-tangering"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-tangering text-white py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </section>
    </section>
  );
};

export default Investors;
