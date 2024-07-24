import * as React from "react";

// Types
type State<T> = {
  previous: T[];
  current: T | null;
  next: T[];
};

type Action<T> = {
  type: "set" | "undo" | "redo" | "reset";
  payload?: T;
};

// Initial state
const initialState: State<null> = {
  previous: [],
  current: null,
  next: [],
};

// Reducer function
const reducer = <T,>(prevState: State<T>, action: Action<T>): State<T> => {
  const { previous, current, next } = prevState;

  switch (action.type) {
    case "set":
      if (current === action.payload) return prevState;
      return {
        previous: [...previous, current],
        current: action.payload,
        next: [],
      } as State<T>;

    case "undo":
      if (previous.length === 0) return { ...prevState };
      return {
        previous: previous.slice(0, -1),
        current: previous.at(-1),
        next: [current, ...next],
      } as State<T>;

    case "redo":
      if (next.length === 0) return prevState;
      return {
        previous: [...previous, current],
        current: next.at(0),
        next: next.slice(1),
      } as State<T>;

    case "reset":
      return {
        ...initialState,
        current: action.payload,
      } as State<T>;

    default:
      throw new Error("Unknown action");
  }
};

/**
 * `useHistory` is a custom hook to manage state history.
 *
 * @param {T} initialValue - The initial state value.
 * @returns An object containing:
 * - previous: An array of previous state values that can be reached through undo.
 * - current: The current state value.
 * - next: An array of next state values that can be reached through redo.
 * - undo: A function to revert the state to the previous value, if available.
 * - redo: A function to advance the state to the next value, if available.
 * - set: A function to set the current state to a new value.
 * - reset: A function to reset the state to its initial value.
 */
const useHistory = <T,>(initialValue: T) => {
  // State
  const [state, dispatch] = React.useReducer(reducer, {
    ...initialState,
    current: initialValue,
  } as State<T>);
  const { previous, current, next } = state;

  // Ref to persist initialValue. This way, if you pass a reference value, it won't
  // nullify useCallback.
  const initialValueRef = React.useRef(initialValue);

  // These functions are wrapped in `React.useCallback` to ensure they have stable identities
  // across re-renders (referential equality). So they can be used as props in memoized
  // components without problems.
  const undo = React.useCallback(() => {
    dispatch({ type: "undo" });
  }, []);

  const redo = React.useCallback(() => {
    dispatch({ type: "redo" });
  }, []);

  const set = React.useCallback((newValue: T) => {
    dispatch({ type: "set", payload: newValue });
  }, []);

  const reset = React.useCallback(() => {
    dispatch({ type: "reset", payload: initialValueRef.current });
  }, []);

  return {
    previous,
    current,
    next,
    undo,
    redo,
    set,
    reset,
  };
};

export default useHistory;
