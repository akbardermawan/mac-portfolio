import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Junior Backend",
    date: "Juni 2020 - April 2021",
    company: "Tesla",
    description: [
      "Building web apps with React.js and related tech.",
      "Working with designers, PMs, and developers.",
    ],
    image: "/images/exp1.jpg",
  },
  {
    title: "Senior Frontend",
    date: "April 2021 - Agustus 2023",
    company: "Google",
    description: [
      "Building web apps with React.js and related tech.",
      "Working with designers, PMs, and developers.",
    ],
    image: "/images/exp2.jpg",
  },
  {
    title: "Senior Frontend",
    date: "April 2021 - Agustus 2023",
    company: "Microsoft",
    description: [
      "Building web apps with React.js and related tech.",
      "Working with designers, PMs, and developers.",
    ],
    image: "/images/exp3.jpg",
  },
];

const FlowChart = () => {
  const isFullscreen = useSelector((state) => state.safari.isFullscreen);

  return (
    <section className="py-5 px-5 md:px-20">
      <ul className="flex flex-col gap-10">
        {timelineData.map((item, i) => (
          <motion.li
            key={i}
            className="flex flex-col md:flex-row gap-5 bg-white/10 backdrop-blur-lg p-5 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            {/* TEXT */}
            <div className="flex-1 flex flex-col justify-center">
              <h5 className="text-sky-400 text-2xl md:text-3xl font-bold">
                {item.company}
              </h5>

              <h4 className="text-white text-lg mt-2">{item.title}</h4>

              <span className="text-gray-400 text-sm">{item.date}</span>

              <ul className="mt-4 text-gray-200 text-sm space-y-1">
                {item.description.map((desc, idx) => (
                  <li key={idx}>• {desc}</li>
                ))}
              </ul>
            </div>

            {/* IMAGE */}
            <div className="w-full md:w-[40%] h-[200px] md:h-[250px] overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default FlowChart;
