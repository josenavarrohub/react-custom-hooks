import * as React from "react";

// Types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type State = { [key: string]: any };
type Setter = (arg: State | ((prevState: State) => State)) => void;

/**
 * `useObject` is a custom hook that manages state as an object and provides
 *  a setter function to update the state (with a plain object or an
 *  updater function).
 *
 * @param {State} initialState - The initial state of the object.
 * @returns {[State, Setter]} - Returns the current state object and a function to update the state.
 */
const useObject = (initialState: State): [State, Setter] => {
  const [object, setObject] = React.useState(initialState);

  const set:Setter = React.useCallback((arg) => {
    setObject((o) => {
      const o2 = typeof arg !== "function" ? arg : arg(o);
      return { ...o, ...o2 };
    });
  }, []);

  return [object, set];
};

export default useObject;
