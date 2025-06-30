import React from "react";

const trainingData = [
  {
    title: "Advanced Web Development Bootcamp",
    organization: "Programming Hero",
    date: "January 2025",
    description: "Developed advanced skills in full-stack web development, including working with React, Node.js, MongoDB, and Express.",
    certificate: "In Progress",
  },
];

const MyTraining = () => {
  return (
    <div id="training" className="px-4 md:px-10 py-16 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 bg-success text-black py-4 rounded-xl">
          🏅 My Training & Certifications
        </h2>

        <div className="space-y-8">
          {trainingData.map((training, index) => (
            <div
              key={index}
              className="card w-full bg-black text-white shadow-xl hover:shadow-2xl transition duration-300 relative"
            >
              {/* Badge/Tag */}
              <span className="absolute top-2 right-2 text-xs bg-yellow-500 text-black py-1 px-2 rounded-lg">
                {training.certificate}
              </span>

              <div className="card-body">
                <h3 className="card-title text-2xl font-semibold text-white">
                  {training.title}
                </h3>
                <p className="text-lg font-medium text-yellow-200">
                  {training.organization}
                </p>
                <div className="flex flex-col md:flex-row justify-between text-sm text-white/80 mt-1 mb-3">
                  <span>{training.date}</span>
                </div>
                <p className="text-white/90">{training.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTraining;
