import React from "react";

const educationData = [
  {
    degree: "Diploma in Refrigeration & Air Conditioning Technology",
    institute: "Magura Polytechnic Institute, Bogura",
    year: "2016 – 2020",
    result: "CGPA: 3.50 / 4.00",
    details: `Learned practical and theoretical knowledge in refrigeration systems, HVAC, cooling circuits, electrical controls, installation, maintenance, and safety protocols. Participated in technical projects and hands-on lab training.`,
    status: "Completed", 
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institute: "Showaib Nagar Kamil Madrasah",
    year: "2012 – 2014",
    result: "GPA: 4.44 / 5.00",
    details: `Focused on science group studies including physics, chemistry, and mathematics. Built the foundation for engineering concepts and technical understanding.`,
    status: "Completed",
  },
];

const MyEducation = () => {
  return (
    <div id="education" className="px-4 md:px-10 py-16 bg-base-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 bg-success text-black py-4 rounded-xl">
          🎓 My Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="card w-full bg-black text-white shadow-xl hover:shadow-2xl transition duration-300 relative"
            >
              {/* Badge/Tag */}
              <span className="absolute top-2 right-2 text-xs bg-yellow-500 text-black py-1 px-2 rounded-lg">
                {edu.status}
              </span>

              <div className="card-body">
                <h3 className="card-title text-2xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <p className="text-lg font-medium text-yellow-200">
                  {edu.institute}
                </p>
                <div className="flex flex-col md:flex-row justify-between text-sm text-white/80 mt-1 mb-3">
                  <span>{edu.year}</span>
                  <span>{edu.result}</span>
                </div>
                <p className="text-white/90">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEducation;
