import React, { useCallback, useState } from "react";

import ImportReactVs from "./ImportReactVs";
import useTypingEffect from "../hooks/useTypingEffect";

const HomeVs = () => {
  // =========================
  // LINE 1
  // =========================

  const line1 = [
    {
      text: "const",
      color: "text-orange-700",
    },
    {
      text: " Home",
      color: "text-purple-400",
    },
    {
      text: " =",
      color: "text-white",
    },
    {
      text: " ()",
      color: "text-yellow-400",
    },
    {
      text: " =>",
      color: "text-orange-700",
    },
    {
      text: " {",
      color: "text-yellow-400",
    },
  ];

  // =========================
  // LINE 2
  // =========================

  const line2 = [
    {
      text: "return",
      color: "text-purple-400",
    },
    {
      text: " (",
      color: "text-yellow-400",
    },
  ];

  // =========================
  // LINE 3
  // =========================

  const line3 = [
    {
      text: "<",
      color: "text-white",
    },
    {
      text: "div",
      color: "text-green-400",
    },
    {
      text: ">",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 4
  // =========================

  const line4 = [
    {
      text: "<",
      color: "text-white",
    },
    {
      text: "h2",
      color: "text-green-400",
    },
    {
      text: ">",
      color: "text-white",
    },
    {
      text: "Akbar Dermawan Mahbubillah",
      color: "text-white",
    },
    {
      text: "</",
      color: "text-white",
    },
    {
      text: "h2",
      color: "text-green-400",
    },
    {
      text: ">",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 5
  // =========================

  const line5 = [
    {
      text: "<",
      color: "text-white",
    },
    {
      text: "span",
      color: "text-green-400",
    },
    {
      text: ">",
      color: "text-white",
    },
    {
      text: "Web Developer",
      color: "text-white",
    },
    {
      text: "</",
      color: "text-white",
    },
    {
      text: "span",
      color: "text-green-400",
    },
    {
      text: ">",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 6
  // =========================

  const line6 = [
    {
      text: "<",
      color: "text-white",
    },
    {
      text: "p",
      color: "text-green-400",
    },
    {
      text: ">",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 7
  // =========================

  const line7 = [
    {
      text: "I am website developer with an educational background in Agricultural Engineering from the University of Jember, Indonesia",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 8
  // =========================

  const line8 = [
    {
      text: "</",
      color: "text-white",
    },
    {
      text: "p",
      color: "text-green-400",
    },
    {
      text: ">",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 9
  // =========================

  const line9 = [
    {
      text: "<",
      color: "text-white",
    },
    {
      text: "p",
      color: "text-green-400",
    },
    {
      text: ">",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 10
  // =========================

  const line10 = [
    {
      text: "My website is pretty simple — nothing too fancy, but it works smoothly and is really easy for anyone to use",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 11
  // =========================

  const line11 = [
    {
      text: "</",
      color: "text-white",
    },
    {
      text: "p",
      color: "text-green-400",
    },
    {
      text: ">",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 12
  // =========================

  const line12 = [
    {
      text: "<",
      color: "text-white",
    },
    {
      text: "div",
      color: "text-green-400",
    },
    {
      text: "/>",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 13
  // =========================

  const line13 = [
    {
      text: ");",
      color: "text-yellow-400",
    },
  ];

  // =========================
  // LINE 14
  // =========================

  const line14 = [
    {
      text: "}",
      color: "text-yellow-400",
    },
  ];

  // =========================
  // LINE 15
  // =========================

  const line15 = [
    {
      text: "export",
      color: "text-purple-400",
    },
    {
      text: " default",
      color: "text-purple-400",
    },
    {
      text: " Home",
      color: "text-purple-400",
    },
    {
      text: ";",
      color: "text-white",
    },
  ];

  // ============================================================
  // STATE
  // ===========================================================

  const [isImportComplete, setIsImportComplete] = useState(false);

  const [isLine1Complete, setIsLine1Complete] = useState(false);

  const [isLine2Complete, setIsLine2Complete] = useState(false);

  const [isLine3Complete, setIsLine3Complete] = useState(false);

  const [isLine4Complete, setIsLine4Complete] = useState(false);

  const [isLine5Complete, setIsLine5Complete] = useState(false);

  const [isLine6Complete, setIsLine6Complete] = useState(false);

  const [isLine7Complete, setIsLine7Complete] = useState(false);

  const [isLine8Complete, setIsLine8Complete] = useState(false);

  const [isLine9Complete, setIsLine9Complete] = useState(false);

  const [isLine10Complete, setIsLine10Complete] = useState(false);

  const [isLine11Complete, setIsLine11Complete] = useState(false);

  const [isLine12Complete, setIsLine12Complete] = useState(false);

  const [isLine13Complete, setIsLine13Complete] = useState(false);

  const [isLine14Complete, setIsLine14Complete] = useState(false);

  const [isLine15Complete, setIsLine15Complete] = useState(false);
  // =================================================================
  // IMPORT COMPLETE
  // =================================================================

  const handleImportComplete = useCallback(() => {
    setIsImportComplete(true);
  }, []);

  // =========================
  // LINE 1 COMPLETE
  // =========================

  const handleLine1Complete = useCallback(() => {
    setIsLine1Complete(true);
  }, []);

  // =========================
  // LINE 2 COMPLETE
  // =========================

  const handleLine2Complete = useCallback(() => {
    setIsLine2Complete(true);
  }, []);

  // =========================
  // LINE 3 COMPLETE
  // =========================

  const handleLine3Complete = useCallback(() => {
    setIsLine3Complete(true);
  }, []);
  // =========================
  // LINE 4 COMPLETE
  // =========================

  const handleLine4Complete = useCallback(() => {
    setIsLine4Complete(true);
  }, []);

  // =========================
  // LINE 5 COMPLETE
  // =========================

  const handleLine5Complete = useCallback(() => {
    setIsLine5Complete(true);
  }, []);

  // =========================
  // LINE 6 COMPLETE
  // =========================

  const handleLine6Complete = useCallback(() => {
    setIsLine6Complete(true);
  }, []);

  // =========================
  // LINE 7 COMPLETE
  // =========================

  const handleLine7Complete = useCallback(() => {
    setIsLine7Complete(true);
  }, []);

  // =========================
  // LINE 8 COMPLETE
  // =========================

  const handleLine8Complete = useCallback(() => {
    setIsLine8Complete(true);
  }, []);

  // =========================
  // LINE 9 COMPLETE
  // =========================

  const handleLine9Complete = useCallback(() => {
    setIsLine9Complete(true);
  }, []);

  // =========================
  // LINE 10 COMPLETE
  // =========================

  const handleLine10Complete = useCallback(() => {
    setIsLine10Complete(true);
  }, []);

  // =========================
  // LINE 11 COMPLETE
  // =========================

  const handleLine11Complete = useCallback(() => {
    setIsLine11Complete(true);
  }, []);
  // =========================
  // LINE 12 COMPLETE
  // =========================

  const handleLine12Complete = useCallback(() => {
    setIsLine12Complete(true);
  }, []);
  // =========================
  // LINE 13 COMPLETE
  // =========================

  const handleLine13Complete = useCallback(() => {
    setIsLine13Complete(true);
  }, []);
  // =========================
  // LINE 14 COMPLETE
  // =========================

  const handleLine14Complete = useCallback(() => {
    setIsLine14Complete(true);
  }, []);

  // ===========================================================================
  // LINE 1
  // ===========================================================================

  const fullLine1 = line1.map((item) => item.text).join("");

  const { displayText: displayLine1, isTyping: isTypingLine1 } =
    useTypingEffect({
      text: fullLine1,
      speed: 60,
      start: isImportComplete,
      onComplete: handleLine1Complete,
    });

  // =========================
  // LINE 2
  // =========================

  const fullLine2 = line2.map((item) => item.text).join("");

  const { displayText: displayLine2, isTyping: isTypingLine2 } =
    useTypingEffect({
      text: fullLine2,
      speed: 60,
      start: isLine1Complete,
      onComplete: handleLine2Complete,
    });

  // =========================
  // LINE 3
  // =========================

  const fullLine3 = line3.map((item) => item.text).join("");

  const { displayText: displayLine3, isTyping: isTypingLine3 } =
    useTypingEffect({
      text: fullLine3,
      speed: 60,
      start: isLine2Complete,
      onComplete: handleLine3Complete,
    });

  // =========================
  // LINE 4
  // =========================

  const fullLine4 = line4.map((item) => item.text).join("");

  const { displayText: displayLine4, isTyping: isTypingLine4 } =
    useTypingEffect({
      text: fullLine4,
      speed: 60,
      start: isLine3Complete,
      onComplete: handleLine4Complete,
    });

  // =========================
  // LINE 5
  // =========================

  const fullLine5 = line5.map((item) => item.text).join("");

  const { displayText: displayLine5, isTyping: isTypingLine5 } =
    useTypingEffect({
      text: fullLine5,
      speed: 60,
      start: isLine4Complete,
      onComplete: handleLine5Complete,
    });

  // =========================
  // LINE 6
  // =========================

  const fullLine6 = line6.map((item) => item.text).join("");

  const { displayText: displayLine6, isTyping: isTypingLine6 } =
    useTypingEffect({
      text: fullLine6,
      speed: 60,
      start: isLine5Complete,
      onComplete: handleLine6Complete,
    });

  // =========================
  // LINE 7
  // =========================

  const fullLine7 = line7.map((item) => item.text).join("");

  const { displayText: displayLine7, isTyping: isTypingLine7 } =
    useTypingEffect({
      text: fullLine7,
      speed: 60,
      start: isLine6Complete,
      onComplete: handleLine7Complete,
    });

  // =========================
  // LINE 8
  // =========================

  const fullLine8 = line8.map((item) => item.text).join("");

  const { displayText: displayLine8, isTyping: isTypingLine8 } =
    useTypingEffect({
      text: fullLine8,
      speed: 60,
      start: isLine7Complete,
      onComplete: handleLine8Complete,
    });

  // =========================
  // LINE 9
  // =========================

  const fullLine9 = line9.map((item) => item.text).join("");

  const { displayText: displayLine9, isTyping: isTypingLine9 } =
    useTypingEffect({
      text: fullLine9,
      speed: 60,
      start: isLine8Complete,
      onComplete: handleLine9Complete,
    });

  // =========================
  // LINE 10
  // =========================

  const fullLine10 = line10.map((item) => item.text).join("");

  const { displayText: displayLine10, isTyping: isTypingLine10 } =
    useTypingEffect({
      text: fullLine10,
      speed: 60,
      start: isLine9Complete,
      onComplete: handleLine10Complete,
    });

  // =========================
  // LINE 11
  // =========================

  const fullLine11 = line11.map((item) => item.text).join("");

  const { displayText: displayLine11, isTyping: isTypingLine11 } =
    useTypingEffect({
      text: fullLine11,
      speed: 60,
      start: isLine10Complete,
      onComplete: handleLine11Complete,
    });

  // =========================
  // LINE 12
  // =========================

  const fullLine12 = line12.map((item) => item.text).join("");

  const { displayText: displayLine12, isTyping: isTypingLine12 } =
    useTypingEffect({
      text: fullLine12,
      speed: 60,
      start: isLine11Complete,
      onComplete: handleLine12Complete,
    });
  // =========================
  // LINE 13
  // =========================

  const fullLine13 = line13.map((item) => item.text).join("");

  const { displayText: displayLine13, isTyping: isTypingLine13 } =
    useTypingEffect({
      text: fullLine13,
      speed: 60,
      start: isLine12Complete,
      onComplete: handleLine13Complete,
    });
  // =========================
  // LINE 14
  // =========================

  const fullLine14 = line14.map((item) => item.text).join("");

  const { displayText: displayLine14, isTyping: isTypingLine14 } =
    useTypingEffect({
      text: fullLine14,
      speed: 60,
      start: isLine13Complete,
      onComplete: handleLine14Complete,
    });

  // =========================
  // LINE 15
  // =========================

  const fullLine15 = line15.map((item) => item.text).join("");

  const { displayText: displayLine15, isTyping: isTypingLine15 } =
    useTypingEffect({
      text: fullLine15,
      speed: 60,
      start: isLine14Complete,
      // onComplete: handleLine15Complete,
    });

  // =================================================================
  // INDEX
  // =================================================================

  let currentIndexLine1 = 0;
  let currentIndexLine2 = 0;
  let currentIndexLine3 = 0;
  let currentIndexLine4 = 0;
  let currentIndexLine5 = 0;
  let currentIndexLine6 = 0;
  let currentIndexLine7 = 0;
  let currentIndexLine8 = 0;
  let currentIndexLine9 = 0;
  let currentIndexLine10 = 0;
  let currentIndexLine11 = 0;
  let currentIndexLine12 = 0;
  let currentIndexLine13 = 0;
  let currentIndexLine14 = 0;
  let currentIndexLine15 = 0;

  return (
    <div className="w-full h-full py-3 px-4">
      {/* ========================= */}
      {/* IMPORT */}
      {/* ========================= */}
      <ImportReactVs onComplete={handleImportComplete} />
      <br />
      {/* ========================= */}
      {/* LINE 1 */}
      {/* ========================= */}
      <p className="font-mono">
        {line1.map((item, index) => {
          const startIndex = currentIndexLine1;

          const endIndex = currentIndexLine1 + item.text.length;

          currentIndexLine1 = endIndex;

          const visibleText = displayLine1.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 1 */}
        {isTypingLine1 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 2 */}
      {/* ========================= */}
      <p className="font-mono pl-3">
        {line2.map((item, index) => {
          const startIndex = currentIndexLine2;

          const endIndex = currentIndexLine2 + item.text.length;

          currentIndexLine2 = endIndex;

          const visibleText = displayLine2.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 2 */}
        {isTypingLine2 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 3 */}
      {/* ========================= */}
      <p className="font-mono pl-6">
        {line3.map((item, index) => {
          const startIndex = currentIndexLine3;

          const endIndex = currentIndexLine3 + item.text.length;

          currentIndexLine3 = endIndex;

          const visibleText = displayLine3.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 3 */}
        {isTypingLine3 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 4 */}
      {/* ========================= */}
      <p className="font-mono pl-9">
        {line4.map((item, index) => {
          const startIndex = currentIndexLine4;

          const endIndex = currentIndexLine4 + item.text.length;

          currentIndexLine4 = endIndex;

          const visibleText = displayLine4.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 4 */}
        {isTypingLine4 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 5 */}
      {/* ========================= */}
      <p className="font-mono pl-9">
        {line5.map((item, index) => {
          const startIndex = currentIndexLine5;

          const endIndex = currentIndexLine5 + item.text.length;

          currentIndexLine5 = endIndex;

          const visibleText = displayLine5.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 5 */}
        {isTypingLine5 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 6 */}
      {/* ========================= */}
      <p className="font-mono pl-9">
        {line6.map((item, index) => {
          const startIndex = currentIndexLine6;

          const endIndex = currentIndexLine6 + item.text.length;

          currentIndexLine6 = endIndex;

          const visibleText = displayLine6.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 6 */}
        {isTypingLine6 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 7 */}
      {/* ========================= */}
      <p className="font-mono pl-12">
        {line7.map((item, index) => {
          const startIndex = currentIndexLine7;

          const endIndex = currentIndexLine7 + item.text.length;

          currentIndexLine7 = endIndex;

          const visibleText = displayLine7.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 7 */}
        {isTypingLine7 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 8 */}
      {/* ========================= */}
      <p className="font-mono pl-9">
        {line8.map((item, index) => {
          const startIndex = currentIndexLine8;

          const endIndex = currentIndexLine8 + item.text.length;

          currentIndexLine8 = endIndex;

          const visibleText = displayLine8.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 8 */}
        {isTypingLine8 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 9 */}
      {/* ========================= */}
      <p className="font-mono pl-9">
        {line9.map((item, index) => {
          const startIndex = currentIndexLine9;

          const endIndex = currentIndexLine9 + item.text.length;

          currentIndexLine9 = endIndex;

          const visibleText = displayLine9.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 9 */}
        {isTypingLine9 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 10 */}
      {/* ========================= */}
      <p className="font-mono pl-12">
        {line10.map((item, index) => {
          const startIndex = currentIndexLine10;

          const endIndex = currentIndexLine10 + item.text.length;

          currentIndexLine10 = endIndex;

          const visibleText = displayLine10.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 10 */}
        {isTypingLine10 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 11 */}
      {/* ========================= */}
      <p className="font-mono pl-9">
        {line11.map((item, index) => {
          const startIndex = currentIndexLine11;

          const endIndex = currentIndexLine11 + item.text.length;

          currentIndexLine11 = endIndex;

          const visibleText = displayLine11.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 11 */}
        {isTypingLine11 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 12 */}
      {/* ========================= */}
      <p className="font-mono pl-6">
        {line12.map((item, index) => {
          const startIndex = currentIndexLine12;

          const endIndex = currentIndexLine12 + item.text.length;

          currentIndexLine12 = endIndex;

          const visibleText = displayLine12.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 12 */}
        {isTypingLine12 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 13 */}
      {/* ========================= */}
      <p className="font-mono pl-3">
        {line13.map((item, index) => {
          const startIndex = currentIndexLine13;

          const endIndex = currentIndexLine13 + item.text.length;

          currentIndexLine13 = endIndex;

          const visibleText = displayLine13.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 13 */}
        {isTypingLine13 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 14 */}
      {/* ========================= */}
      <p className="font-mono ">
        {line14.map((item, index) => {
          const startIndex = currentIndexLine14;

          const endIndex = currentIndexLine14 + item.text.length;

          currentIndexLine14 = endIndex;

          const visibleText = displayLine14.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 14 */}
        {isTypingLine14 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 15 */}
      {/* ========================= */}
      <p className="font-mono ">
        {line15.map((item, index) => {
          const startIndex = currentIndexLine15;

          const endIndex = currentIndexLine15 + item.text.length;

          currentIndexLine15 = endIndex;

          const visibleText = displayLine15.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 15 */}
        {isTypingLine15 && <span className="text-white animate-pulse">|</span>}
      </p>
    </div>
  );
};

export default HomeVs;
