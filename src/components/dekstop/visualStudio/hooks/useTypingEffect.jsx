import { useEffect, useRef, useState } from "react";

const useTypingEffect = ({ text, speed = 100, start = false, onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Menyimpan status apakah typing sudah selesai
  const hasCompleted = useRef(false);

  useEffect(() => {
    // Jika belum waktunya mulai
    if (!start) return;

    // Jika sudah pernah selesai, jangan jalankan lagi
    if (hasCompleted.current) return;

    let index = 0;

    setDisplayText("");
    setIsTyping(true);

    const typingEffect = setInterval(() => {
      index++;

      setDisplayText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(typingEffect);

        setIsTyping(false);

        // Tandai sudah selesai
        hasCompleted.current = true;

        // Jalankan callback hanya sekali
        onComplete?.();
      }
    }, speed);

    return () => {
      clearInterval(typingEffect);
    };
  }, [text, speed, start, onComplete]);

  return {
    displayText,
    isTyping,
  };
};

export default useTypingEffect;
