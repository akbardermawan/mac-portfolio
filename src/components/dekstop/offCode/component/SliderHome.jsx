import React, { useState, useEffect } from "react";

const ImgSliderHome = [
  { id: 1, name: "1", img: "/images/dekstop/akbar-10.jpg" },
  { id: 2, name: "2", img: "/images/akbar-4.JPG" },
  { id: 3, name: "3", img: "/images/dekstop/akbar-9.jpg" },
  { id: 4, name: "4", img: "/images/akbar-2.JPG" },
  { id: 5, name: "5", img: "/images/akbar-8.jpg" },
];

const SliderHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ImgSliderHome.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ImgSliderHome.length - 1 : prevIndex - 1,
    );
  };

  // Auto slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === ImgSliderHome.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    // Membersihkan interval ketika component di-unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden py-6 ">
      {/* Container Slider */}
      <div className="relative flex h-[280px] items-center justify-center">
        {ImgSliderHome.map((item, index) => {
          // Menghitung posisi slide terhadap slide aktif
          let position = index - currentIndex;

          // Infinite loop
          if (position < -1) {
            position += ImgSliderHome.length;
          }

          if (position > 1) {
            position -= ImgSliderHome.length;
          }

          return (
            <div
              key={item.id}
              className={`
                absolute
                h-[280px]
                w-[40%]
                overflow-hidden
                rounded-lg
                transition-all
                duration-500
                ease-in-out
                
              `}
              style={{
                transform: `translateX(calc(${position * 100}% + ${
                  position * 20
                }px))`,
                zIndex: position === 0 ? 10 : 5,
                opacity: Math.abs(position) > 1 ? 0 : 1,
                scale: position === 0 ? "1" : "0.9",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* Tombol Previous */}
      <button
        onClick={prevSlide}
        className="
          absolute
          left-4
          top-1/2
          z-20
          -translate-y-1/2
          rounded-full
          bg-black/50
          px-4
          py-2
          text-xl
          text-white
          transition
          hover:bg-black/80
        "
      >
        ❮
      </button>

      {/* Tombol Next */}
      <button
        onClick={nextSlide}
        className="
          absolute
          right-4
          top-1/2
          z-20
          -translate-y-1/2
          rounded-full
          bg-black/50
          px-4
          py-2
          text-xl
          text-white
          transition
          hover:bg-black/80
        "
      >
        ❯
      </button>

      {/* Indicator */}
      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 pt-2">
        {ImgSliderHome.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setCurrentIndex(index)}
            className={`
              h-2
              rounded-full
              transition-all
              duration-300
              ${currentIndex === index ? "w-6 bg-black/80" : "w-2 bg-black/40"}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderHome;
