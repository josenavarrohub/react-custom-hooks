import * as React from "react";

/**
 * `usePrevious` is a custom hook that allows you to access the previous state
 * of a variable.
 *
 * @param {T} currentState - The current state of the variable you want to track.
 * @returns {T | null} The previous state of the variable.
 */
const usePrevious = <T,>(currentState: T): T | null => {
  const [prevState, setPrevState] = React.useState<T | null>(null);
  const [curState, setCurState] = React.useState<T | null>(currentState);

  if (currentState !== curState) {
    setPrevState(curState);
    setCurState(currentState);
  }

  return prevState;
};

export default usePrevious;
