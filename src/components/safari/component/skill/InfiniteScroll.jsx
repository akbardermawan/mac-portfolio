import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../../../../common/constants/index.js";

export const Scroll1 = () => {
  const MarqueeContent = () => (
    <div className="flex items-center">
      {technologies.map((tech, i) => (
        <div key={i} className="mx-6 w-8 h-8 flex-shrink-0">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden h-12 flex items-center">
      <motion.div
        className="flex whitespace-nowrap text-white text-xl font-semibold absolute top-1/2 -translate-y-1/2"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 280,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent /> {/* Duplikat isi agar animasi looping sempurna */}
      </motion.div>
    </div>
  );
};
export const Scroll2 = () => {
  const MarqueeContent = () => (
    <div className="flex items-center">
      {technologies.map((tech, i) => (
        <div key={i} className="mx-6 w-8 h-8 flex-shrink-0">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden h-12 flex items-center">
      <motion.div
        className="flex whitespace-nowrap text-white text-xl font-semibold absolute top-1/2 -translate-y-1/2"
        animate={{ x: ["-100%", "0%"] }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent /> {/* Duplikat isi agar animasi looping sempurna */}
      </motion.div>
    </div>
  );
};

export const Scroll3 = () => {
  const MarqueeContent = () => (
    <div className="flex items-center">
      {technologies.map((tech, i) => (
        <div key={i} className="mx-6 w-8 h-8 flex-shrink-0">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden  h-12 flex items-center">
      <motion.div
        className="flex whitespace-nowrap text-white text-xl font-semibold absolute top-1/2 -translate-y-1/2"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 200,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent /> {/* Duplikat isi agar animasi looping sempurna */}
      </motion.div>
    </div>
  );
};

const InfiniteScroll = () => {
  return (
    <div>
      <Scroll1 />
      <Scroll2 />
      <Scroll3 />
    </div>
  );
};

export default InfiniteScroll;
