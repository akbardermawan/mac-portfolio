import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ index, service }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <motion.div
        className="bg-transparent rounded-lg shadow-md p-4 mb-2 border border-solid border-sky-500"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 25px rgba(14,165,233,0.7)",
          borderColor: "#38bdf8",
        }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-4">
            <img
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 rounded object-cover"
            />
            <div>
              <h4 className="font-semibold text-xl text-white">
                {service.title}
              </h4>
            </div>
          </div>
        </div>
        {/* Skill list */}
        <div className="mt-2 flex flex-wrap gap-2 p-1">
          {service.skill?.map((s, i) => (
            <span
              key={i}
              className="bg-gray-900/50 text-white px-3 py-1 rounded-full text-sm font-medium 
             hover:bg-sky-800 hover:text-white 
             transition transform hover:scale-110"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
