import * as React from "react";

/**
 * `useDebounceCallback` is a custom hook that delays the execution of a function.
 *
 * @param {Function} cb - The function to be executed.
 * @param {number} [ms=500] The delay in milliseconds. Defaults to 500.
 * @returns {Function} The debounced function.
 */
const useDebouncedCallback = <T,>(
  cb: (...args: T[]) => void,
  ms: number = 500
) => {
  const cbRef = React.useRef(cb); // Callback
  const idRef = React.useRef<number | null>(null); // Timeout id

  // Ensure cbRef.current always holds the latest cb but the timeout is not reset!
  React.useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  // Clear timeout if the component unmounts
  React.useEffect(() => {
    return () => {
      if (idRef.current) window.clearTimeout(idRef.current);
    };
  }, []);

  // These functions are wrapped in `React.useCallback` to ensure they have stable identities
  // across re-renders (referential equality). So they can be used as props in memoized
  // components without problems.
  const debouncedCallback = React.useCallback(
    (...args: T[]) => {
      if (idRef.current) window.clearTimeout(idRef.current);
      idRef.current = window.setTimeout(() => cbRef.current(...args), ms);
    },
    [ms]
  );

  return debouncedCallback;
};

export default useDebouncedCallback;
