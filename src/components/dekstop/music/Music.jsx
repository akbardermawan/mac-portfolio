import { useState, useEffect, useRef } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";

import {
  closeWindow,
  focusWindow,
  toggleWindow,
} from "../../../common/store/state/windowSlice.js";

import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaPlay,
  FaPause,
} from "react-icons/fa";

import { playlist_music } from "../../../common/constants/index.js";

const Music = () => {
  // =========================
  // PLAYER
  // =========================
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  // =========================
  // DESKTOP ICON POSITION
  // =========================
  const [iconPosition, setIconPosition] = useState({
    x: 53,
    y: 600,
  });

  // =========================
  // WINDOW POSITION
  // =========================
  const [position, setPosition] = useState({
    right: 20,
    top: 120,
  });

  // =========================
  // REDUX
  // =========================
  const win = useSelector((state) => state.window.windows.music);

  const dispatch = useDispatch();

  // =========================
  // ICON DRAG
  // =========================
  const draggingIconRef = useRef(false);

  const iconOffsetRef = useRef({
    x: 0,
    y: 0,
  });

  const handleIconMouseDown = (e) => {
    if (e.button !== 0) return;

    e.preventDefault();

    draggingIconRef.current = true;

    iconOffsetRef.current = {
      x: e.clientX - iconPosition.x,
      y: e.clientY - iconPosition.y,
    };
  };

  // =========================
  // DOUBLE CLICK ICON
  // =========================
  const handleDoubleClick = () => {
    dispatch(toggleWindow("music"));
  };

  // =========================
  // WINDOW DRAG
  // =========================
  const draggingWindowRef = useRef(false);

  const windowOffsetRef = useRef({
    x: 0,
    y: 0,
  });

  const handleWindowMouseDown = (e) => {
    e.preventDefault();

    draggingWindowRef.current = true;

    windowOffsetRef.current = {
      x: e.clientX,
      y: e.clientY,
    };

    dispatch(focusWindow("music"));
  };

  // =========================
  // GLOBAL MOUSE MOVE
  // =========================
  const handleMouseMove = (e) => {
    // DRAG ICON
    if (draggingIconRef.current) {
      setIconPosition({
        x: e.clientX - iconOffsetRef.current.x,
        y: e.clientY - iconOffsetRef.current.y,
      });

      return;
    }

    // DRAG WINDOW
    if (!draggingWindowRef.current) return;

    const deltaX = e.clientX - windowOffsetRef.current.x;
    const deltaY = e.clientY - windowOffsetRef.current.y;

    setPosition((prev) => ({
      right: prev.right - deltaX,
      top: prev.top + deltaY,
    }));

    windowOffsetRef.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const handleMouseUp = () => {
    draggingWindowRef.current = false;
    draggingIconRef.current = false;
  };

  // =========================
  // PLAYER FUNCTIONS
  // =========================
  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }

      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error(error);
    }
  };

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % playlist_music.length);
  };

  const prevSong = () => {
    setCurrentSong((prev) =>
      prev === 0 ? playlist_music.length - 1 : prev - 1,
    );
  };

  // =========================
  // SONG CHANGE
  // =========================
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.load();

    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSong]);

  // =========================
  // AUDIO EVENTS
  // =========================
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const loadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", loadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", loadedMetadata);
    };
  }, []);

  // =========================
  // WINDOW EVENTS
  // =========================
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // =========================
  // FORMAT TIME
  // =========================
  const formatTime = (time) => {
    if (!time || Number.isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // =========================
  // PROGRESS
  // =========================
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      {/* DESKTOP ICON */}
      <div
        style={{
          position: "absolute",
          left: `${iconPosition.x}px`,
          top: `${iconPosition.y}px`,
          zIndex: 100,
        }}
      >
        <div
          onMouseDown={handleIconMouseDown}
          onDoubleClick={handleDoubleClick}
          className="hidden md:flex flex-col items-center cursor-move select-none"
        >
          <img
            src="/images/music.png"
            alt="Music"
            draggable={false}
            className="cursor-pointer hover:scale-110 active:scale-95 w-18"
          />

          <p className="text-white font-semibold">Music</p>
        </div>
      </div>

      {/* WINDOW */}
      {win?.isOpen && (
        <div
          style={{
            position: "absolute",
            right: `${position.right}px`,
            top: `${position.top}px`,
            zIndex: win?.zIndex || 1000,
          }}
          onMouseDown={() => dispatch(focusWindow("music"))}
          className="
            hidden md:flex md:flex-col
            w-[280px]
            rounded-3xl
            overflow-hidden
            backdrop-blur-xl
            bg-white/20
            border border-white/20
            shadow-2xl
            select-none
          "
        >
          {/* HEADER */}
          <div
            onMouseDown={handleWindowMouseDown}
            className="flex items-center p-3 cursor-move"
          >
            <div className="flex gap-2">
              <button
                onClick={() => dispatch(closeWindow("music"))}
                className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
              />

              <button className="w-3 h-3 rounded-full bg-yellow-500" />

              <button className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>

          {/* COVER */}
          <div className="px-5">
            <img
              src={playlist_music[currentSong].cover}
              alt={playlist_music[currentSong].title}
              className="
                w-full
                h-[100px]
                object-cover
                rounded-2xl
                shadow-lg
                opacity-70
              "
            />
          </div>

          {/* INFO */}
          <div className="px-5 pt-2 text-center">
            <h2 className="font-semibold text-white text-lg truncate">
              {playlist_music[currentSong].title}
            </h2>

            <p className="text-sm text-white/70">
              {playlist_music[currentSong].artist}
            </p>
          </div>

          {/* PROGRESS */}
          <div className="px-5 mt-1">
            <div
              className="w-full h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                if (!audioRef.current) return;

                const rect = e.currentTarget.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;

                audioRef.current.currentTime = percent * duration;
              }}
            >
              <div
                className="h-full bg-white rounded-full"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <div className="flex justify-between mt-2 text-xs text-white/60">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex justify-center items-center gap-8 py-2">
            <button
              onClick={prevSong}
              className="text-white text-2xl hover:scale-110 transition"
            >
              <FaAngleDoubleLeft />
            </button>

            <button
              onClick={togglePlay}
              className="
                w-12
                h-12
                rounded-full
                bg-white
                text-black
                flex
                items-center
                justify-center
                shadow-lg
                hover:scale-105
                transition
              "
            >
              {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
            </button>

            <button
              onClick={nextSong}
              className="text-white text-2xl hover:scale-110 transition"
            >
              <FaAngleDoubleRight />
            </button>
          </div>
        </div>
      )}

      {/* AUDIO */}
      <audio ref={audioRef} onEnded={nextSong}>
        <source src={playlist_music[currentSong].src} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Music;
