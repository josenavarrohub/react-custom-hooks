import * as React from "react";

// Types
interface Position {
  x: null | number;
  y: null | number;
}

/**
 * `useWindowScroll` is a custom hook to track and manipulate the window scroll position.
 *
 * @returns {[Position, (arg1: ScrollToOptions | number, arg2?: number) => void]}
 *   - `position`: An object containing the current scroll positions (`x` and `y`) of the window.
 *   - `scrollTo`: A function to scroll to a specific position, accepting either a `ScrollToOptions` object
 *                 or x and y coordinates. Default scroll behavior is smooth.
 */
const useWindowScroll = (): [
  Position,
  (arg1: ScrollToOptions | number, arg2?: number) => void
] => {
  const [position, setPosition] = React.useState<Position>({
    x: null,
    y: null,
  });

  React.useLayoutEffect(() => {
    const handleScroll = () => {
      setPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
		window.removeEventListener("scroll", handleScroll);
	}
  }, []);

  // These functions are wrapped in `React.useCallback` to ensure they have stable identities
  // across re-renders (referential equality). So they can be used as props in memoized
  // components without problems.
  const scrollTo = React.useCallback(
    (arg1: ScrollToOptions | number, arg2?: number) => {
      if (typeof arg1 === "number" && typeof arg2 === "number") {
        // If both arguments are numbers, use them as x and y coordinates
        window.scrollTo({ left: arg1, top: arg2, behavior: "smooth" });
      } else if (typeof arg1 === "object") {
        // If the first argument is an object, use it as the options object with default smooth behavior
        window.scrollTo({ behavior: "smooth", ...arg1 });
      }
    },
    []
  );

  return [position, scrollTo];
};

export default useWindowScroll;
