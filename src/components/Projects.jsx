import React from "react";

const projects = [
  {
    name: "EcoRoots – Sustainable Marketplace",
    image: "https://i.ibb.co/smMJvM6/ecoroots.png", // Replace with your image URL
    liveLink: "https://eco-roots-ed2f9.web.app/",
    tech: ["React", "Tailwind", "Firebase", "DaisyUI"],
    details:
      "EcoRoots is an eco-friendly e-commerce site that promotes sustainable products. Users can browse, register, and buy items securely.",
  },
  {
    name: "Take Your Car – Car Selling Platform",
    image: "https://i.ibb.co/yNmjbFZ/takeyourcar.png", // Replace with your image URL
    liveLink: "https://take-your-car.web.app/",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    details:
      "Take Your Car is a full-stack application for car enthusiasts to post, search, and buy used cars. Includes authentication and dashboard.",
  },
];

const Projects = () => {
  return (
    <div className="px-4 md:px-10 py-16 bg-base-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-black text-white py-4 rounded-xl">
          🚀 Project Showcase
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 bg-white shadow-md rounded-lg p-6 hover:shadow-2xl transition duration-300"
            >
              {/* Left: Image */}
              <div className="w-full md:w-1/2 relative group cursor-pointer">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-md object-cover"
                />
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"
                >
                  🔗 Live Preview
                </a>
              </div>

              {/* Right: Details */}
              <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-800">{project.name}</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="bg-black text-white text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{project.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
