import * as React from "react";

/**
 * `useDebounceValue` is a custom hook to delay the update of a value.
 *
 * @param {T} value - The value to be debounced.
 * @param {number} [ms=500] - The delay in milliseconds. Defaults to 500.
 * @returns {T} - The debounced value.
 */
const useDebouncedValue = <T,>(value: T, ms: number = 500): T => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const id = window.setTimeout(() => setDebouncedValue(value), ms);
    return () => window.clearTimeout(id);
  }, [value, ms]);

  return debouncedValue;
};

export default useDebouncedValue;
