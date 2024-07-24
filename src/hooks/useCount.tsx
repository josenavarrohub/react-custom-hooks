import * as React from "react";

/**
 * `useCount` is a custom hook that manages a count state with optional minimum and maximum bounds.
 *
 * @param {number} [initialState=0] - The initial state value of the count.
 * @param {number} [min] - Optional minimum value the count can be decreased to.
 * @param {number} [max] - Optional maximum value the count can be increased to.
 * @throws Will throw an error if the initialState is less than min or more than max.
 * @returns An object containing:
 * - count: The current state value of the count.
 * - set: A function to update the count state with a new value, respecting the min and max bound.
 * - decrease: A function to decrease the count by 1, respecting the min bound.
 * - increase: A function to increase the count by 1, respecting the max bound.
 * - reset: A function to reset the count to its initial state.
 */
const useCount = (initialState = 0, min?: number, max?: number) => {
  if (typeof min === "number" && initialState < min)
    throw new Error(`Min. value: ${min}`);
  if (typeof max === "number" && initialState > max)
    throw new Error(`Max. value: ${max}`);

  const [count, setCount] = React.useState(initialState);

  // These functions are wrapped in `React.useCallback` to ensure they have stable identities
  // across re-renders (referential equality). So they can be used as props in memoized
  // components without problems.
  const set = React.useCallback(
    (newState: number) => {
      setCount(() => {
        if (typeof min === "number" && newState < min) return min;
        if (typeof max === "number" && newState > max) return max;
        return newState;
      });
    },
    [min, max]
  );

  const decrease = React.useCallback(
    () =>
      setCount((c) =>
        typeof min === "number" ? (c - 1 < min ? min : c - 1) : c - 1
      ),
    [min]
  );

  const increase = React.useCallback(
    () =>
      setCount((c) => {
        return typeof max === "number" ? (c + 1 > max ? max : c + 1) : c + 1;
      }),
    [max]
  );

  const reset = React.useCallback(() => setCount(initialState), [initialState]);

  return { count, set, decrease, increase, reset };
};

export default useCount;
