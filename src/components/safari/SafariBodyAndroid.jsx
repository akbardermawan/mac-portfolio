import React from "react";
import Intro from "./component/intro/Intro";
import IntroAndroid from "./component/intro/IntroAndroid";
import PhotoAbout from "./component/about/PhotoAbout";
import TypeWriter from "./component/about/TypeWriter";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import SingleCard from "./component/skill/SingleCard";
import InfiniteScroll from "./component/skill/InfiniteScroll";
import ServiceCard from "./component/skill/ServiceCard";

import { services } from "../../common/constants/index.js";
import FlowChart from "./component/experience/FlowChart.jsx";
import IntroductionVideo from "./component/video/IntroductionVideo.jsx";
import Quotes from "./component/quotes/Quotes.jsx";
import Footer from "./component/Footer.jsx";

const SafariBodyAndroid = () => {
  return (
    <div className="w-full bg-black overflow-y-scroll">
      <div className="w-full h-screen">
        <IntroAndroid />
      </div>
      {/* About */}
      <div className="w-full max-w-4xl mx-auto mt-5 px-2">
        {/* teks dan efek hover */}
        <motion.div
          className="relative z-10 inline-block 
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-full after:h-[2px] after:bg-sky-400 
             after:scale-x-0 after:origin-left 
              after:transition-transform after:duration-300 
              hover:after:scale-x-100 zoom-in
              bottom-4 left-3 "
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-white text-4xl md:text-6xl font-bold">
            About <span className="font-bold text-sky-400">Me</span>
          </h2>
        </motion.div>

        <div className="flex w-full max-w-4xl mx-auto mt-5">
          <div className="w-[45%] relative">
            <PhotoAbout />
          </div>
          <motion.div
            className="w-[55%]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-white text-xl font-poppins font-bold">
              Akbar Dermawan
            </h2>

            <div className="mt-2 md:mt-4 mx-auto pr-3">
              <p className="text-sm md:text-xl md:first-letter:text-3xl md:pr-5 text-sky-300 mx-auto text-justify indent-8  first-letter:font-bold first-letter:mr-1">
                My website is pretty simple — nothing too fancy, but it works
                smoothly and is really easy for anyone to use 😄
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex mt-3">
                <a
                  href="/files/resume.pdf"
                  download
                  aria-label="Download Resume"
                >
                  <motion.button
                    whileHover={{ backgroundColor: "#0ea5e9" }} // Tailwind sky-600
                    transition={{ duration: 0.3 }}
                    className="flex w-[160px] lg:w-[180px] h-[25px] lg:h-[30px] rounded-full pl-2 lg:pl-4 py-2 border-2 border-sky-500 justify-between items-center text-black hover:text-white"
                  >
                    <span className="text-lg text-white">Download CV</span>
                    <div className="w-[25px] lg:w-[30px] h-[25px] lg:h-[30px] rounded-full bg-sky-400 flex justify-center items-center">
                      <FiDownload className="" />
                    </div>
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skill */}
      <div className="flex flex-col w-full max-w-4xl mx-auto mt-20 px-5">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className=" relative inline-block 
            after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:w-full after:h-[2px] after:bg-sky-400 
            after:scale-x-0 after:origin-left 
            after:transition-transform after:duration-300 
            hover:after:scale-x-100"
          >
            <h3 className="text-4xl text-white font-bold">SKILLS</h3>
          </div>
          <p className="text-xl text-gray-700 mb-5">WHAT I CAN DO</p>
        </motion.div>

        <div className="flex flex-col md:flex-row">
          <div className="w-[100%] md:w-[50%] p-1 flex items-center justify-center">
            <SingleCard />
          </div>
          <div className="w-[100%] md:w-[50%] grid grid-cols-1  gap-6 px-2 pt-2 md:pt-0">
            {services.map((service, index) => (
              <ServiceCard key={index} index={index} service={service} />
            ))}
          </div>
        </div>
        <div className="mt-5">
          <InfiniteScroll />
        </div>
      </div>

      {/* experience */}
      <div className="flex flex-col w-full max-w-4xl mx-auto mt-20 pl-5 items-center justify-center">
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className=" relative inline-block 
            after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:w-full after:h-[2px] after:bg-sky-400 
            after:scale-x-0 after:origin-left 
            after:transition-transform after:duration-300 
            hover:after:scale-x-100"
          >
            <h3 className="text-4xl text-white">Experience Work</h3>
          </div>
          <div className="about-subtext text-center px-4 max-w-xl mx-auto mt-2">
            <p className="text-white">Modern, Functional, and Responsive</p>
            <p className="text-gray-500">
              One sip of coffee is a stream of elegant code
            </p>
          </div>
        </motion.div>
        <div className="relativ z-10 mt-10">
          <FlowChart />
        </div>
      </div>

      {/* Introduction vidio  */}
      <div className="max-w-7xl w-full px-8 lg:px-12 mx-auto mb-5 mt-5 md:mt-20 lg:mt-30 zoom-in ">
        <IntroductionVideo />
      </div>
      {/* Quotes */}
      <div className="zoom-in max-w-7xl mx-auto mt-17 mb-15 lg:mb-20  px-8 md:mt-10 lg:mt-20 md:pt-5">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="relative inline-block 
            after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:w-full after:h-[2px] after:bg-sky-400 
            after:scale-x-0 after:origin-left 
            after:transition-transform after:duration-300 
            hover:after:scale-x-100"
          >
            <h3 className=" text-3xl xl:text-4xl font-bold text-white">
              QUOTES
            </h3>
          </div>
          <br />
          <span className="text-m  text-gray-600">Words that inspire me</span>
        </motion.div>
        <div>
          <Quotes />
        </div>
      </div>
      {/* Foter */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SafariBodyAndroid;
