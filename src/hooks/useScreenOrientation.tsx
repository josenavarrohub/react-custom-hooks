import * as React from "react";

// Types
interface Orientation {
  angle: null | number;
  type: null | string;
}

/**
 * `useScreenOrientation` is a custom hook to get the screen orientation.
 * 
 * @returns {Orientation} The current screen orientation.
 */
const useScreenOrientation = (): Orientation => {
  const [orientation, setOrientation] = React.useState<Orientation>({
    angle: null,
    type: null,
  });

  React.useLayoutEffect(() => {
    const handleChange = () => {
      const { angle, type } = window.screen.orientation;
      setOrientation({ angle, type });
    };
    handleChange();

    window.screen.orientation.addEventListener("change", handleChange);

    return () => {
      window.screen.orientation.removeEventListener("change", handleChange);
    };
  }, []);

  return orientation;
};

export default useScreenOrientation;
