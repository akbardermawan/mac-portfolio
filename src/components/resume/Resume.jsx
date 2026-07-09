import { useSelector, useDispatch } from "react-redux";
import { closeWindow, focusWindow } from "../../common/store/state/windowSlice";
import { useState, useEffect } from "react";
import { LuDownload } from "react-icons/lu";

// react-pdf
import { Document, Page, pdfjs } from "react-pdf";

// ✅ worker fix (Vite friendly)
import workerSrc from "pdfjs-dist/build/pdf.worker.min?url";
import { div } from "three/src/nodes/math/OperatorNode.js";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

import { IoMdArrowBack } from "react-icons/io";

const Resume = () => {
  const win = useSelector((state) => state.window.windows.resume);
  const dispatch = useDispatch();

  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // ✅ PDF state
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1); // 🔥 zoom control

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleMouseDown = (e) => {
    if (isFullscreen) return;

    dispatch(focusWindow("resume"));

    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  if (!win.isOpen) return null;

  return (
    <div>
      {/* Pc or Laptop */}
      <div
        style={{
          zIndex: win.zIndex,
          left: isFullscreen ? 0 : position.x,
          top: isFullscreen ? 0 : position.y,
          width: isFullscreen ? "100vw" : "38rem",
          height: isFullscreen ? "100vh" : "auto",
        }}
        className="absolute bg-white rounded-xl shadow-lg overflow-hidden hidden md:block"
      >
        {/* HEADER */}
        <div
          onMouseDown={handleMouseDown}
          className="flex justify-between items-center py-2 px-4 bg-gray-200 rounded-t-xl"
        >
          <div className="flex gap-2">
            <button onClick={() => dispatch(closeWindow("resume"))}>🔴</button>
            <button onClick={() => setIsMinimized(!isMinimized)}>🟡</button>
            <button onClick={() => setIsFullscreen(!isFullscreen)}>🟢</button>
          </div>

          <h2 className="text-sm font-medium">Resume.pdf</h2>

          <a href="/files/resume.pdf" download title="Download resume">
            <LuDownload className="w-5 h-5" />
          </a>
        </div>

        {/* CONTENT */}
        {!isMinimized && (
          <div
            onMouseDown={() => dispatch(focusWindow("resume"))}
            className="p-4 overflow-auto bg-gray-100"
            style={{
              height: isFullscreen ? "calc(100vh - 50px)" : "500px",
            }}
          >
            {/* ZOOM CONTROLS */}
            <div className="flex justify-center gap-2 mb-4">
              <button
                onClick={() => setScale((s) => Math.max(s - 0.2, 0.6))}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                ➖
              </button>

              <span className="text-sm">{Math.round(scale * 100)}%</span>

              <button
                onClick={() => setScale((s) => Math.min(s + 0.2, 2))}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                ➕
              </button>
            </div>

            {/* PDF VIEWER */}
            <Document
              file="/files/resume.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              loading="Loading PDF..."
            >
              {Array.from(new Array(numPages || 0), (_, index) => (
                <Page
                  key={index}
                  pageNumber={index + 1}
                  scale={scale}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              ))}
            </Document>
          </div>
        )}
      </div>
      {/* __________________________________ */}
      {/* HP or Android */}
      <div
        style={{
          zIndex: win.zIndex,
        }}
        className="absolute top-0 left-0 w-full h-screen bg-white overflow-hidden flex flex-col md:hidden"
      >
        {/* HEADER */}
        <div className="w-full flex-shrink-0">
          <div className="flex p-5 justify-between items-center border border-t-white border-x-white border-b-gray-200">
            {/* Back button */}
            <div
              className="flex items-center cursor-pointer "
              onClick={() => dispatch(closeWindow("resume"))}
            >
              <IoMdArrowBack className="w-5 h-5 text-black mr-2" />
              <span className="font-georama text-blue-500">Go Back</span>
            </div>

            <h2 className="text-xl text-gray-500 font-georama font-bold transform -translate-x-1/5">
              Resume
            </h2>

            <a href="/files/resume.pdf" download title="Download resume">
              <LuDownload className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div
          onMouseDown={() => dispatch(focusWindow("resume"))}
          className="p-4 overflow-auto bg-gray-100"
        >
          <img src="/images/resume.JPG" alt="resume" />
        </div>
      </div>
    </div>
  );
};

export default Resume;
