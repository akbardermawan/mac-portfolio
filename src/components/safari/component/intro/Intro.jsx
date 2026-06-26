import React from "react";
import RotatingText from "./RotatingText";
import { useSelector } from "react-redux";
import clsx from "clsx";
import DecryptedText from "./DecryptedText";
import { motion } from "framer-motion";

const Intro = () => {
  const isFullscreen = useSelector((state) => state.safari.isFullscreen);
  return (
    <div className="relative w-full h-full pl-[10%]">
      <div className="w-full h-full z-0 absolute ">
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <h1
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
            }}
            className="relative z-10 text-6xl md:text-7xl xl:text-9xl 
             font-extrabold text-transparent bg-clip-text 
             bg-gradient-to-b from-gray-400/80 xl:from-gray-400/5 to-gray-800/10 
             drop-shadow-[0_0_10px_rgba(56,189,248,0.5)] tracking-widest -right-75"
          >
            アクバル
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute bottom-24 text-gray-600/40 text-lg tracking-widest"
          >
            Welcome to My Portfolio
          </motion.p>
        </div>
      </div>
      <div className="w-full h-full z-10 absolute">
        <div className="w-full h-full flex  justify-center flex-col">
          <div>
            <DecryptedText
              text="AKBAR DERMAWAN MAHBUBILLAH"
              animateOn="view"
              revealDirection="center"
              className="text-lg md:text-2xl text-gray-300 font-bold"
              encryptedClassName="text-lg md:text-2xl text-gray-300"
              parentClassName="tracking-wider"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p
              className={clsx(
                isFullscreen ? "md:text-6xl xl:text-8xl" : "md:text-6xl",
                "text-white  font-poppins text-4xl",
              )}
            >
              Web Developer
            </p>
            <h2>
              <RotatingText
                texts={["+ Full Stact", "+ Backend ", "+ Frontend"]}
                mainClassName="text-2xl md:text-4xl xl:text-6xl px-2 sm:px-2 md:px-3 text-sky-400 overflow-hidden   rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
