import React, { useCallback, useState } from "react";

import ImportReactVs from "./ImportReactVs";
import useTypingEffect from "../hooks/useTypingEffect";

const AboutVsFull = () => {
  // =========================
  // LINE 1
  // =========================

  const line1 = [
    {
      text: "const",
      color: "text-orange-700",
    },
    {
      text: " About",
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
      text: "const",
      color: "text-orange-700",
    },
    {
      text: " Skills",
      color: "text-purple-400",
    },
    {
      text: " =",
      color: "text-white",
    },
    {
      text: " [",
      color: "text-yellow-400",
    },
  ];

  // =========================
  // LINE 3
  // =========================

  const line3 = [
    {
      text: "{",
      color: "text-purple-400",
    },
  ];

  // =========================
  // LINE 4
  // =========================

  const line4 = [
    {
      text: "id:",
      color: "text-white",
    },
    {
      text: " 1",
      color: "text-green-200",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 5
  // =========================

  const line5 = [
    {
      text: "category:",
      color: "text-white",
    },
    {
      text: ' "Frontend"',
      color: "text-blue-300",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 6
  // =========================

  const line6 = [
    {
      text: "Tecnologies:",
      color: "text-white",
    },
    {
      text: " [",
      color: "text-blue-400",
    },
    {
      text: ' "React.js"',
      color: "text-blue-300",
    },
    {
      text: ",",
      color: "text-white",
    },
    {
      text: ' "Vue.js"',
      color: "text-blue-300",
    },
    {
      text: ",",
      color: "text-white",
    },
    {
      text: ' "Next.js"',
      color: "text-blue-300",
    },
    {
      text: " ]",
      color: "text-blue-400",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 7
  // =========================

  const line7 = [
    {
      text: "}",
      color: "text-purple-400",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 8
  // =========================

  const line8 = [
    {
      text: "{",
      color: "text-purple-400",
    },
  ];

  // =========================
  // LINE 9
  // =========================

  const line9 = [
    {
      text: "id:",
      color: "text-white",
    },
    {
      text: " 2",
      color: "text-green-200",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 10
  // =========================

  const line10 = [
    {
      text: "category:",
      color: "text-white",
    },
    {
      text: ' "Mobile"',
      color: "text-blue-300",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 11
  // =========================

  const line11 = [
    {
      text: "Tecnologies:",
      color: "text-white",
    },
    {
      text: " [",
      color: "text-blue-400",
    },
    {
      text: ' "React Native"',
      color: "text-blue-300",
    },
    {
      text: ",",
      color: "text-white",
    },
    {
      text: ' "Flutter"',
      color: "text-blue-300",
    },
    {
      text: ",",
      color: "text-white",
    },
    {
      text: ' "Expo"',
      color: "text-blue-300",
    },
    {
      text: " ]",
      color: "text-blue-400",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 12
  // =========================

  const line12 = [
    {
      text: "}",
      color: "text-purple-400",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 13
  // =========================

  const line13 = [
    {
      text: "{",
      color: "text-purple-400",
    },
  ];

  // =========================
  // LINE 14
  // =========================

  const line14 = [
    {
      text: "id:",
      color: "text-white",
    },
    {
      text: " 3",
      color: "text-green-200",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 15
  // =========================

  const line15 = [
    {
      text: "category:",
      color: "text-white",
    },
    {
      text: ' "Styling"',
      color: "text-blue-300",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 16
  // =========================

  const line16 = [
    {
      text: "Tecnologies:",
      color: "text-white",
    },
    {
      text: " [",
      color: "text-blue-400",
    },
    {
      text: ' "CSS3"',
      color: "text-blue-300",
    },
    {
      text: ",",
      color: "text-white",
    },
    {
      text: ' "TailwindCSS"',
      color: "text-blue-300",
    },
    {
      text: ",",
      color: "text-white",
    },
    {
      text: ' "Sass"',
      color: "text-blue-300",
    },
    {
      text: " ]",
      color: "text-blue-400",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];
  // =========================
  // LINE 17
  // =========================

  const line17 = [
    {
      text: "}",
      color: "text-purple-400",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 18
  // =========================

  const line18 = [
    {
      text: "{",
      color: "text-purple-400",
    },
  ];

  // =========================
  // LINE 19
  // =========================

  const line19 = [
    {
      text: "id:",
      color: "text-white",
    },
    {
      text: " 4",
      color: "text-green-200",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 20
  // =========================

  const line20 = [
    {
      text: "category:",
      color: "text-white",
    },
    {
      text: ' "Backend"',
      color: "text-blue-300",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 21
  // =========================

  const line21 = [
    {
      text: "Tecnologies:",
      color: "text-white",
    },
    {
      text: " [",
      color: "text-blue-400",
    },
    {
      text: ' "Node.js"',
      color: "text-blue-300",
    },
    {
      text: ",",
      color: "text-white",
    },
    {
      text: ' "Express.js"',
      color: "text-blue-300",
    },
    {
      text: ",",
      color: "text-white",
    },
    {
      text: ' "Nest.js"',
      color: "text-blue-300",
    },
    {
      text: ",",
      color: "text-white",
    },
    {
      text: ' "Hono"',
      color: "text-blue-300",
    },
    {
      text: " ]",
      color: "text-blue-400",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];
  // =========================
  // LINE 22
  // =========================

  const line22 = [
    {
      text: "}",
      color: "text-purple-400",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 23
  // =========================

  const line23 = [
    {
      text: "{",
      color: "text-purple-400",
    },
  ];

  // =========================
  // LINE 24
  // =========================

  const line24 = [
    {
      text: "id:",
      color: "text-white",
    },
    {
      text: " 5",
      color: "text-green-200",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 25
  // =========================

  const line25 = [
    {
      text: "category:",
      color: "text-white",
    },
    {
      text: ' "Database"',
      color: "text-blue-300",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];

  // =========================
  // LINE 26
  // =========================

  const line26 = [
    {
      text: "Tecnologies:",
      color: "text-white",
    },
    {
      text: " [",
      color: "text-blue-400",
    },
    {
      text: ' "MySql"',
      color: "text-blue-300",
    },
    {
      text: ",",
      color: "text-white",
    },
    {
      text: ' "PostgreSql"',
      color: "text-blue-300",
    },
    {
      text: ",",
      color: "text-white",
    },
    {
      text: ' "MongoDb"',
      color: "text-blue-300",
    },
    {
      text: " ]",
      color: "text-blue-400",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];
  // =========================
  // LINE 27
  // =========================

  const line27 = [
    {
      text: "}",
      color: "text-purple-400",
    },
    {
      text: ",",
      color: "text-white",
    },
  ];
  // =========================
  // LINE 28
  // =========================

  const line28 = [
    {
      text: "]",
      color: "text-yellow-400",
    },
    {
      text: ";",
      color: "text-white",
    },
  ];
  // =========================
  // LINE 29
  // =========================

  const line29 = [
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
  // LINE 30
  // =========================

  const line30 = [
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
  // LINE 31
  // =========================

  const line31 = [
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
      text: "About",
      color: "text-white",
    },
    {
      text: " Me",
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
  // LINE 32
  // =========================

  const line32 = [
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
  // LINE 33
  // =========================

  const line33 = [
    {
      text: ");",
      color: "text-yellow-400",
    },
  ];
  // =========================
  // LINE 34
  // =========================

  const line34 = [
    {
      text: "}",
      color: "text-yellow-400",
    },
  ];

  // =========================
  // LINE 35
  // =========================

  const line35 = [
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

  const [isLine10Complete, setIsLine10Complete] = useState(false);

  const [isLine11Complete, setIsLine11Complete] = useState(false);

  const [isLine12Complete, setIsLine12Complete] = useState(false);

  const [isLine13Complete, setIsLine13Complete] = useState(false);

  const [isLine14Complete, setIsLine14Complete] = useState(false);

  const [isLine15Complete, setIsLine15Complete] = useState(false);

  const [isLine16Complete, setIsLine16Complete] = useState(false);

  const [isLine17Complete, setIsLine17Complete] = useState(false);

  const [isLine18Complete, setIsLine18Complete] = useState(false);

  const [isLine19Complete, setIsLine19Complete] = useState(false);

  const [isLine20Complete, setIsLine20Complete] = useState(false);

  const [isLine21Complete, setIsLine21Complete] = useState(false);

  const [isLine22Complete, setIsLine22Complete] = useState(false);

  const [isLine23Complete, setIsLine23Complete] = useState(false);

  const [isLine24Complete, setIsLine24Complete] = useState(false);

  const [isLine25Complete, setIsLine25Complete] = useState(false);

  const [isLine26Complete, setIsLine26Complete] = useState(false);

  const [isLine27Complete, setIsLine27Complete] = useState(false);

  const [isLine28Complete, setIsLine28Complete] = useState(false);

  const [isLine29Complete, setIsLine29Complete] = useState(false);

  const [isLine30Complete, setIsLine30Complete] = useState(false);

  const [isLine31Complete, setIsLine31Complete] = useState(false);

  const [isLine32Complete, setIsLine32Complete] = useState(false);

  const [isLine33Complete, setIsLine33Complete] = useState(false);

  const [isLine34Complete, setIsLine34Complete] = useState(false);

  const [isLine35Complete, setIsLine35Complete] = useState(false);

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
  // =========================
  // LINE 15 COMPLETE
  // =========================

  const handleLine15Complete = useCallback(() => {
    setIsLine15Complete(true);
  }, []);

  // =========================
  // LINE 16 COMPLETE
  // =========================

  const handleLine16Complete = useCallback(() => {
    setIsLine16Complete(true);
  }, []);

  // =========================
  // LINE 17 COMPLETE
  // =========================

  const handleLine17Complete = useCallback(() => {
    setIsLine17Complete(true);
  }, []);

  // =========================
  // LINE 18 COMPLETE
  // =========================

  const handleLine18Complete = useCallback(() => {
    setIsLine18Complete(true);
  }, []);

  // =========================
  // LINE 19 COMPLETE
  // =========================

  const handleLine19Complete = useCallback(() => {
    setIsLine19Complete(true);
  }, []);

  // =========================
  // LINE 20 COMPLETE
  // =========================

  const handleLine20Complete = useCallback(() => {
    setIsLine20Complete(true);
  }, []);

  // =========================
  // LINE 21 COMPLETE
  // =========================

  const handleLine21Complete = useCallback(() => {
    setIsLine21Complete(true);
  }, []);

  // =========================
  // LINE 22 COMPLETE
  // =========================

  const handleLine22Complete = useCallback(() => {
    setIsLine22Complete(true);
  }, []);
  // =========================
  // LINE 23 COMPLETE
  // =========================

  const handleLine23Complete = useCallback(() => {
    setIsLine23Complete(true);
  }, []);
  // =========================
  // LINE 24 COMPLETE
  // =========================

  const handleLine24Complete = useCallback(() => {
    setIsLine24Complete(true);
  }, []);
  // =========================
  // LINE 25 COMPLETE
  // =========================

  const handleLine25Complete = useCallback(() => {
    setIsLine25Complete(true);
  }, []);
  // =========================
  // LINE 26 COMPLETE
  // =========================

  const handleLine26Complete = useCallback(() => {
    setIsLine26Complete(true);
  }, []);

  // =========================
  // LINE 27 COMPLETE
  // =========================

  const handleLine27Complete = useCallback(() => {
    setIsLine27Complete(true);
  }, []);

  // =========================
  // LINE 28 COMPLETE
  // =========================

  const handleLine28Complete = useCallback(() => {
    setIsLine28Complete(true);
  }, []);

  // =========================
  // LINE 29 COMPLETE
  // =========================

  const handleLine29Complete = useCallback(() => {
    setIsLine29Complete(true);
  }, []);

  // =========================
  // LINE 30 COMPLETE
  // =========================

  const handleLine30Complete = useCallback(() => {
    setIsLine30Complete(true);
  }, []);

  // =========================
  // LINE 31 COMPLETE
  // =========================

  const handleLine31Complete = useCallback(() => {
    setIsLine31Complete(true);
  }, []);

  // =========================
  // LINE 32 COMPLETE
  // =========================

  const handleLine32Complete = useCallback(() => {
    setIsLine32Complete(true);
  }, []);

  // =========================
  // LINE 33 COMPLETE
  // =========================

  const handleLine33Complete = useCallback(() => {
    setIsLine33Complete(true);
  }, []);
  // =========================
  // LINE 34 COMPLETE
  // =========================

  const handleLine34Complete = useCallback(() => {
    setIsLine34Complete(true);
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
      onComplete: handleLine15Complete,
    });

  // =========================
  // LINE 16
  // =========================

  const fullLine16 = line16.map((item) => item.text).join("");

  const { displayText: displayLine16, isTyping: isTypingLine16 } =
    useTypingEffect({
      text: fullLine16,
      speed: 60,
      start: isLine15Complete,
      onComplete: handleLine16Complete,
    });

  // =========================
  // LINE 17
  // =========================

  const fullLine17 = line17.map((item) => item.text).join("");

  const { displayText: displayLine17, isTyping: isTypingLine17 } =
    useTypingEffect({
      text: fullLine17,
      speed: 60,
      start: isLine16Complete,
      onComplete: handleLine17Complete,
    });

  // =========================
  // LINE 18
  // =========================

  const fullLine18 = line18.map((item) => item.text).join("");

  const { displayText: displayLine18, isTyping: isTypingLine18 } =
    useTypingEffect({
      text: fullLine18,
      speed: 60,
      start: isLine17Complete,
      onComplete: handleLine18Complete,
    });

  // =========================
  // LINE 19
  // =========================

  const fullLine19 = line19.map((item) => item.text).join("");

  const { displayText: displayLine19, isTyping: isTypingLine19 } =
    useTypingEffect({
      text: fullLine19,
      speed: 60,
      start: isLine18Complete,
      onComplete: handleLine19Complete,
    });

  // =========================
  // LINE 20
  // =========================

  const fullLine20 = line20.map((item) => item.text).join("");

  const { displayText: displayLine20, isTyping: isTypingLine20 } =
    useTypingEffect({
      text: fullLine20,
      speed: 60,
      start: isLine19Complete,
      onComplete: handleLine20Complete,
    });

  // =========================
  // LINE 21
  // =========================

  const fullLine21 = line21.map((item) => item.text).join("");

  const { displayText: displayLine21, isTyping: isTypingLine21 } =
    useTypingEffect({
      text: fullLine21,
      speed: 60,
      start: isLine20Complete,
      onComplete: handleLine21Complete,
    });

  // =========================
  // LINE 22
  // =========================

  const fullLine22 = line22.map((item) => item.text).join("");

  const { displayText: displayLine22, isTyping: isTypingLine22 } =
    useTypingEffect({
      text: fullLine22,
      speed: 60,
      start: isLine21Complete,
      onComplete: handleLine22Complete,
    });

  // =========================
  // LINE 23
  // =========================

  const fullLine23 = line23.map((item) => item.text).join("");

  const { displayText: displayLine23, isTyping: isTypingLine23 } =
    useTypingEffect({
      text: fullLine23,
      speed: 60,
      start: isLine22Complete,
      onComplete: handleLine23Complete,
    });

  // =========================
  // LINE 24
  // =========================

  const fullLine24 = line24.map((item) => item.text).join("");

  const { displayText: displayLine24, isTyping: isTypingLine24 } =
    useTypingEffect({
      text: fullLine24,
      speed: 60,
      start: isLine23Complete,
      onComplete: handleLine24Complete,
    });
  // =========================
  // LINE 25
  // =========================

  const fullLine25 = line25.map((item) => item.text).join("");

  const { displayText: displayLine25, isTyping: isTypingLine25 } =
    useTypingEffect({
      text: fullLine25,
      speed: 60,
      start: isLine24Complete,
      onComplete: handleLine25Complete,
    });
  // =========================
  // LINE 26
  // =========================

  const fullLine26 = line26.map((item) => item.text).join("");

  const { displayText: displayLine26, isTyping: isTypingLine26 } =
    useTypingEffect({
      text: fullLine26,
      speed: 60,
      start: isLine25Complete,
      onComplete: handleLine26Complete,
    });
  // =========================
  // LINE 27
  // =========================

  const fullLine27 = line27.map((item) => item.text).join("");

  const { displayText: displayLine27, isTyping: isTypingLine27 } =
    useTypingEffect({
      text: fullLine27,
      speed: 60,
      start: isLine26Complete,
      onComplete: handleLine27Complete,
    });

  // =========================
  // LINE 28
  // =========================

  const fullLine28 = line28.map((item) => item.text).join("");

  const { displayText: displayLine28, isTyping: isTypingLine28 } =
    useTypingEffect({
      text: fullLine28,
      speed: 60,
      start: isLine27Complete,
      onComplete: handleLine28Complete,
    });
  // =========================
  // LINE 29
  // =========================

  const fullLine29 = line29.map((item) => item.text).join("");

  const { displayText: displayLine29, isTyping: isTypingLine29 } =
    useTypingEffect({
      text: fullLine29,
      speed: 60,
      start: isLine28Complete,
      onComplete: handleLine29Complete,
    });
  // =========================
  // LINE 30
  // =========================

  const fullLine30 = line30.map((item) => item.text).join("");

  const { displayText: displayLine30, isTyping: isTypingLine30 } =
    useTypingEffect({
      text: fullLine30,
      speed: 60,
      start: isLine29Complete,
      onComplete: handleLine30Complete,
    });
  // =========================
  // LINE 31
  // =========================

  const fullLine31 = line31.map((item) => item.text).join("");

  const { displayText: displayLine31, isTyping: isTypingLine31 } =
    useTypingEffect({
      text: fullLine31,
      speed: 60,
      start: isLine30Complete,
      onComplete: handleLine31Complete,
    });
  // =========================
  // LINE 32
  // =========================

  const fullLine32 = line32.map((item) => item.text).join("");

  const { displayText: displayLine32, isTyping: isTypingLine32 } =
    useTypingEffect({
      text: fullLine32,
      speed: 60,
      start: isLine31Complete,
      onComplete: handleLine32Complete,
    });
  // =========================
  // LINE 33
  // =========================

  const fullLine33 = line33.map((item) => item.text).join("");

  const { displayText: displayLine33, isTyping: isTypingLine33 } =
    useTypingEffect({
      text: fullLine33,
      speed: 60,
      start: isLine32Complete,
      onComplete: handleLine33Complete,
    });
  // =========================
  // LINE 34
  // =========================

  const fullLine34 = line34.map((item) => item.text).join("");

  const { displayText: displayLine34, isTyping: isTypingLine34 } =
    useTypingEffect({
      text: fullLine34,
      speed: 60,
      start: isLine33Complete,
      onComplete: handleLine34Complete,
    });
  // =========================
  // LINE 35
  // =========================

  const fullLine35 = line35.map((item) => item.text).join("");

  const { displayText: displayLine35, isTyping: isTypingLine35 } =
    useTypingEffect({
      text: fullLine35,
      speed: 60,
      start: isLine34Complete,
      // onComplete: handleLine16Complete,
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
  let currentIndexLine16 = 0;
  let currentIndexLine17 = 0;
  let currentIndexLine18 = 0;
  let currentIndexLine19 = 0;
  let currentIndexLine20 = 0;
  let currentIndexLine21 = 0;
  let currentIndexLine22 = 0;
  let currentIndexLine23 = 0;
  let currentIndexLine24 = 0;
  let currentIndexLine25 = 0;
  let currentIndexLine26 = 0;
  let currentIndexLine27 = 0;
  let currentIndexLine28 = 0;
  let currentIndexLine29 = 0;
  let currentIndexLine30 = 0;
  let currentIndexLine31 = 0;
  let currentIndexLine32 = 0;
  let currentIndexLine33 = 0;
  let currentIndexLine34 = 0;
  let currentIndexLine35 = 0;

  // =========================
  // RETURN
  // =========================

  return (
    <div className="custom-scrollbar w-full h-[90vh] overflow-y-scroll pt-3 pb-12 px-4 bg-black">
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

      <p className="font-mono pl-6">
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

      <p className="font-mono pl-6">
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

      <p className="font-mono pl-9">
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

      <p className="font-mono pl-6">
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

      <p className="font-mono pl-9">
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

      <p className="font-mono pl-9">
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

      {/* ========================= */}
      {/* LINE 16 */}
      {/* ========================= */}

      <p className="font-mono pl-9">
        {line16.map((item, index) => {
          const startIndex = currentIndexLine16;

          const endIndex = currentIndexLine16 + item.text.length;

          currentIndexLine16 = endIndex;

          const visibleText = displayLine16.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 16 */}
        {isTypingLine16 && <span className="text-white animate-pulse">|</span>}
      </p>

      {/* ========================= */}
      {/* LINE 17 */}
      {/* ========================= */}

      <p className="font-mono pl-6">
        {line17.map((item, index) => {
          const startIndex = currentIndexLine17;

          const endIndex = currentIndexLine17 + item.text.length;

          currentIndexLine17 = endIndex;

          const visibleText = displayLine17.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 17 */}
        {isTypingLine17 && <span className="text-white animate-pulse">|</span>}
      </p>

      {/* ========================= */}
      {/* LINE 18 */}
      {/* ========================= */}

      <p className="font-mono pl-6">
        {line18.map((item, index) => {
          const startIndex = currentIndexLine18;

          const endIndex = currentIndexLine18 + item.text.length;

          currentIndexLine18 = endIndex;

          const visibleText = displayLine18.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 18 */}
        {isTypingLine18 && <span className="text-white animate-pulse">|</span>}
      </p>

      {/* ========================= */}
      {/* LINE 19 */}
      {/* ========================= */}

      <p className="font-mono pl-9">
        {line19.map((item, index) => {
          const startIndex = currentIndexLine19;

          const endIndex = currentIndexLine19 + item.text.length;

          currentIndexLine19 = endIndex;

          const visibleText = displayLine19.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 19 */}
        {isTypingLine19 && <span className="text-white animate-pulse">|</span>}
      </p>

      {/* ========================= */}
      {/* LINE 20 */}
      {/* ========================= */}

      <p className="font-mono pl-9">
        {line20.map((item, index) => {
          const startIndex = currentIndexLine20;

          const endIndex = currentIndexLine20 + item.text.length;

          currentIndexLine20 = endIndex;

          const visibleText = displayLine20.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 20 */}
        {isTypingLine20 && <span className="text-white animate-pulse">|</span>}
      </p>

      {/* ========================= */}
      {/* LINE 21 */}
      {/* ========================= */}

      <p className="font-mono pl-9">
        {line21.map((item, index) => {
          const startIndex = currentIndexLine21;

          const endIndex = currentIndexLine21 + item.text.length;

          currentIndexLine21 = endIndex;

          const visibleText = displayLine21.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 21 */}
        {isTypingLine21 && <span className="text-white animate-pulse">|</span>}
      </p>

      {/* ========================= */}
      {/* LINE 22 */}
      {/* ========================= */}

      <p className="font-mono pl-6">
        {line22.map((item, index) => {
          const startIndex = currentIndexLine22;

          const endIndex = currentIndexLine22 + item.text.length;

          currentIndexLine22 = endIndex;

          const visibleText = displayLine22.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 22 */}
        {isTypingLine22 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 23 */}
      {/* ========================= */}

      <p className="font-mono pl-6">
        {line23.map((item, index) => {
          const startIndex = currentIndexLine23;

          const endIndex = currentIndexLine23 + item.text.length;

          currentIndexLine23 = endIndex;

          const visibleText = displayLine23.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 23 */}
        {isTypingLine23 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 24 */}
      {/* ========================= */}

      <p className="font-mono pl-9">
        {line24.map((item, index) => {
          const startIndex = currentIndexLine24;

          const endIndex = currentIndexLine24 + item.text.length;

          currentIndexLine24 = endIndex;

          const visibleText = displayLine24.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 24 */}
        {isTypingLine24 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 25 */}
      {/* ========================= */}

      <p className="font-mono pl-9">
        {line25.map((item, index) => {
          const startIndex = currentIndexLine25;

          const endIndex = currentIndexLine25 + item.text.length;

          currentIndexLine25 = endIndex;

          const visibleText = displayLine25.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 25 */}
        {isTypingLine25 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 26 */}
      {/* ========================= */}

      <p className="font-mono pl-9">
        {line26.map((item, index) => {
          const startIndex = currentIndexLine26;

          const endIndex = currentIndexLine26 + item.text.length;

          currentIndexLine26 = endIndex;

          const visibleText = displayLine26.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 26 */}
        {isTypingLine26 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 27 */}
      {/* ========================= */}

      <p className="font-mono pl-6">
        {line27.map((item, index) => {
          const startIndex = currentIndexLine27;

          const endIndex = currentIndexLine27 + item.text.length;

          currentIndexLine27 = endIndex;

          const visibleText = displayLine27.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 27 */}
        {isTypingLine27 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 28 */}
      {/* ========================= */}

      <p className="font-mono pl-3">
        {line28.map((item, index) => {
          const startIndex = currentIndexLine28;

          const endIndex = currentIndexLine28 + item.text.length;

          currentIndexLine28 = endIndex;

          const visibleText = displayLine28.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 28 */}
        {isTypingLine28 && <span className="text-white animate-pulse">|</span>}
      </p>

      {/* ========================= */}
      {/* LINE 29 */}
      {/* ========================= */}

      <p className="font-mono pl-3">
        {line29.map((item, index) => {
          const startIndex = currentIndexLine29;

          const endIndex = currentIndexLine29 + item.text.length;

          currentIndexLine29 = endIndex;

          const visibleText = displayLine29.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 29 */}
        {isTypingLine29 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 30 */}
      {/* ========================= */}

      <p className="font-mono pl-6">
        {line30.map((item, index) => {
          const startIndex = currentIndexLine30;

          const endIndex = currentIndexLine30 + item.text.length;

          currentIndexLine30 = endIndex;

          const visibleText = displayLine30.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 30 */}
        {isTypingLine27 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 31 */}
      {/* ========================= */}

      <p className="font-mono pl-9">
        {line31.map((item, index) => {
          const startIndex = currentIndexLine31;

          const endIndex = currentIndexLine31 + item.text.length;

          currentIndexLine31 = endIndex;

          const visibleText = displayLine31.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 31 */}
        {isTypingLine31 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 32 */}
      {/* ========================= */}

      <p className="font-mono pl-6">
        {line32.map((item, index) => {
          const startIndex = currentIndexLine32;

          const endIndex = currentIndexLine32 + item.text.length;

          currentIndexLine32 = endIndex;

          const visibleText = displayLine32.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 32 */}
        {isTypingLine32 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 33 */}
      {/* ========================= */}

      <p className="font-mono pl-3">
        {line33.map((item, index) => {
          const startIndex = currentIndexLine33;

          const endIndex = currentIndexLine33 + item.text.length;

          currentIndexLine33 = endIndex;

          const visibleText = displayLine33.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 33 */}
        {isTypingLine33 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 34 */}
      {/* ========================= */}

      <p className="font-mono">
        {line34.map((item, index) => {
          const startIndex = currentIndexLine34;

          const endIndex = currentIndexLine34 + item.text.length;

          currentIndexLine34 = endIndex;

          const visibleText = displayLine34.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 34 */}
        {isTypingLine34 && <span className="text-white animate-pulse">|</span>}
      </p>
      {/* ========================= */}
      {/* LINE 35 */}
      {/* ========================= */}
      <br />
      <p className="font-mono ">
        {line35.map((item, index) => {
          const startIndex = currentIndexLine35;

          const endIndex = currentIndexLine35 + item.text.length;

          currentIndexLine35 = endIndex;

          const visibleText = displayLine35.slice(startIndex, endIndex);

          return (
            <span key={index} className={item.color}>
              {visibleText}
            </span>
          );
        })}

        {/* Cursor Line 35 */}
        {isTypingLine35 && <span className="text-white animate-pulse">|</span>}
      </p>
    </div>
  );
};

export default AboutVsFull;
