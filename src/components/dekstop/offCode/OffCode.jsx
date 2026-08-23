import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

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
} from "../../../common/store/state/offCodeSlice";

//icon
import { CiSearch } from "react-icons/ci";
import { AiOutlineUpload } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import OffCodeBody from "./component/OffCodeBody";

const OffCode = () => {
  // DESKTOP ICON POSITION
  const [position, setPosition] = useState({
    x: 150,
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
  const win = useSelector((state) => state.window.windows.offcode);
  //Window Fullscrenn -> state redux
  const isFullscreen = useSelector((state) => state.offCode.isFullscreen);
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

    dispatch(focusWindow("offcode"));
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
  // OPEN offCode
  // =========================
  const handleDoubleClick = () => {
    dispatch(toggleWindow("offcode"));
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
            src="./images/offCode2.png"
            alt=""
            draggable={false}
            className="cursor-pointer hover:scale-110 active:scale-95 w-17"
          />
          <p className="text-white font-semibold">OffCode</p>
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
            width: isFullscreen ? "100vw" : "50rem",
            height: isFullscreen ? "100vh" : "42rem",
          }}
          onMouseDown={() => dispatch(focusWindow("visualstudio"))}
          className={clsx(
            isFullscreen ? "" : "rounded-xl",
            "relative hidden md:flex md:flex-col bg-white overflow-hidden",
          )}
        >
          {/* HEADER */}
          <div
            onMouseDown={handleWindowMouseDown}
            className="w-full flex justify-between items-center p-2 bg-gray-200 cursor-move"
          >
            <div className="flex gap-2">
              {/* 🔴 CLOSE */}
              <button
                onClick={() => dispatch(closeWindow("offcode"))}
                className="cursor-pointer"
              >
                🔴
              </button>
              {isFullscreen ? (
                <button
                  onClick={() => dispatch(toggleFullscreen())}
                  className="cursor-pointer"
                >
                  🟡
                </button>
              ) : (
                <button
                  onClick={() => dispatch(toggleFullscreen())}
                  className="cursor-pointer"
                >
                  🟢
                </button>
              )}
            </div>

            <div className="mx-20 w-10 flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Search or enter website name"
                className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-500"
              />
              <CiSearch />
            </div>

            <div className="flex gap-5 mr-5 mt-1">
              <AiOutlineUpload className="w-5 h-5" />
              <FaPlus className="w-5 h-5" />
              <MdOutlineContentCopy className="w-5 h-5" />
            </div>
          </div>
          {/* CONTENT */}
          <div
            onMouseDown={() => dispatch(focusWindow("safari"))}
            className=" w-full h-full"
          >
            <OffCodeBody />
          </div>
        </div>
      )}
    </div>
  );
};

export default OffCode;
