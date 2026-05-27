import { useSelector, useDispatch } from "react-redux";
import { closeWindow, focusWindow } from "../../common/store/state/windowSlice";
import { useState, useEffect } from "react";
import FinderBody from "./FinderBody";
import { CiSearch } from "react-icons/ci";
import { CiWifiOn } from "react-icons/ci";
import { FaBatteryHalf } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import dayjs from "dayjs";
import FinderBodyAndroid from "./FinderBodyAndroid";

const Finder = () => {
  const win = useSelector((state) => state.window.windows.finder);
  const dispatch = useDispatch();

  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // 🆕 NEW STATE
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleMouseDown = (e) => {
    // ❗ kalau fullscreen, jangan bisa drag
    if (isFullscreen) return;

    dispatch(focusWindow("finder"));

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
      {/* Pc or laptop */}

      <div
        style={{
          zIndex: win.zIndex,
          left: isFullscreen ? 0 : position.x - 5,
          top: isFullscreen ? 0 : position.y,
          width: isFullscreen ? "100vw" : "34rem",
          height: isFullscreen ? "100vh" : "auto",
        }}
        className="absolute w-96 bg-white rounded-xl shadow-lg overflow-hidden hidden md:flex md:flex-col"
      >
        {/* HEADER */}
        <div
          onMouseDown={handleMouseDown}
          className="flex justify-between p-2 bg-gray-200 rounded-t-xl"
        >
          <div className="flex gap-2">
            {/* 🔴 CLOSE */}
            <button
              onClick={() => dispatch(closeWindow("finder"))}
              className="cursor-pointer"
            >
              🔴
            </button>
            {/* 🟡 MINIMIZE */}
            <button onClick={() => setIsMinimized(!isMinimized)}>🟡</button>

            {/* 🟢 FULLSCREEN */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="cursor-pointer"
            >
              🟢
            </button>
          </div>
          <div className="mr-2 mt-1">
            <CiSearch className="w-5 h-5" />
          </div>
        </div>

        {/* CONTENT */}
        <div
          onMouseDown={() => dispatch(focusWindow("finder"))}
          className="w-full h-full"
        >
          <FinderBody />
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
        <div className="w-full border border-t-white border-x-white border-b-gray-200">
          <div className="flex p-5 justify-between items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => dispatch(closeWindow("finder"))}
            >
              <IoMdArrowBack className="w-5 h-5 mr-3" />
              <span className="font-georama text-blue-500">Go Back</span>
            </div>
            <div>
              <CiSearch className="w-6 h-6 mr-5" />
            </div>
          </div>
        </div>
        {/* CONTENT */}
        <div>
          <FinderBodyAndroid />
        </div>
      </div>
    </div>
  );
};

export default Finder;
