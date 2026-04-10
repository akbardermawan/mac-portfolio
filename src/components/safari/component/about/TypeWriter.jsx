import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypeWriter = ({ text = "", speed = 100, pause = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index <= text.length) {
      // Mengetik
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index));
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && index >= 0) {
      // Menghapus
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index));
        setIndex((prev) => prev - 1);
      }, speed / 2);
    }

    // Saat selesai mengetik, tunggu dulu sebelum hapus
    if (index === text.length && !isDeleting) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    }

    // Saat selesai menghapus, mulai ketik lagi
    if (index === 0 && isDeleting) {
      timeout = setTimeout(() => setIsDeleting(false), pause / 2);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, pause]);

  return (
    <motion.span
      style={{
        color: "white",
        fontFamily: "bold",
        whiteSpace: "pre",
        fontSize: "clamp(1.8rem, 1.8rem, 1.8rem)",
      }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        |
      </motion.span>
    </motion.span>
  );
};

export default TypeWriter;
