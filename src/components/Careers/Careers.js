import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // Import toast components
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { FaLinkedin, FaTwitter } from "react-icons/fa"; // Icons for social media

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    resume: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const navigate = useNavigate();
  const handleLinkClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  const jobList = [
    {
      id: 1,
      title: "Machine Learning Engineer",
      location: "Remote",
      type: "Part-time/Intern",
      description:
        "Work on machine learning models and AI-driven features to deliver personalized learning experiences.",
    },
    {
      id: 2,
      title: "UX Designer",
      location: "Remote",
      type: "Part-time/Intern",
      description:
        "Research, design and implement all user experiences of the product and service.",
    },
    {
      id: 3,
      title: "Data Analyst",
      location: "Remote",
      type: "Part-time/Intern",
      description:
        "Develop, implement and maintain leading-edge anlytics systems to take informed decisions.",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Ensure the file is a PDF
    if (file && file.type === "application/pdf") {
      setFormData({
        ...formData,
        resume: file,
      });
    } else {
      // Show error if the file is not a PDF
      toast.error("Please upload a PDF file.");
      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("reason", formData.reason);
    data.append("resume", formData.resume);
    try {
      const response = await axios.post(
        // "http://localhost:4000/career/apply",
        "https://totle-portfolio-backend-mvc-2.onrender.com/career/apply",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      setSubmitted(true);
      toast.success("Application has been submitted successfully!");
      setFormData({
        name: "",
        email: "",
        reason: "",
        resume: null,
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setTimeout(() => {
        setSubmitted(false);
      }, 1000);
    } catch (error) {
      console.error("Error submitting the form", error);
      toast.error("Error submitting the form, please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="bg-gray-100 pt-20 text-center">
      {/* Main Header */}
      <h2 className="text-4xl font-bold pt-10 mb-12" data-aos="fade-up">
        Join Our Team
      </h2>

      {/* Open Positions Section */}
      <section className="max-w-6xl mx-auto mb-16 ">
        <h3
          className="text-3xl font-semibold mb-6 text-tangering"
          data-aos="fade-up"
        >
          Open Positions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 px-6">
          {jobList.map((job) => (
            <div
              key={job.id}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={job.id * 100}
            >
              <h3 className="text-xl font-bold text-tangering mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Location:</strong> {job.location} <br />
                <strong>Type:</strong> {job.type}
              </p>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <a href="#apply" className="text-blue-500 hover:underline">
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Work at TOTLE Section */}
      <section className="py-16 bg-gradient-to-r from-tangering to-orange-500 text-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-6" data-aos="fade-up">
            Why Work at TOTLE?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-2xl font-bold mb-4">Mission-Driven Work</h4>
              <p className="text-lg">
                At TOTLE, you will be part of a mission to democratize
                education. By joining us, you’ll help shape the future of
                AI-powered learning, making education accessible and
                personalized for everyone.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <h4 className="text-2xl font-bold mb-4">Flexible, Remote Work</h4>
              <p className="text-lg">
                TOTLE values work-life balance and offers fully remote
                positions. Work from anywhere in the world while contributing to
                an impactful mission.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <h4 className="text-2xl font-bold mb-4">
                Cutting-Edge Technology
              </h4>
              <p className="text-lg">
                Work with the latest advancements in AI, machine learning, and
                educational technology. TOTLE encourages innovation and offers
                opportunities to work on challenging, forward-thinking projects.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="800">
              <h4 className="text-2xl font-bold mb-4">Collaborative Team</h4>
              <p className="text-lg">
                Join a diverse, inclusive, and highly collaborative team of
                professionals passionate about education and technology. At
                TOTLE, we believe in growth, teamwork, and mutual support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="pt-20 pb-6 bg-white text-center" id="apply">
        <h3
          className="text-3xl font-semibold mb-6 text-tangering"
          data-aos="fade-up"
        >
          Ready to Apply?
        </h3>
        <p
          className="text-lg text-gray-600 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          If you’re ready to join a forward-thinking, mission-driven company,
          we’d love to hear from you! Fill out the form below and upload your
          resume.
        </p>
        {/* Form */}
        {submitted ? (
          <div className="bg-green-500 text-white p-4 rounded-md">
            <p>Your application has been sent successfully!</p>
          </div>
        ) : null}
        <form
          className="max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-tangering"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-tangering"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="file"
              name="resume"
              onChange={handleFileChange}
              ref={fileInputRef}
              accept="application/pdf"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-tangering"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-tangering text-white py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </section>
      <ToastContainer />

      <footer className="bg-gray-900 text-gray-400 py-8 px-8 mt-14 flex items-center justify-between gap-4">
        <div className="">
          <p>&copy; {new Date().getFullYear()} TOTLE. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <NavLink className="hover:text-white transition">
              Privacy Policy
            </NavLink>
            <NavLink
              to="/contact"
              onClick={handleLinkClick}
              className="hover:text-white transition"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
        <div>
          <h4 className="mb-2">Follow us on</h4>
          <div className="flex gap-4 items-center justify-start">
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Careers;
