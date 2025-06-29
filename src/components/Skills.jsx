import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-400 text-6xl" />,
    desc: "I can structure web pages using semantic HTML5 for SEO-friendly and accessible layouts.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-400 text-6xl" />,
    desc: "I create responsive, modern UI designs using Flexbox, Grid, animations, and transitions.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400 text-6xl" />,
    desc: "I build fast, clean UIs using utility classes with full design customization and responsiveness.",
  },
  {
    name: "React",
    icon: <FaReact className="text-sky-300 text-6xl" />,
    desc: "I build dynamic SPAs with reusable components, hooks, props, state, and router integration.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-400 text-6xl" />,
    desc: "I develop backend APIs using Express with routing, middleware, and RESTful architecture.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-300 text-6xl" />,
    desc: "I design and manage NoSQL databases with Mongoose for flexible data-driven applications.",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300 text-6xl" />,
    desc: "I build scalable REST APIs, handle routes and middleware, and connect Node with MongoDB.",
  },
];

const Skills = () => {
  return (
    <div className="py-12 my-12 px-4 md:px-10 max-w-7xl mx-auto bg-yellow-400 text-white rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        💻 My Tech Skills
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="card bg-neutral text-white shadow-xl p-6 items-center text-center space-y-4 h-80 transform transition duration-300 hover:scale-105 hover:bg-pink-500 hover:text-black">
              {skill.icon}
              <h3 className="text-xl font-bold">{skill.name}</h3>
              <p className="text-sm text-gray-300">{skill.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skills;
