import React, { useCallback, useState } from "react";

import ImportReactVs from "./ImportReactVs";
import useTypingEffect from "../hooks/useTypingEffect";

// redux
import { useDispatch } from "react-redux";
import { toggleWindow } from "../../../../common/store/state/windowSlice";

const ResumeVs = () => {
  const dispatch = useDispatch();
  // =========================
  // LINE 1
  // =========================

  const line1 = [
    {
      text: "const",
      color: "text-orange-700",
    },
    {
      text: " Contact",
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
      text: "Resume",
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
      text: "button",
      color: "text-green-400",
    },
    {
      text: ">",
      color: "text-white",
    },
    {
      text: "Get",
      color: "text-white",
    },

    {
      text: " Resume",
      color: "text-white",
    },
    {
      text: "</",
      color: "text-white",
    },
    {
      text: "button",
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
      text: "div",
      color: "text-green-400",
    },
    {
      text: "/>",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 7
  // =========================

  const line7 = [
    {
      text: ");",
      color: "text-yellow-400",
    },
  ];

  // =========================
  // LINE 8
  // =========================

  const line8 = [
    {
      text: "}",
      color: "text-yellow-400",
    },
  ];

  // =========================
  // LINE 9
  // =========================

  const line9 = [
    {
      text: "export",
      color: "text-purple-400",
    },
    {
      text: " default",
      color: "text-purple-400",
    },
    {
      text: " About",
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
      //  onComplete: handleLine9Complete,
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
      {/* LINE 5 button handle */}
      {/* ========================= */}
      <button
        className="cursor-pointer"
        onClick={() => dispatch(toggleWindow("resume"))}
      >
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
      </button>

      {/* ========================= */}
      {/* LINE 6 */}
      {/* ========================= */}

      <p className="font-mono pl-6">
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

      <p className="font-mono pl-3">
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

      <p className="font-mono ">
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

      <p className="font-mono ">
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
    </div>
  );
};

export default ResumeVs;
