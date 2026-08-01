import React, { useState, useRef, useEffect } from "react";
import { navVisualStudio } from "../../../common/constants";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  focusWindow,
  toggleWindow,
  closeWindow,
} from "../../../common/store/state/windowSlice";
import {
  setFullscreen,
  toggleFullscreen,
} from "../../../common/store/state/visualStudioSlice";

// react icon
import { IoMdClose } from "react-icons/io";
import { SiCodesandbox } from "react-icons/si";
import { FaRegWindowMinimize } from "react-icons/fa";

import { CgRemote } from "react-icons/cg";
import { FaCodeBranch } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiWarning } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import ContainVisualStudio from "./component/ContainVisualStudio";

const VisualStudioCode = () => {
  // DESKTOP ICON POSITION
  const [position, setPosition] = useState({
    x: 50,
    y: 500,
  });
  // PROPERTIES WINDOW POSITION
  const [positionProperties, setPositionProperties] = useState({
    x: 20,
    y: 50,
  });

  // ICON DRAG
  const draggingIconRef = useRef(false);
  const iconOffsetRef = useRef({
    x: 0,
    y: 0,
  });

  // WINDOW DRAG
  const draggingWindowRef = useRef(false);
  const windowOffsetRef = useRef({
    x: 0,
    y: 0,
  });

  const movedRef = useRef(false);

  // REDUX
  const win = useSelector((state) => state.window.windows.visualstudio);
  //Window Fullscrenn -> state redux
  const isFullscreen = useSelector((state) => state.visualStudio.isFullscreen);
  const dispatch = useDispatch();

  // =========================
  // ICON DRAG
  // =========================
  const handleIconMouseDown = (e) => {
    if (e.button !== 0) return;

    e.preventDefault();

    draggingIconRef.current = true;

    movedRef.current = false;

    iconOffsetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };
  // =========================
  // WINDOW DRAG
  // =========================
  const handleWindowMouseDown = (e) => {
    // ❗ kalau fullscreen, jangan bisa drag
    if (isFullscreen) return;

    draggingWindowRef.current = true;

    windowOffsetRef.current = {
      x: e.clientX - positionProperties.x,
      y: e.clientY - positionProperties.y,
    };

    dispatch(focusWindow("visualstudio"));
  };

  // =========================
  // GLOBAL MOUSE MOVE
  // =========================
  const handleMouseMove = (e) => {
    // ICON DRAG
    if (draggingIconRef.current) {
      movedRef.current = true;

      setPosition({
        x: e.clientX - iconOffsetRef.current.x,
        y: e.clientY - iconOffsetRef.current.y,
      });
    }

    // WINDOW DRAG
    if (draggingWindowRef.current) {
      setPositionProperties({
        x: e.clientX - windowOffsetRef.current.x,
        y: e.clientY - windowOffsetRef.current.y,
      });
    }
  };
  // =========================
  // MOUSE UP
  // =========================
  const handleMouseUp = () => {
    draggingIconRef.current = false;

    draggingWindowRef.current = false;
  };

  // =========================
  // GLOBAL EVENTS
  // =========================
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // =========================
  // OPEN Visual Studio
  // =========================
  const handleDoubleClick = () => {
    dispatch(toggleWindow("visualstudio"));
  };

  return (
    <div>
      {/* icon */}
      <div
        style={{
          position: "absolute",
          zIndex: 1000,
          left: position.x,
          top: position.y,
        }}
      >
        <div
          onMouseDown={handleIconMouseDown}
          onDoubleClick={handleDoubleClick}
          className="hidden md:flex flex-col items-center cursor-move select-none"
        >
          <img
            src="./images/visual_studio.png"
            alt=""
            draggable={false}
            className="cursor-pointer hover:scale-110 active:scale-95 w-17"
          />
          <p className="text-white font-semibold">Visual St...</p>
        </div>
      </div>

      {/* visual studio contain */}
      {/* PROPERTIES WINDOW */}
      {win?.isOpen && (
        <div
          style={{
            position: "absolute",
            zIndex: win.zIndex,
            left: isFullscreen ? 0 : positionProperties.x,
            top: isFullscreen ? 0 : positionProperties.y,
            width: isFullscreen ? "100vw" : "58rem",
            height: isFullscreen ? "100vh" : "46rem",
          }}
          onMouseDown={() => dispatch(focusWindow("visualstudio"))}
          className="relative hidden md:flex md:flex-col bg-black overflow-hidden"
        >
          {/* Header */}
          <div
            onMouseDown={handleWindowMouseDown}
            className="w-full h-[2.5rem] border border-b-gray-700 flex justify-between items-center py-2 px-1  cursor-move"
          >
            <div className="flex gap-1 h-12 items-center">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="./images/visual_studio.png"
                  alt="visual studio"
                  className="w-6"
                />
              </div>
              <div className="w-10 h-10 flex items-center ">
                <ul className="text-gray-300 flex gap-2">
                  {navVisualStudio.map((item, index) => (
                    <li
                      key={index}
                      className="rounded-md hover:bg-gray-900 p-1 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center items-center rounded-xl p-1 w-48 h-8 my-2 transform translate-x-84 border border-gray-600">
                <input
                  type="text"
                  className=" text-gray-200 rounded-xl p-1 w-64 h-6 mx-4"
                />
              </div>
            </div>
            <div className="flex ">
              <div className="text-white w-10 h-10 flex items-center">
                {isFullscreen ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <button
                      onClick={() => dispatch(toggleFullscreen())}
                      className="cursor-pointer"
                    >
                      <FaRegWindowMinimize className="transform -translate-y-1" />
                    </button>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <button
                      onClick={() => dispatch(toggleFullscreen())}
                      className="cursor-pointer"
                    >
                      <SiCodesandbox />
                    </button>
                  </div>
                )}
              </div>
              <div className="text-white w-10 h-10 flex items-center justify-center">
                <button
                  onClick={() => dispatch(closeWindow("visualstudio"))}
                  className="cursor-pointer"
                >
                  <IoMdClose className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Contain */}
          <ContainVisualStudio />

          {/* footer */}
          <div className="absolute w-full h-8 bottom-0 right-0 border border-t-gray-700 py-1 px-4 flex justify-between items-center bg-black">
            <div>
              <ul className="flex">
                <li className="w-6 h-6 mx-1">
                  <CgRemote className="text-gray-400 w-6 h-6 " />
                </li>
                <li className="flex h-6 mx-1 items-center">
                  <FaCodeBranch className="text-gray-400 w-4 h-4" />
                  <p className="text-gray-400 text-sm">main*</p>
                </li>
                <li className=" flex h-6 mx-1 items-center">
                  <IoIosCloseCircleOutline className="text-gray-400 w-6 h-6" />
                  <p className="text-gray-400 px-1 text-sm">0</p>
                </li>
                <li className="flex h-6 mx-1 items-center">
                  <CiWarning className="text-gray-400 w-6 h-6" />
                  <p className="text-gray-400 px-1 text-sm">0</p>
                </li>
                <li className="flex h-6 mx-1 items-center">
                  <p className="text-gray-400 px-1 text-sm">
                    [TypeScript]: Symbols: 0
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex">
                <li className="h-6 mx-1">
                  <p className="text-gray-400 px-1 text-sm">Spaces: 2</p>
                </li>
                <li className="flex h-6 mx-1 items-center">
                  <p className="text-gray-400 text-sm">UTF-8</p>
                </li>
                <li className=" flex h-6 mx-1 items-center">
                  <p className="text-gray-400 px-1 text-sm">CRLF</p>
                </li>
                <li className="flex h-6 mx-1 items-center">
                  <CiWarning className="text-gray-400 w-6 h-6" />
                  <p className="text-gray-400 px-1 text-sm">0</p>
                </li>
                <li className="flex h-6 mx-1 items-center">
                  <p className="text-gray-400 px-1 text-sm">
                    {} JavaScript JSX
                  </p>
                </li>
                <li className="flex h-6 mx-1 items-center">
                  <FaGithub className="text-gray-400 w-4 h-4" />
                  <p className="text-gray-400 px-1 text-sm">Sing In</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualStudioCode;
