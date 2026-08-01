import React from "react";
import useTypingEffect from "../hooks/useTypingEffect";

const ImportReactVs = ({ onComplete }) => {
  const code = [
    {
      text: "import",
      color: "text-purple-400",
    },
    {
      text: " React",
      color: "text-blue-400",
    },
    {
      text: " from",
      color: "text-purple-400",
    },
    {
      text: ' "react"',
      color: "text-green-400",
    },
    {
      text: ";",
      color: "text-white",
    },
  ];

  const fullText = code.map((item) => item.text).join("");

  const { displayText, isTyping } = useTypingEffect({
    text: fullText,
    speed: 60,
    start: true,
    onComplete,
  });

  let currentIndex = 0;

  return (
    <p className="font-mono">
      {code.map((item, index) => {
        const startIndex = currentIndex;

        const endIndex = currentIndex + item.text.length;

        currentIndex = endIndex;

        const visibleText = displayText.slice(startIndex, endIndex);

        return (
          <span key={index} className={item.color}>
            {visibleText}
          </span>
        );
      })}

      {isTyping && <span className="text-white animate-pulse">|</span>}
    </p>
  );
};

export default ImportReactVs;
