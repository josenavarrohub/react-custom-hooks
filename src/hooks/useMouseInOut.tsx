import * as React from "react";

/**
 * `useMouseInOut` is a custom hook to execute callback functions when the mouse
 * leaves or enters the document.
 *
 * @param {() => void} onOut - The callback function to be executed when the mouse leaves the document.
 * @param {() => void} [onIn] - Optional callback function to be executed when the mouse enters the document.
 */
const useSomeName = (onOut: () => void, onIn?: () => void) => {
  // The received callbacks are saved as references.
  const onOutRef = React.useRef(onOut);
  const onInRef = React.useRef(onIn);

  // Ensure cbRef.current always holds the latest cb.
  React.useEffect(() => {
    onOutRef.current = onOut;
  }, [onOut]);

  // Ensure cbRef.current always holds the latest cb.
  React.useEffect(() => {
    onInRef.current = onIn;
  }, [onIn]);

  React.useEffect(() => {
    const handleMouseOut = (event: MouseEvent) => {
      // Check if there's no related target, which means the mouse has left the window
      if (event.relatedTarget) return;
      onOutRef.current();
    };

    const handleMouseEnter = () => {
      if (!onInRef.current) return;
      onInRef.current();
    };

    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);
};

export default useSomeName;
