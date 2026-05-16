import { useState, useEffect, useRef } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";

import {
  openWindow,
  closeWindow,
  focusWindow,
} from "../../common/store/state/windowSlice.js";

const Village = () => {
  // DESKTOP ICON POSITION
  const [position, setPosition] = useState({ x: 50, y: 200 });
  // MOBILE POSITION
  const [positionAndroid, setPositionAndroid] = useState({ x: 20, y: 180 });

  // CONTEXT MENU
  const [showMenu, setShowMenu] = useState(false);

  const [menuPosition, setMenuPosition] = useState({
    x: 0,
    y: 0,
  });

  // PROPERTIES WINDOW POSITION
  const [positionProperties, setPositionProperties] = useState({
    x: 100,
    y: 150,
  });

  // REDUX
  const win = useSelector((state) => state.window.windows.village);

  const dispatch = useDispatch();

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

  const movedRef = useRef(false); // 🔥 deteksi apakah benar drag

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
    draggingWindowRef.current = true;

    windowOffsetRef.current = {
      x: e.clientX - positionProperties.x,
      y: e.clientY - positionProperties.y,
    };

    dispatch(focusWindow("cpns"));
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
  // DOUBLE CLICK
  // =========================
  const handleDoubleClick = () => {
    if (!movedRef.current) {
      window.open("https://akbarcpns.netlify.app/", "_blank");
    }
  };

  // =========================
  // RIGHT CLICK
  // =========================
  const handleContextMenu = (e) => {
    e.preventDefault();

    setShowMenu(true);

    setMenuPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  // =========================
  // CLOSE MENU
  // =========================
  useEffect(() => {
    const closeMenu = () => {
      setShowMenu(false);
    };

    window.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);

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
  return (
    <div>
      {/* DESKTOP ICON */}
      <div
        style={{
          position: "absolute",
          zIndex: 1000,
          left: position.x,
          top: position.y,
        }}
        className="w-20"
      >
        <div
          onMouseDown={handleIconMouseDown}
          onDoubleClick={handleDoubleClick}
          onContextMenu={handleContextMenu}
          className="hidden md:flex flex-col items-center cursor-move select-none"
        >
          <img
            src="/images/safari.png"
            alt="cpns.com"
            draggable={false}
            className="cursor-pointer hover:scale-110 active:scale-95 w-20"
          />
          <p className="font-semibold text-white ">Village.com</p>
        </div>
      </div>

      {/* CONTEXT MENU */}
      {showMenu && (
        <div
          style={{
            position: "fixed",
            top: menuPosition.y,
            left: menuPosition.x,
            zIndex: 9999,
          }}
          className="w-60 bg-gray-200 rounded shadow-lg border border-gray-400"
        >
          <ul className="py-2">
            <li
              onClick={() =>
                window.open("https://webvillage.netlify.app/", "_blank")
              }
              className="px-4 py-2 hover:bg-gray-300 cursor-pointer font-semibold"
            >
              Open
            </li>

            <li
              onClick={() => {
                dispatch(
                  openWindow({
                    windowKey: "village",
                  }),
                );

                setShowMenu(false);
              }}
              className="px-4 py-2 hover:bg-gray-300 cursor-pointer"
            >
              Properties
            </li>
          </ul>
        </div>
      )}

      {/* PROPERTIES WINDOW */}
      {win?.isOpen && (
        <div
          style={{
            position: "absolute",
            zIndex: win.zIndex,
            left: positionProperties.x,
            top: positionProperties.y,
          }}
          onMouseDown={() => dispatch(focusWindow("village"))}
          className="hidden md:flex md:flex-col w-[590px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-300"
        >
          {/* HEADER */}
          <div
            onMouseDown={handleWindowMouseDown}
            className="flex justify-between items-center p-2 bg-gray-200 cursor-move"
          >
            <div className="flex gap-2">
              <button
                onClick={() => dispatch(closeWindow("village"))}
                className="cursor-pointer"
              >
                🔴
              </button>

              <button>🟡</button>

              <button>🟢</button>
            </div>

            <span className="font-semibold">
              <img src="/images/safari.png" alt="cpns" className="w-10 mr-3" />
            </span>
          </div>

          {/* CONTENT */}
          <div className="p-5 text-black">
            <div>
              <p>
                <span className="font-semibold">Name Website:</span> VILLAGE
                Website.com
              </p>

              <p>
                <span className="font-semibold">URL:</span>{" "}
                https://webvillage.netlify.app/
              </p>
              <p>
                <span className="font-semibold">technology:</span> React JS,
                Redux Tolkit, Tailwind CSS
              </p>
            </div>

            <img src="/images/dekstop/village.JPG" alt="" className="mt-1" />
          </div>
        </div>
      )}

      {/* Android/hp */}
      <div
        style={{
          position: "absolute",
          zIndex: 1000,
          left: positionAndroid.x + "px",
          top: positionAndroid.y + "px",
        }}
        className="w-20"
      >
        <div className="flex md:hidden flex-col items-center cursor-move select-none ">
          <a href="https://webvillage.netlify.app/" target="_blank">
            <img
              src="/images/safari.png"
              alt="cpns.com"
              draggable={false}
              className="w-20"
            />
            <p className="font-semibold text-white ">Village.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Village;
