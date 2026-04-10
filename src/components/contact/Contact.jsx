import { useSelector, useDispatch } from "react-redux";
import { closeWindow, focusWindow } from "../../common/store/state/windowSlice";
import { useState, useEffect } from "react";
import { socials } from "../../common/constants";

import { CiWifiOn } from "react-icons/ci";
import { FaBatteryHalf } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import dayjs from "dayjs";

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
    <div>
      {/* Pc or laptop */}
      <div
        style={{
          zIndex: win.zIndex,
          left: position.x + 25,
          top: position.y + 45,
        }}
        className="hidden md:flex md:flex-col absolute w-[520px] bg-white rounded-xl shadow-lg overflow-hidden"
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
        <div
          onMouseDown={() => dispatch(focusWindow("contact"))}
          className="p-4"
        >
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

      {/* hp or android */}
      {/* Android or hp */}
      <div
        style={{
          zIndex: win.zIndex,
        }}
        className=" absolute top-0 left-0 w-full h-screen bg-white  overflow-hidden flex flex-col md:hidden"
      >
        {/* HEADER */}
        <div className="w-full">
          <div className="w-full flex justify-between items-center px-5 py-3 bg-gray-100">
            <div>
              <time className="font-georama">{dayjs().format(" h:mm A")} </time>
            </div>
            <div className="flex gap-4">
              <CiWifiOn className="w-5 h-5" />
              <FaSignal className="w-5 h-5" />
              <FaBatteryHalf className="w-5 h-5" />
            </div>
          </div>
          <div className="flex p-5 justify-between items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => dispatch(closeWindow("contact"))}
            >
              <IoMdArrowBack className="w-5 h-5 mr-3" />
              <span className="font-georama text-blue-500">Go Back</span>
            </div>
            <div>
              <h3 className="text-xl font-georama transform -translate-x-45">
                Contact
              </h3>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4">
          <div className="space-y-5 w-20 h-20 overflow-hidden rounded-full">
            <img src="/images/akbar.JPG" alt="Akbar" className="w-20" />
          </div>
          <h3 className="font-poppins mt-1">Let's Connect</h3>
          <p className="font-poppins"> @akbardermawan27.gmail.com</p>
          <p className="font-roboto">
            Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
          </p>

          <ul className="flex flex-col gap-5 mt-10 i">
            {socials.map(({ id, bg, link, icon, text }) => (
              <li
                key={id}
                style={{ backgroundColor: bg }}
                className="p-5 rounded-2xl"
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img src={icon} alt={text} className="size-10 mr-5" />
                  <p className="font-poppins mt-1 font-bold text-2xl">{text}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
