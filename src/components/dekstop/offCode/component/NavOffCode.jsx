import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { navOffCode } from "../../../../common/constants";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setActiveLocation } from "../../../../common/store/state/locationOffCdSlice";
import { div } from "three/src/nodes/math/OperatorNode.js";

const NavOffCode = ({ scrollContainerRef }) => {
  const navContainerRef = useRef(null);
  const dispatch = useDispatch();

  const [isNavVisible, setIsNavVisible] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const currentScrollY = container.scrollTop;

      if (currentScrollY === 0) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // scroll down
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // scroll up
        setIsNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContainerRef]);

  useEffect(() => {
    if (!navContainerRef.current) return;

    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
      ease: "power2.out",
    });
  }, [isNavVisible]);

  const handleOnClickNav = (item) => {
    dispatch(setActiveLocation(item));
  };
  return (
    <div ref={navContainerRef} className="w-full bg-white">
      <div className="w-full max-w-6xl mx-auto h-16 bg-white flex justify-between items-center px-5">
        <div className="h-16 relative overflow-hidden bg-white flex items-center justify-center">
          <h1 className=" text-6xl font-black bg-[url('/images/eye.JPG')] bg-cover bg-center bg-clip-text text-transparent font-playwrite text-center">
            AKBAR'S
          </h1>
        </div>

        <div>
          <ul className="flex gap-5 items-center">
            {navOffCode.map((item) => (
              <li
                key={item.id}
                className=" relative inline-block cursor-pointer text-2xl font-semibold text-gray-700 after:absolute font-noto
                after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gray-800 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 "
                onClick={() => handleOnClickNav(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavOffCode;
