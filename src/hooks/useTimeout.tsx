import * as React from "react";

/**
 * `useTimeout` is a custom hook to manage a timeout.
 *
 * @param {Function} cb - The function to be executed.
 * @param {number} ms - The timeout duration in milliseconds.
 * @returns {{ create: Function, clear: Function, isActive: boolean }} An object containing the create and clear functions and the isActive state.
 */
const useTimeout = (cb: () => void, ms: number) => {
  // The received cb is saved as a reference.
  const cbRef = React.useRef(cb);
  const [isActive, setIsActive] = React.useState(false);

  // Ensure cbRef.current always holds the latest cb but the timeout is not reset!
  React.useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  // Set up the timeout using the current cb reference.
  React.useEffect(() => {
    if (!isActive) return;
    const id = window.setTimeout(() => {
      cbRef.current();
      setIsActive(false);
    }, ms);
    return () => {
		window.clearTimeout(id);
	}
  }, [isActive, ms]);

  // These functions are wrapped in `React.useCallback` to ensure they have stable identities
  // across re-renders (referential equality). So they can be used as props in memoized
  // components without problems.
  const create = React.useCallback(() => setIsActive(true), []);
  const clear = React.useCallback(() => setIsActive(false), []);

  return { create, clear, isActive };
};

export default useTimeout;
