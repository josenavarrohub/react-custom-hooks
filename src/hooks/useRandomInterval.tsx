import * as React from "react";

/**
 * `useRandomInterval` is a custom hook to manage a timeout at random intervals.
 *
 * @param {Function} cb - The callback function to be executed after each interval.
 * @param {number} minMs - The minimum interval time in milliseconds.
 * @param {number} maxMs - The maximum interval time in milliseconds.
 * @returns {{ create: Function, clear: Function, isActive: boolean }} An object containing the create and clear functions and the isActive state.
 */
const useRandomInterval = (cb: () => void, minMs: number, maxMs: number) => {
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
	let id: number;
    const tick = () => {
      const randomMs = Math.floor(Math.random() * (maxMs - minMs)) + minMs;
      id = window.setTimeout(() => {
        cbRef.current();
        tick();
      }, randomMs);
    };
    tick();
    return () => {
		window.clearTimeout(id);
	}
  }, [isActive, minMs, maxMs]);

  // These functions are wrapped in `React.useCallback` to ensure they have stable identities
  // across re-renders (referential equality). So they can be used as props in memoized
  // components without problems.
  const create = React.useCallback(() => setIsActive(true), []);
  const clear = React.useCallback(() => setIsActive(false), []);

  return { create, clear, isActive };
};

export default useRandomInterval;
