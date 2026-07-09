import React from "react";

// redux
import { useSelector, useDispatch } from "react-redux";

import { openWindow } from "../../common/store/state/windowSlice.js";

const Note = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="block md:hidden"
      style={{
        position: "absolute",
        zIndex: 1000,
        left: 250,
        top: 80,
      }}
    >
      <div
        className="flex flex-col items-center"
        onClick={() => {
          dispatch(
            openWindow({
              windowKey: "resume",
            }),
          );
        }}
      >
        <img src="/images/note.png" alt="note" className="w-20" />
        <p className="font-semibold text-white text-center">Resume</p>
      </div>
    </div>
  );
};

export default Note;
