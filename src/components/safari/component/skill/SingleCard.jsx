import React, { useState, useRef } from "react";

const SingleCard = () => {
  const [transformStyle, setTransformStyle] = useState("");
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;

    const rotateX = (y - 0.5) * 10;
    const rotateY = (x - 0.5) * -10;

    setTransformStyle(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(0.97, 0.97, 0.97)`,
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle, transition: "transform 0.2s ease" }}
      className="relative w-[90%] lg:w-[90%] h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-2xl shadow-lg"
    >
      {/* Background Video */}
      <video
        src="/videos/feature-4.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      />

      {/* Overlay Content */}
      <div className="relative z-10 bg-black/50 px-6 py-8 rounded-xl text-white text-center">
        <h1 className="text-3xl font-bold">Web Developer</h1>
      </div>
    </div>
  );
};

export default SingleCard;
