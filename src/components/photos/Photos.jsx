import { useSelector, useDispatch } from "react-redux";
import { closeWindow, focusWindow } from "../../common/store/state/windowSlice";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import PhotosBody from "./PhotosBody";

import { CiWifiOn } from "react-icons/ci";
import { FaBatteryHalf } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import dayjs from "dayjs";
import PhotosBodyAndroid from "./PhotosBodyAndroid";

const Photos = () => {
  const win = useSelector((state) => state.window.windows.photos);
  const dispatch = useDispatch();
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    dispatch(focusWindow("photos"));

    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // 🔥 FIX: global listener
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  if (!win.isOpen) return null; // ⛔ penting!
  return (
    <div>
      {/* PC or laptop */}
      <div
        style={{
          zIndex: win.zIndex,
          left: position.x + 20,
          top: position.y + 20,
        }}
        className="hidden md:flex md:flex-col absolute w-[550px] bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* HEADER */}
        <div
          onMouseDown={handleMouseDown}
          className="flex justify-between items-center p-2 bg-gray-200 cursor-move"
        >
          <div className="flex gap-2">
            {/* 🔴 CLOSE */}
            <button
              onClick={() => dispatch(closeWindow("photos"))}
              className="cursor-pointer"
            >
              🔴
            </button>
            {/* 🟡 MINIMIZE */}
            <button>🟡</button>

            {/* 🟢 FULLSCREEN */}
            <button>🟢</button>
          </div>
          <div className=" mr-3 mt-1">
            <CiSearch className="w-5 h-5" />
          </div>
        </div>

        {/* CONTENT */}
        <div onMouseDown={() => dispatch(focusWindow("photos"))} className="">
          <PhotosBody />
        </div>
      </div>

      {/* Android or hp */}
      <div
        style={{
          zIndex: win.zIndex,
        }}
        className=" absolute top-0 left-0 w-full h-screen bg-white  overflow-hidden flex flex-col md:hidden"
      >
        {/* HEADER */}
        <div className="w-full">
          <div className="flex p-5 justify-between items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => dispatch(closeWindow("photos"))}
            >
              <IoMdArrowBack className="w-5 h-5 mr-3" />
              <span className="font-georama text-blue-500">Go Back</span>
            </div>
            <div className="w-[50%]">
              <h3 className="text-xl text-gray-500 font-georama font-bold transform -translate-x-1/5">
                Galery
              </h3>
            </div>
          </div>
        </div>
        {/* CONTENT */}
        <div>
          <PhotosBodyAndroid />
        </div>
      </div>
    </div>
  );
};

export default Photos;
