import * as React from "react";

// Custom hook 🪝
import useKeyEvent from "../hooks/useKeyEvent";

// Styles for the square (just to show the example)
const squareStyle: React.CSSProperties = {
  width: "50px",
  height: "50px",
  backgroundColor: "darkgreen",
  position: "relative",
};

// Component
const KeyEvent = () => {
  // Built-in hooks 🪝 (just to show the example)
  const [position, setPosition] = React.useState({ top: 0, left: 0 });

  // Event handler
  const handleKeyEvent = (event: KeyboardEvent) => {
    event.preventDefault();
    setPosition((p) => {
      switch (event.key) {
        case "ArrowUp":
          return { ...p, top: p.top - 10 };
        case "ArrowDown":
          return { ...p, top: p.top + 10 };
        case "ArrowLeft":
          return { ...p, left: p.left - 10 };
        case "ArrowRight":
          return { ...p, left: p.left + 10 };
        default:
          return p;
      }
    });
  };

  // Custom hook 🪝
  useKeyEvent("ArrowUp", handleKeyEvent);
  useKeyEvent("ArrowDown", handleKeyEvent);
  useKeyEvent("ArrowLeft", handleKeyEvent);
  useKeyEvent("ArrowRight", handleKeyEvent);

  // JSX
  return (
    <>
      <h1>useKeyEvent</h1>
      <p className="description">Use this hook 🪝 to listen for key events.</p>

      <p>Press the arrow keys to move the green square...</p>
      <div
        style={{
          ...squareStyle,
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      ></div>
    </>
  );
};

export default KeyEvent;
