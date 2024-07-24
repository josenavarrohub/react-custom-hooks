import * as React from "react";

/**
 * `useThrottledValue` is a custom hook to throttle the update of a value.
 *
 * @param {T} value - The value to be throttled.
 * @param {number} [ms=500] - The interval in milliseconds for throttling.
 * @returns {T} - The throttled value.
 */
const useThrottledValue = <T,>(value: T, ms: number = 500): T => {
  const [throttledValue, setThrottledValue] = React.useState(value);
  const lastExecution = React.useRef<null | number>(null);

  React.useEffect(() => {
    const now = Date.now();
    const timeSinceLastExecution = lastExecution.current
      ? now - lastExecution.current
      : ms;

    const updateThrottledValue = () => {
      setThrottledValue(value);
      lastExecution.current = Date.now();
    };

    if (timeSinceLastExecution >= ms) {
      // Update immediately
      updateThrottledValue();
    } else {
      // Schedule an update
      const id = window.setTimeout(updateThrottledValue, ms);
      return () => window.clearTimeout(id);
    }
  }, [value, ms]);

  return throttledValue;
};

export default useThrottledValue;
