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
        <section className="w-full px-4 max-w-6xl mx-auto bg-white/80 pt-2">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-4 rounded-2xl">
              <span className="inline-block mb-1 text-sm font-semibold tracking-[0.2em] uppercase text-red-900  p-1">
                Beyond Coding
              </span>
              <h3 className="font-noto text-2xl font-bold text-black xl:hidden">
                Exploring the person behind the programmer
              </h3>
              <div className="w-16 h-1 bg-red-900 rounded-full mx-auto mt-2" />
            </div>
            {/* Content Card */}
            <div className=" rounded-3xl overflow-hidden border border-gray shadow-sm">
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="w-full md:w-[40%] md:px-2 py-2 flex items-center justify-center">
                  <div className="h-[360px] overflow-hidden rounded-2xl">
                    <img
                      src="images/dekstop/akbar-14.jpg"
                      alt="Akbar traveling"
                      className=" w-full h-full object-cover transition-transform duration-700 hover:scale-105 "
                    />
                  </div>
                </div>
                {/* Text */}
                <div className="w-full md:w-[58%] px-6 pb-6 md:py-5 md:pr-12 flex flex-col justify-center font-noto">
                  <p className="text-2xl font-semibold text-gray-900 mb-4">
                    Hey, red-eye warriors 💻
                  </p>
                  <div className="space-y-4 text-gray-600 leading-7 text-base md:text-lg">
                    <p>
                      <span className="text-red-900 font-bold">
                        Ahh, damn...
                      </span>
                      being a programmer and spending way too much time staring
                      at a screen can really make your brain tired and bored.
                    </p>
                    <p>
                      So, to keep my sanity intact, I escape the screen by
                      traveling to different places and exploring new
                      experiences. 🌍✈️
                    </p>
                    <p>
                      This website is where I share those adventures and the
                      other side of my life beyond coding.
                    </p>
                    <p>
                      Welcome to my little escape from the screen.
                      <span className="font-semibold text-gray-800">
                        Enjoy the journey!
                      </span>
                    </p>
                  </div>
                  {/* Small decoration */}
                  <div className="flex items-center gap-3 mt-5">
                    <div className="w-10 h-[2px] bg-red-900" />
                    <span className="text-sm text-gray-400 tracking-wider">
                      Travel · Life · Stories
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
