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
  // console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // console.log("Form submitted:", formData);
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
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-700"
                >
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
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-700"
                >
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
                <label
                  htmlFor="phone"
                  className="block text-lg font-semibold text-gray-700"
                >
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
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-gray-700"
                >
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
    
    {/* Gmail - opens Gmail compose */}
    <a
      href="mailto:grashik99@gmail.com"
      className="flex items-center hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg className="w-6 h-6 text-red-600 mr-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 13.065L2 6.5V18a2 2 0 002 2h16a2 2 0 002-2V6.5l-10 6.565zM12 11L2 4h20L12 11z" />
      </svg>
      <p className="text-lg">grashik99@gmail.com</p>
    </a>

    {/* Phone - click to call */}
    <a
      href="tel:+8801788002949"
      className="flex items-center hover:underline"
    >
      <svg className="w-6 h-6 text-green-600 mr-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 010 1.414L8.414 9.414a16.02 16.02 0 006.172 6.172l2.293-2.293a1 1 0 011.414 0l2.414 2.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1c-9.389 0-17-7.611-17-17V5z" />
      </svg>
      <p className="text-lg">+880 17880 02949</p>
    </a>

    {/* WhatsApp - opens chat */}
    <a
      href="https://wa.me/8801788002949"
      className="flex items-center hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg className="w-6 h-6 text-green-500 mr-4" fill="currentColor" viewBox="0 0 32 32">
        <path d="M16.003 3C9.374 3 4 8.374 4 15.003c0 2.65.853 5.104 2.299 7.121L4 29l6.996-2.298A12.947 12.947 0 0016.003 27C22.63 27 28 21.63 28 15.003 28 8.374 22.63 3 16.003 3zm0 22.002c-1.844 0-3.562-.497-5.053-1.356l-.361-.209-4.148 1.364 1.371-4.031-.237-.374a10.963 10.963 0 01-1.655-5.393c0-6.075 4.946-11.021 11.022-11.021S27.025 8.928 27.025 15.003c0 6.075-4.946 11.021-11.022 11.021zm5.305-8.402c-.292-.146-1.724-.851-1.992-.948-.267-.097-.462-.145-.656.147s-.751.948-.921 1.145c-.169.195-.338.219-.63.073-.292-.147-1.234-.454-2.352-1.449-.87-.775-1.457-1.733-1.627-2.025-.169-.292-.018-.45.128-.595.132-.132.292-.34.438-.51.146-.17.195-.292.292-.487.097-.195.048-.365-.024-.51-.073-.146-.656-1.585-.899-2.168-.237-.568-.478-.492-.656-.502l-.561-.01a1.09 1.09 0 00-.79.365c-.267.292-1.01.985-1.01 2.4 0 1.414 1.034 2.781 1.177 2.97.145.195 2.033 3.098 4.928 4.341.688.296 1.223.472 1.64.603.689.219 1.315.188 1.812.114.553-.082 1.724-.703 1.969-1.38.243-.677.243-1.257.17-1.38-.072-.121-.266-.193-.558-.34z"/>
      </svg>
      <p className="text-lg">Chat on WhatsApp</p>
    </a>

  </div>
</div>

      </div>
    </div>
  );
};

export default HireMeForm;
