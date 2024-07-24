import * as React from "react";

/**
 * `useWindowSize` is a custom hook that provides the current window size (including the scrollbars).
 * The size is represented as an object with `width` and `height` properties.
 *
 * @returns {Object} An object containing the width and height of the window.
 * @property {number|null} width - The current width of the window, or null if not yet measured.
 * @property {number|null} height - The current height of the window, or null if not yet measured.
 */
const useWindowSize = () => {
  const [size, setSize] = React.useState<{
    width: null | number;
    height: null | number;
  }>({ width: null, height: null });

  React.useLayoutEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
		window.removeEventListener("resize", handleResize);
	}
  }, []);

  return size;
};

export default useWindowSize;
