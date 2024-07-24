import * as React from "react";

/**
 * `useDefault` is a custom hook that manages state with a default value.
 *
 * @param {T | null | undefined} initialState - The initial state value.
 * @param {T} defaultState - The default state value.
 * @returns {[T, React.Dispatch<React.SetStateAction<T | null | undefined>>]} Returns a tuple where the first element is the current state (or the default state if the current state is `null` or `undefined`), and the second element is the state setter function.
 */
const useDefault = <T,>(
  initialState: T | null | undefined,
  defaultState: T
): [T, React.Dispatch<React.SetStateAction<T | null | undefined>>] => {
  const [state, setState] = React.useState(initialState);
  return [state ?? defaultState, setState];
};

export default useDefault;
