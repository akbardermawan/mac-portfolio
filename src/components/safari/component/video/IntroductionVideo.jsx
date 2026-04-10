import React from "react";

const IntroductionVideo = () => {
  return (
    <div>
      <div
        className="zoom-in relative inline-block 
            after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:w-full after:h-[2px] after:bg-sky-400 
            after:scale-x-0 after:origin-left 
            after:transition-transform after:duration-300 
            hover:after:scale-x-100 mb-5 md:mb-10 lg:mb-20 md:pl-2"
      >
        <h3 className="text-3xl md:text-4xl font-semibold text-white ">
          Introduction
        </h3>
      </div>

      <div className="max-w-3xl mx-auto bg-white/50 shadow-lg rounded-2xl overflow-hidden p-4 ">
        <div className="relative w-full pb-[56.25%]">
          {" "}
          {/* 16:9 Aspect Ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow"
            src="https://www.youtube.com/embed/QfR4-QYKXEM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default IntroductionVideo;
