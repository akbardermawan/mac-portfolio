import React from "react";
import RotatingText from "./RotatingText";

const IntroAndroid = () => {
  return (
    <div className=" w-full h-full pl-[10%]">
      <div className="w-full h-full ">
        <div className="w-full h-full flex  justify-center flex-col">
          <div>
            <h1 className="md:text-2xl text-lg  text-gray-300 font-bold font-poppins">
              AKBAR DERMAWAN MAHBUBILLAH
            </h1>
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroAndroid;
