import { useSelector, useDispatch } from "react-redux";
import { closeWindow, focusWindow } from "../../common/store/state/windowSlice";
import { useState, useEffect } from "react";

const TextAndPhoto = () => {
  const win = useSelector((state) => state.window.windows.textandphoto);
  const dispatch = useDispatch();

  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const data = win?.data;

  const handleMouseDown = (e) => {
    dispatch(focusWindow("textandphoto"));

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

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  // ✅ TARUH DI BAWAH SEMUA HOOK
  if (!win || !win.isOpen) return null;

  return (
    <div
      style={{
        zIndex: win.zIndex,
        left: position.x + 20,
        top: position.y + 20,
      }}
      className="absolute w-96 bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* HEADER */}
      <div
        onMouseDown={handleMouseDown}
        className="flex justify-between items-center p-2 bg-gray-200 cursor-move"
      >
        <div className="flex gap-2">
          <button onClick={() => dispatch(closeWindow("textandphoto"))}>
            🔴
          </button>
          <button>🟡</button>
          <button>🟢</button>
        </div>
      </div>

      {/* CONTENT */}
      <div
        onMouseDown={() => dispatch(focusWindow("textandphoto"))}
        className="p-4"
      >
        {data?.fileType === "txt" && (
          <>
            <p className="font-bold mb-2">{data?.name}</p>

            {data?.description?.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </>
        )}

        {data?.fileType === "img" && (
          <img src={data.src} alt={data.name} className="w-full" />
        )}
      </div>
    </div>
  );
};
export default TextAndPhoto;
