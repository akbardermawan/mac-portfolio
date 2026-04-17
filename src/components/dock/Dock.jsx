import { dockApps } from "../../common/constants/index.js";

// redux
import { useDispatch } from "react-redux";
import { toggleWindow } from "../../common/store/state/windowSlice.js";

// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// tooltip
import { Tooltip } from "react-tooltip";
import clsx from "clsx";

const Dock = () => {
  const dockRef = useRef(null);
  const dispatch = useDispatch();

  //memberikan efec animasi pada navbar bawah
  useGSAP(
    () => {
      const dock = dockRef.current;
      if (!dock) return;

      const icons = dock.querySelectorAll(".dock-icon");

      const animateIcons = (mouseX) => {
        const { left } = dock.getBoundingClientRect();

        icons.forEach((icon) => {
          const { left: iconLeft, width } = icon.getBoundingClientRect();

          const center = iconLeft - left + width / 2;
          const distance = Math.abs(mouseX - center);

          const intensity = Math.exp(-(distance ** 2) / 20000);

          gsap.to(icon, {
            scale: 1 + 0.25 * intensity, // lebih natural
            y: -15 * intensity,
            duration: 0.2,
            ease: "power2.out",
          });
        });
      };

      const handleMouseMove = (e) => {
        const { left } = dock.getBoundingClientRect();
        animateIcons(e.clientX - left); // 🔥 penting!
      };

      const resetIcons = () => {
        icons.forEach((icon) => {
          gsap.to(icon, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power1.out",
          });
        });
      };

      dock.addEventListener("mousemove", handleMouseMove);
      dock.addEventListener("mouseleave", resetIcons);

      return () => {
        dock.removeEventListener("mousemove", handleMouseMove);
        dock.removeEventListener("mouseleave", resetIcons);
      };
    },
    { scope: dockRef },
  );

  return (
    <section className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 select-none">
      {/* Pc or Laptop */}
      <div
        ref={dockRef}
        className="hidden md:flex bg-white/20 backdrop-blur-md rounded-2xl p-2 items-end gap-2"
      >
        {dockApps.map((app, i) => (
          <div key={app.id} className={clsx("flex justify-center")}>
            <button
              onClick={() => dispatch(toggleWindow(app.id))}
              className="dock-icon size-14 sm:size-16 cursor-pointer"
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={app.name}
            >
              <img
                src={`/images/${app.icon}`}
                alt={app.name}
                className="w-full h-full object-contain"
              />
            </button>
          </div>
        ))}

        <Tooltip
          id="dock-tooltip"
          place="top"
          delayShow={200}
          delayHide={100}
          className="!py-1 !px-3 !text-xs !rounded-md !bg-blue-200 !text-blue-900 !shadow-xl"
        />
      </div>
      {/* Mobile */}
      <div className="flex md:hidden bg-white/20 backdrop-blur-md rounded-2xl p-2 mb-10 items-end gap-2">
        {dockApps.map((app, i) => (
          <div
            key={app.id}
            className={clsx(i >= 4 ? "hidden" : "", "flex justify-center")}
          >
            <button
              onClick={() => dispatch(toggleWindow(app.id))}
              className="dock-icon size-16  cursor-pointer"
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={app.name}
            >
              <img
                src={`/images/${app.icon}`}
                alt={app.name}
                className="w-full h-full object-contain"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dock;
