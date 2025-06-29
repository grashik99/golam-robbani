import React, { useState } from "react";

const HireMeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! I will get back to you soon.");
  };

  return (
    <div id="contact" className="px-4 md:px-10 py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left side (Form) */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Hire Me</h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter Name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter Email"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">
                  Cell Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter Phone Number"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter Message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Right side (Contact Info) */}
        <div className="bg-gray-200 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Info</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7 7 7-7" />
              </svg>
              <p className="text-lg">design@creativeRacer.net</p>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7 7 7-7" />
              </svg>
              <p className="text-lg">+012 345 678 902</p>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7 7 7-7" />
              </svg>
              <p className="text-lg">Wall Street, New York City, New York, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMeForm;
