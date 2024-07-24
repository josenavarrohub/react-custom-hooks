import * as React from "react";

/**
 * `useToggle` is a custom hook that toggles a boolean state.
 *
 * @param {boolean} [initialState=false] - The initial state. Defaults to `false` if not provided.
 * @returns {[boolean, function]} A tuple where:
 * - The first element is the current state (a boolean).
 * - The second element is a function to toggle the state or set it to a specific boolean value.
 */
const useToogle = (
  initialState: boolean = false
): [boolean, (newState?: boolean) => void] => {
  const [state, setState] = React.useState(initialState);
  const setToggled = (newState?: boolean) => {
    setState((prevState) => newState ?? !prevState);
  };

  // `setToggled` is wrapped in `React.useCallback` to ensure it has a stable identity
  // across re-renders (referential equality). So it can be used as a prop in a memoized
  // component without problems.
  return [state, React.useCallback(setToggled, [])];
};

export default useToogle;
