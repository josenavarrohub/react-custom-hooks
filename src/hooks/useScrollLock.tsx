import * as React from "react";

/**
 * `useScrollLock` is a custom hook that locks the scroll of the body element.
 * It disables scrolling when the hook is active and restores the original scroll
 * setting when the component unmounts.
 */
const useScrollLock = () => {
  React.useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
	
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
};

export default useScrollLock;
