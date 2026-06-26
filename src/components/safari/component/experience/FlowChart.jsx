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
    <div>
      {/* pc/laptop */}
      <section className="py-5 pr-2 hidden md:flex">
        {/* fullscrenn */}
        {isFullscreen ? (
          <ul>
            {timelineData.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="relative"
              >
                {/* Garis vertikal */}
                <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-black/5 md:bg-gray-300 h-[110%] md:h-200p top-0 z-0"></div>
                {/* Garis horizontal */}
                <div
                  className={`hidden md:block absolute top-1/2 w-10 lg:w-14 h-1 bg-gray-300 left-1/2 transform -translate-y-1/2 ${
                    i % 2 === 0 ? "" : "-translate-x-full"
                  }`}
                />
                {/* Box konten */}
                <div
                  className={`hidden md:flex md:flex-col bg-white border border-gray-300 p-1 rounded-lg shadow-lg w-full md:w-1/2 md:min-h-[350px] lg:min-h-[450px] mt-4 md:mt-6 md:mb-12 z-10 transform md:translate-y-12 lg:translate-y-12 ${
                    i % 2 !== 0
                      ? " md:mr-auto md:ml-111"
                      : " md:ml-auto md:mr-125 lg:mr-150 transform -translate-x-2"
                  }`}
                >
                  <div className="w-full md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 text-center mt-1">
                    {item.company}
                  </h3>
                </div>

                <div
                  className={`bg-white border border-gray-300 p-6 rounded-lg shadow-lg w-full md:w-2/5 mt-4 md:mt-6 md:mb-12 z-10 transform md:-translate-y-60 lg:-translate-y-72  ${
                    i % 2 !== 0
                      ? "md:mr-auto translate-x-5"
                      : "md:ml-auto -translate-x-5"
                  }`}
                >
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-blue-800">
                      {item.title}
                    </h3>
                    <span className="text-sm text-black">{item.company}</span>
                    <br />
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        ) : (
          <ul>
            {timelineData.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="relative"
              >
                {/* Garis vertikal */}
                <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-black/5 md:bg-gray-300 h-[110%] md:h-200p top-0 z-0"></div>
                {/* Garis horizontal */}
                <div
                  className={`hidden md:block absolute top-1/2 w-10 lg:w-14 h-1 bg-gray-300 left-1/2 transform -translate-y-1/2 ${
                    i % 2 === 0 ? "" : "-translate-x-full"
                  }`}
                />
                {/* Box konten */}
                <div
                  className={`hidden md:flex md:flex-col bg-white border border-gray-300 p-1 rounded-lg shadow-lg w-full md:w-1/2 md:min-h-[350px]  mt-4 md:mt-6 md:mb-12 z-10 transform md:translate-y-12 lg:translate-y-12 ${
                    i % 2 !== 0
                      ? " md:mr-auto md:ml-95"
                      : " md:ml-auto md:mr-125 lg:mr-150 transform -translate-x-2"
                  }`}
                >
                  <div className="w-full md:h-[300px] overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 text-center mt-1">
                    {item.company}
                  </h3>
                </div>

                <div
                  className={`bg-white border border-gray-300 p-6 rounded-lg shadow-lg w-full md:w-2/5 mt-4 md:mt-6 md:mb-12 z-10 transform md:-translate-y-60 lg:-translate-y-72  ${
                    i % 2 !== 0
                      ? "md:mr-auto translate-x-5"
                      : "md:ml-auto -translate-x-5"
                  }`}
                >
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-blue-800">
                      {item.title}
                    </h3>
                    <span className="text-sm text-black">{item.company}</span>
                    <br />
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </section>
      {/* android */}
      <section className=" md:px-20 md:hidden">
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
    </div>
  );
};

export default FlowChart;
