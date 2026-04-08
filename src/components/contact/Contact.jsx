import { useSelector, useDispatch } from "react-redux";
import { closeWindow, focusWindow } from "../../common/store/state/windowSlice";
import { useState, useEffect } from "react";
import { socials } from "../../common/constants";

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
      className="absolute w-[520px] bg-white rounded-xl shadow-lg overflow-hidden"
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
        <span className="transform -translate-x-50 font-bold text-xl text-gray-600">
          Contact Me
        </span>
      </div>

      {/* CONTENT */}
      <div onMouseDown={() => dispatch(focusWindow("contact"))} className="p-4">
        <div className="space-y-5 w-20 h-20 overflow-hidden rounded-full">
          <img src="/images/akbar.JPG" alt="Akbar" className="w-20" />
        </div>
        <h3 className="font-poppins mt-1">Let's Connect</h3>
        <p className="font-poppins"> @akbardermawan27.gmail.com</p>
        <p className="font-roboto">
          Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
        </p>

        <ul className="flex gap-5 mt-5 i">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li
              key={id}
              style={{ backgroundColor: bg }}
              className="p-5 rounded-2xl"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={text} className="size-5" />
                <p className="font-poppins mt-1 font-semibold">{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
