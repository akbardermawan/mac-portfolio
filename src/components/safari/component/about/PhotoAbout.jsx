import { useSelector } from "react-redux";
import clsx from "clsx";

const PhotoAbout = () => {
  const isFullscreen = useSelector((state) => state.safari.isFullscreen);
  return (
    <div>
      {/* pc */}
      <div className="hidden w-full h-full md:flex justify-center items-center ">
        <div className="w-full h-full flex justify-center items-center relative">
          <div className="w-[65%] rounded-xl overflow-hidden mt-10 group">
            <img
              src="images/akbar.JPG"
              alt="Lanyard Placeholder"
              className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <div
            className={clsx(
              isFullscreen ? "-left-18 md:-left-20 xl:-left-26" : "-left-18",
              "absolute z-10  bottom-26",
            )}
          >
            <div className="rotate-270">
              <p
                className={clsx(
                  isFullscreen ? "text-6xl ml-5 xl:ml-10" : "text-5xl",
                  " text-white font-bold drop-shadow-lg ",
                )}
              >
                アクバル
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* android */}
      <div className="flex w-full h-full md:hidden justify-center items-center ">
        <div className="w-full h-full flex justify-center items-center relative">
          <div className="w-[80%] rounded-xl overflow-hidden mt-5 group">
            <img
              src="images/akbar.JPG"
              alt="Lanyard Placeholder"
              className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className="-left-18 absolute z-10  bottom-26">
            <div className="rotate-270">
              <p className="text-5xl text-white font-bold drop-shadow-lg ">
                アクバル
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoAbout;
