import React from "react";
import Intro from "./component/intro/Intro";
import TypeWriter from "./component/about/TypeWriter";
import PhotoAbout from "./component/about/PhotoAbout";
import { useSelector } from "react-redux";
import clsx from "clsx";

const SafariBody = () => {
  const isFullscreen = useSelector((state) => state.safari.isFullscreen);

  return (
    <div className="w-full h-full overflow-y-scroll scroll-smooth bg-black rounded px-2 pt-1 pb-10">
      <div className="w-full h-full">
        <Intro />
      </div>
      {/* About */}
      <div className="flex w-full max-w-4xl mx-auto mt-5">
        <div className="w-[45%] relative">
          <PhotoAbout />
        </div>
        <div className="w-[55%]">
          <TypeWriter text="Akbar Dermawan Mahbubillah" speed={80} pause={80} />
          <div className="mt-2 md:mt-4 mx-auto px-1">
            <p
              className={clsx(
                isFullscreen
                  ? "md:text-2xl "
                  : "md:text-xl md:first-letter:text-3xl md:pr-4",
                "text-sky-300 mx-auto text-justify indent-8  first-letter:font-bold first-letter:mr-1",
              )}
            >
              I am a website developer with an educational background in
              Agricultural Engineering from the University of Jember, Indonesia.
              Although my career path slightly deviates from my academic
              background, I chose to focus on enhancing my programming skills,
              particularly in web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariBody;
