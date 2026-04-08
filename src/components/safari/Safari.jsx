import { useSelector, useDispatch } from "react-redux";
import { closeWindow, focusWindow } from "../../common/store/state/windowSlice";
import { toggleFullscreen } from "../../common/store/state/safariSlice";
import { useState, useEffect } from "react";
import SafariBody from "./SafariBody";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUpload } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";

const Safari = () => {
  const win = useSelector((state) => state.window.windows.safari);
  const isFullscreen = useSelector((state) => state.safari.isFullscreen);
  const dispatch = useDispatch();
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    // ❗ kalau fullscreen, jangan bisa drag
    if (isFullscreen) return;

    dispatch(focusWindow("safari"));

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
    <div
      style={{
        zIndex: win.zIndex,
        left: isFullscreen ? 0 : position.x - 30,
        top: isFullscreen ? 0 : position.y - 10,
        width: isFullscreen ? "100vw" : "44rem",
        height: isFullscreen ? "100vh" : "40rem",
      }}
      className="absolute w-96 bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* HEADER */}
      <div
        onMouseDown={handleMouseDown}
        className="w-full flex justify-between items-center p-2 bg-gray-200 cursor-move"
      >
        <div className="flex gap-2">
          {/* 🔴 CLOSE */}
          <button
            onClick={() => dispatch(closeWindow("safari"))}
            className="cursor-pointer"
          >
            🔴
          </button>
          {/* 🟡 MINIMIZE */}
          <button>🟡</button>

          {/* 🟢 FULLSCREEN */}
          <button
            onClick={() => dispatch(toggleFullscreen())}
            className="cursor-pointer"
          >
            🟢
          </button>
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
        className="px-1 w-full h-full"
      >
        <SafariBody />
      </div>
    </div>
  );
};

export default Safari;
