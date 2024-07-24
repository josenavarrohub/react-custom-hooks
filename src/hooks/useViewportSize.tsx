import * as React from "react";

/**
 * `useViewportSize` is a custom hook that provides the current viewport size (excluding the scrollbars).
 * The size is represented as an object with `width` and `height` properties.
 *
 * @returns {Object} An object containing the width and height of the viewport.
 * @property {number|null} width - The current width of the viewport, or null if not yet measured.
 * @property {number|null} height - The current height of the viewport, or null if not yet measured.
 */
const useViewportSize = () => {
  const [size, setSize] = React.useState<{
    width: null | number;
    height: null | number;
  }>({ width: null, height: null });

  React.useLayoutEffect(() => {
    const handleResize = () => {
      const { clientWidth, clientHeight } = window.document.documentElement;
      setSize({ width: clientWidth, height: clientHeight });
    };
	handleResize();
    
	window.addEventListener("resize", handleResize);
    
	return () => {
		window.removeEventListener("resize", handleResize);
	}
  }, []);

  return size;
};

export default useViewportSize;
