import { useState, useEffect, useRef } from "react";

const Village = () => {
  const [position, setPosition] = useState({ x: 50, y: 200 });

  const draggingRef = useRef(false);
  const offsetRef = useRef({ x: 0, y: 0 });
  const movedRef = useRef(false); // 🔥 deteksi apakah benar drag

  const handleMouseDown = (e) => {
    e.preventDefault();

    draggingRef.current = true;
    movedRef.current = false;

    offsetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!draggingRef.current) return;

    movedRef.current = true; // 🔥 tandai kalau sudah digerakkan

    setPosition({
      x: e.clientX - offsetRef.current.x,
      y: e.clientY - offsetRef.current.y,
    });
  };

  const handleMouseUp = () => {
    draggingRef.current = false;
  };

  const handleDoubleClick = () => {
    // 🔥 hanya buka kalau bukan hasil drag
    if (!movedRef.current) {
      window.open("https://akbarcpns.netlify.app/", "_blank");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1000,
        left: position.x + "px",
        top: position.y + "px",
      }}
      className="w-20"
    >
      <div
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClick}
        className="hidden md:flex flex-col items-center cursor-move select-none"
      >
        <img
          src="/images/safari.png"
          alt="cpns.com"
          draggable={false}
          className="cursor-pointer hover:scale-110 active:scale-95"
        />
        <p>Village.com</p>
      </div>
      <div className="flex md:hidden flex-col items-center cursor-move select-none">
        <a href="https://webvillage.netlify.app/" target="_blank">
          <img
            src="/images/safari.png"
            alt="cpns.com"
            draggable={false}
            className="cursor-pointer hover:scale-110 active:scale-95"
          />
          <p className="font-semibold">Village.com</p>
        </a>
      </div>
    </div>
  );
};

export default Village;
