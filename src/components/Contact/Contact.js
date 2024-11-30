import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Import toast components
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebookSquare } from 'react-icons/fa'; // Icons for social media


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

  const handleLinkClick = ()=>{
    window.scrollTo(0, 0);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Here, you can send the form data to an API endpoint (e.g., via fetch or axios)
    try {
      const response = await axios.post(
        "https://totle-portfolio-backend-mvc-2.onrender.com/feedback/contact",
        formData
      );
      console.log(response.data);
      // setSubmitted(true);
      toast.success("Message sent successfully! We will get back to you soon.");
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
      toast.error("Error sending the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 pt-20 text-center">
      <div className="container mx-auto">
        {/* <h2 className="text-4xl font-bold mb-4">Contact Us</h2> */}
        <div className="">
          <h2 className="text-4xl font-bold mb-2">Get in touch with us </h2 > 
          <p className="p-2">
           Connect with our customer support experts for assistance with any issues/questions you might have on : <strong> +91 9381281438 </strong> <br /> Or <br /> Drop us a mail below
          </p>
        </div>

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
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>

      <ToastContainer />
      
      <footer className="bg-gray-900 text-gray-400 py-8 px-8 mt-14 flex items-center justify-between gap-4">
        <div className="">
          <p>&copy; {new Date().getFullYear()} TOTLE. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <NavLink className="hover:text-white transition">Privacy Policy</NavLink>
            <NavLink to='/contact' onClick={handleLinkClick} className="hover:text-white transition">Contact Us</NavLink>
          </div>
        </div>
        <div>
          <h4 className='mb-2'>Follow us on</h4>
          <div className='flex gap-4 items-center justify-start'>
            <FaLinkedin />
            <FaTwitter />
            <FaInstagram />
            <FaFacebookSquare />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
