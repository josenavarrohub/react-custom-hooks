import * as React from "react";

// Custom hook 🪝
import useMouseInOut from "../hooks/useMouseInOut";

// Component
const MouseInOut = () => {
  // Built-in hooks 🪝 (just to show the example)
  const [hasLeft, setHasLeft] = React.useState(false);

  // Custom hook 🪝
  useMouseInOut(
    () => setHasLeft(true),
    () => setHasLeft(false)
  );

  // JSX
  return (
    <>
      <h1>useMouseInOut</h1>
      <p className="description">
        Use this hook 🪝 to execute callback functions when the mouse leaves or
        enters the document.
      </p>
      <p>
        <strong>hasLeft?</strong>:{" "}
        <span className={hasLeft ? "off" : "on"}>{hasLeft ? "Yes" : "No"}</span>
      </p>
    </>
  );
};

export default MouseInOut;
