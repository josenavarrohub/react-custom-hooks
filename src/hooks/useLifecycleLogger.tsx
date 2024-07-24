import * as React from "react";

/**
 * `useLifecycleLogger` is a custom hook that logs component lifecycle events with colours and emojis.
 * 
 * @param {string} componentName - The name of the component to log.
 * @param {...unknown[]} additionalInfo - Additional arguments to log.
 */
const useLifecycleLogger = (componentName: string, ...additionalInfo: unknown[]) => {
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    // Updated (re-renders)
    if (isMounted.current) {
      console.log(
        `%c🔄 Re-render: ${componentName}`,
        "color: skyblue; font-weight: bold;",
        additionalInfo
      );
    }

    // Mounted (First render)
    if (!isMounted.current) {
      console.log(
        `%c🟢 Mounted: ${componentName}`,
        "color: green; font-weight: bold;",
        additionalInfo
      );
      isMounted.current = true;
    }
  }, [componentName, additionalInfo]);

  React.useEffect(() => {
    // Unmounted
    return () => {
      console.log(
        `%c🔴 Unmounted: ${componentName}`,
        "color: red; font-weight: bold;"
      );
    };
  }, [componentName]);
};

export default useLifecycleLogger;
