import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight) => {
    gsap.to(letter, {
      duration: 0.25,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const rect = letter.getBoundingClientRect();
      const center = rect.left - left + rect.width / 2;

      const distance = Math.abs(mouseX - center);
      const intensity = Math.exp(-(distance ** 2) / 2000);

      const weight = min + (max - min) * intensity;
      animateLetter(letter, weight);
    });
  };

  // ✅ FIX: reset semua huruf ke default
  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      gsap.to(letter, {
        duration: 0.3,
        ease: "power2.out",
        fontVariationSettings: `'wght' ${base}`,
      });
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const cleanupTitle = setupTextHover(titleRef.current, "title");
    const cleanupSubtitle = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      cleanupTitle && cleanupTitle();
      cleanupSubtitle && cleanupSubtitle();
    };
  }, []);

  return (
    <section className="flex flex-col justify-center items-center h-full text-white">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Akbar! Welcome to my",
          "text-lg sm:text-2xl md:text-3xl font-georama",
          100,
        )}
      </p>

      <h1 ref={titleRef} className="mt-5 sm:mt-7">
        {renderText(
          "portfolio",
          "text-5xl sm:text-7xl md:text-9xl italic font-georama",
        )}
      </h1>
    </section>
  );
};

export default Welcome;
