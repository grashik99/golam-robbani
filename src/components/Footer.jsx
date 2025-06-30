import React from "react";
import Links from "./Links";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Site name or logo */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">🌱 EcoPortfolio</h3>
          <p className="text-sm text-gray-400">
            Showcasing sustainable and creative full-stack projects built with love and purpose.
          </p>
        </div>

        {/* Middle: Navigation */}
        <div className="text-center">
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <Links/>
          </ul>
        </div>

        {/* Right: Social icons */}
        <div className="text-center md:text-right">
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="flex justify-center md:justify-end gap-4 text-lg">
            <a href="https://github.com/grashik99" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              🐙 GitHub
            </a>
            <a href="https://www.linkedin.com/in/golamrobbani55/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              💼 LinkedIn
            </a>
            <a href="mailto:grashik99@gmail.com" className="hover:text-gray-300">
              📧 Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Golam Robbani. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
