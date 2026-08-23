import React from "react";
import SliderHome from "./SliderHome";
import FooterOffCode from "./FooterOffCode";

const HomeOffCode = () => {
  return (
    <div className="w-full relative bg-gray-700">
      <div className="w-full">
        <img
          src="/images/hero1.jpg"
          alt=""
          className="w-full h-screen object-cover"
        />
        <div className="w-full"></div>
      </div>
      <div className="w-full top-0 left-0 absolute">
        <div className="w-full max-w-6xl mx-auto bg-white/80 pt-4 ">
          <h3 className="text-gray-800 text-2xl text-center font-bold font-noto">
            Exploring the person behind the programmer.
          </h3>
        </div>
        <div className="w-full max-w-6xl bg-white/80 p-4 flex mx-auto">
          <div className="w-[300px] xl:w-[320px] overflow-hidden rounded-2xl m-4">
            <img src="images/akbar-6.JPG" alt="" className="w-full" />
          </div>
          <div className="w-[55%] font-noto p-2 text-justify flex flex-col justify-center">
            <p className="text-2xl xl:text-3xl my-2">
              Hey, red-eye warriors💻.
            </p>
            <p>
              <span className="text-red-900 font-bold"> Ahh, damn... </span>
              being a programmer and spending way too much time staring at a
              screen can really make your brain tired and bored. So, to keep my
              sanity intact, I escape the screen by traveling to different
              places and exploring new experiences. 🌍✈️
            </p>
            <p>
              This website is where I share those adventures and the other side
              of my life beyond coding.
            </p>
            <p>
              Welcome to my little escape from the screen. Enjoy the journey!
              🚀🌏
            </p>
          </div>
        </div>
        <div className="w-full max-w-6xl bg-gradient-to-b from-white/80 to-gray-700 p-4 mx-auto">
          <h3 className="text-gray-800 text-xl  font-bold font-noto text-center py-4">
            An adventurer and web developer embracing the downshifter lifestyle
          </h3>
          <p className="font-playwrite-no text-center">
            I traveled to several places to gain new experiences and meet new
            people. I once heard the saying that God was smiling when created
            Indonesia, and that is why I want to see and prove its beauty for
            myself.
          </p>
          <SliderHome />
        </div>
        <FooterOffCode />
      </div>
    </div>
  );
};

export default HomeOffCode;
