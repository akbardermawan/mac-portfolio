import React from "react";
import RotatingText from "./RotatingText";
import DecryptedText from "./DecryptedText";
import { motion } from "framer-motion";

const IntroAndroid = () => {
  return (
    <div className=" w-full h-full pl-[10%] overflow-x-hidden">
      <div className="w-full h-full ">
        <div className="w-full h-full flex  justify-center flex-col">
          <div>
            <DecryptedText
              text="Akbar Dermawan"
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
            <p className="md:text-6xl text-white  font-poppins text-4xl">
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

export default IntroAndroid;
