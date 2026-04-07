import { useSelector, useDispatch } from "react-redux";
import { closeWindow, focusWindow } from "../../common/store/state/windowSlice";
import { useState, useEffect } from "react";
import FinderBody from "./FinderBody";

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
    <div
      style={{
        zIndex: win.zIndex,
        left: isFullscreen ? 0 : position.x - 5,
        top: isFullscreen ? 0 : position.y,
        width: isFullscreen ? "100vw" : "34rem",
        height: isFullscreen ? "100vh" : "auto",
      }}
      className="absolute w-96 bg-white rounded-xl shadow-lg overflow-hidden"
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
        <span>Finder</span>
      </div>

      {/* CONTENT */}
      <div
        onMouseDown={() => dispatch(focusWindow("finder"))}
        className="w-full h-full"
      >
        <FinderBody />
      </div>
    </div>
  );
};

export default Finder;
