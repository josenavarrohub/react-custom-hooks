import * as React from "react";

// Events
const EVENTS = [
  "mousemove",
  "mousedown",
  "resize",
  "keydown",
  "touchstart",
  "wheel",
];

// Throttle function
const throttle = (cb: () => void, ms: number = 500) => {
  let lastExecution = 0;
  return () => {
    const now = Date.now();
    if (now - lastExecution < ms) return;
    cb();
    lastExecution = now;
  };
};

/**
 * `useIdle` is a custom hook to track whether the user is idle.
 * 
 * @param {number} ms - Idle time in milliseconds. Default is 20000 (20 seconds).
 * @returns {boolean} Returns true if the user is idle, false otherwise.
 */
const useIdle = (ms: number = 20000): boolean => {
  const [isIdle, setIsIdle] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Schedule the first timeout
    let id: number;
    const updateIsIdle = () => setIsIdle(true);
    id = window.setTimeout(updateIsIdle, ms);

    // Event handlers
    const handleEvent = throttle(() => {
      setIsIdle(false);
      window.clearTimeout(id);
      id = window.setTimeout(updateIsIdle, ms);
    });

    const handleVisibilityChange = () => {
      if (!document.hidden) handleEvent();
    };

    // Event listeners
    EVENTS.forEach((event) => window.addEventListener(event, handleEvent));
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Clean-up
    return () => {
      window.clearTimeout(id);
      EVENTS.forEach((event) => window.removeEventListener(event, handleEvent));
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [ms]);

  return isIdle;
};

export default useIdle;
