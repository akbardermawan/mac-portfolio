import { useSelector, useDispatch } from "react-redux";
import { closeWindow, focusWindow } from "../../common/store/state/windowSlice";
import { useState, useEffect } from "react";
import { skill } from "../../common/constants";

const Terminal = () => {
  const win = useSelector((state) => state.window.windows.terminal);
  const dispatch = useDispatch();
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    dispatch(focusWindow("terminal"));

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
        left: position.x + 30,
        top: position.y + 45,
      }}
      className="absolute w-[500px] bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* HEADER */}
      <div
        onMouseDown={handleMouseDown}
        className="flex justify-between items-center p-2 bg-gray-200 cursor-move"
      >
        <div className="flex gap-2">
          {/* 🔴 CLOSE */}
          <button
            onClick={() => dispatch(closeWindow("terminal"))}
            className="cursor-pointer"
          >
            🔴
          </button>
          {/* 🟡 MINIMIZE */}
          <button>🟡</button>

          {/* 🟢 FULLSCREEN */}
          <button>🟢</button>
        </div>
        <span className="transform -translate-x-50 font-bold text-xl text-gray-600">
          Tech Stack
        </span>
      </div>

      {/* CONTENT */}
      <div
        onMouseDown={() => dispatch(focusWindow("terminal"))}
        className="p-4 w-full"
      >
        <p className="mb-5 font-roboto">
          <span className="font-bold ">@akbar</span>% show tect stack
        </p>
        {/* Header */}
        <div className="grid grid-cols-2 pb-3 border-b border-gray-300 text-gray-600 font-medium">
          <span>Category</span>
          <span>Technologies</span>
        </div>

        {/* List */}
        <div className="mt-4 space-y-4">
          {skill.map((item, index) => (
            <div key={index} className="grid grid-cols-2 items-center">
              {/* Category */}
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                {item.category}
              </div>

              {/* Technologies */}
              <div className="text-gray-700">{item.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
