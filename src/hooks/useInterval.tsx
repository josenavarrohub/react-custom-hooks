import * as React from "react";

/**
 * `useInterval` is a custom hook to manage an interval.
 *
 * @param {Function} cb - The callback function to be executed on each interval.
 * @param {number} ms - The interval duration in milliseconds.
 * @param {boolean} runOnCreate - Whether the callback should run immediately when the interval is created.
 * @returns {{ create: Function, clear: Function, isActive: boolean }} An object containing the create and clear functions and the isActive state.
 */
const useInterval = (
  cb: () => void,
  ms: number,
  runOnCreate: boolean = false
) => {
  // The received cb is saved as a reference.
  const cbRef = React.useRef(cb);
  const [isActive, setIsActive] = React.useState(false);

  // Ensure cbRef.current always holds the latest cb but the interval is not reset!
  React.useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  // Set up the interval using the current cb reference.
  React.useEffect(() => {
    if (!isActive) return;
	if (runOnCreate) cbRef.current();
    const id = window.setInterval(cbRef.current, ms);
    return () => {
		window.clearInterval(id);
	}
  }, [isActive, ms, runOnCreate]);

  // These functions are wrapped in `React.useCallback` to ensure they have stable identities
  // across re-renders (referential equality). So they can be used as props in memoized
  // components without problems.
  const create = React.useCallback(() => setIsActive(true), []);
  const clear = React.useCallback(() => setIsActive(false), []);

  return { create, clear, isActive };
};

export default useInterval;
