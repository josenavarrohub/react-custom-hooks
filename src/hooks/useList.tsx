import * as React from "react";

/**
 * `useList` is a custom hook that manages an array of items of type `T`.
 *
 * @param {T[]} [initialState=[]] The initial state of the list.
 * @returns {Object} The list object with the following properties:
 * - `list`: The current state of the list.
 * - `append(item: T)`: A function to add an item to the end of the list.
 * - `insertAt(index: number, item: T)`: A function to insert an item at a specific index in the list.
 * - `removeAt(index: number)`: A function to remove an item at a specific index from the list.
 * - `replaceAt(index: number, item: T)`: A function to replace an item at a specific index in the list with a new item.
 * - `set(newState: T[])`: A function to replace the current list with a new list.
 * - `clear()`: A function to remove all items from the list.
 * - `size`: The current number of items in the list.
 */
const useList = <T,>(initialState: T[] = []) => {
  const [list, setList] = React.useState(initialState);

  // These functions are wrapped in `React.useCallback` to ensure they have stable identities
  // across re-renders (referential equality). So they can be used as props in memoized
  // components without problems.
  const append = React.useCallback((item: T) => {
    setList((l) => [...l, item]);
  }, []);

  const insertAt = React.useCallback((index: number, item: T) => {
    setList((l) => l.toSpliced(index, 0, item));
  }, []);

  const removeAt = React.useCallback((index: number) => {
    setList((l) => l.toSpliced(index, 1));
  }, []);

  const replaceAt = React.useCallback((index: number, item: T) => {
    setList((l) => l.toSpliced(index, 1, item));
  }, []);

  const set = React.useCallback((newState: T[]) => {
    setList(newState);
  }, []);

  const clear = React.useCallback(() => {
    setList([]);
  }, []);

  return {
    list,
    append,
    insertAt,
    removeAt,
    replaceAt,
    set,
    clear,
    size: list.length,
  };
};

export default useList;
