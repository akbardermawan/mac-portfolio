import { useSelector, useDispatch } from "react-redux";
import { closeWindow, focusWindow } from "../../common/store/state/windowSlice";
import { useState, useEffect } from "react";

const Contact = () => {
  const win = useSelector((state) => state.window.windows.contact);
  const dispatch = useDispatch();
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    dispatch(focusWindow("contact"));

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
        left: position.x + 25,
        top: position.y + 45,
      }}
      className="absolute w-96 bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* HEADER */}
      <div
        onMouseDown={handleMouseDown}
        className="flex justify-between items-center p-2 bg-gray-200 cursor-move"
      >
        <div className="flex gap-2">
          {/* 🔴 CLOSE */}
          <button
            onClick={() => dispatch(closeWindow("contact"))}
            className="cursor-pointer"
          >
            🔴
          </button>
          {/* 🟡 MINIMIZE */}
          <button>🟡</button>

          {/* 🟢 FULLSCREEN */}
          <button>🟢</button>
        </div>
        <span>Contact</span>
      </div>

      {/* CONTENT */}
      <div onMouseDown={() => dispatch(focusWindow("contact"))} className="p-4">
        Ini halaman Contact 📞
      </div>
    </div>
  );
};

export default Contact;
