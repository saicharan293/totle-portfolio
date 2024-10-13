import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Here, you can send the form data to an API endpoint (e.g., via fetch or axios)
    try {
      const response = await axios.post(
        "https://totle-portfolio-backend-mvc.onrender.com/feedback/contact",
        formData
      );
      console.log(response.data);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting the form", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 pt-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>

        {/* Display success message after form submission */}
        {submitted ? (
          <div className="bg-green-500 text-white p-4 rounded-md">
            <p>We received your message, Our team will get in touch with you shortly!</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white p-6 pb-3 mb-8 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-left text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-left text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="message"
                className="block text-left text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 rounded-lg resize-none overflow-y-auto border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-tangering text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}
      </div>
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} TOTLE. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <NavLink className="hover:text-white transition">Privacy Policy</NavLink>
          <NavLink className="hover:text-white transition">Contact Us</NavLink>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
