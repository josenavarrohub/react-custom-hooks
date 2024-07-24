import * as React from "react";

/**
 * `useQueue` is a custom hook that manages a queue data structure. The queue follows the 
 * FIFO (First-In-First-Out) principle, meaning the first item that gets added to the queue 
 * is the first one to be removed.
 *
 * @param {T[]} [initialState=[]] The initial state of the queue.
 * @returns {Object} The queue object with the following properties:
 * - `queue`: The current state of the queue.
 * - `enqueue(item: T)`: A function to add an item to the end of the queue.
 * - `dequeue()`: A function to remove an item from the front of the queue.
 * - `clear()`: A function to remove all items from the queue.
 * - `peek`: The item at the front of the queue.
 * - `size`: The current number of items in the queue.
 */
const useQueue = <T,>(initialState: T[] = []) => {
  const [queue, setQueue] = React.useState(initialState);

  // These functions are wrapped in `React.useCallback` to ensure they have stable identities
  // across re-renders (referential equality). So they can be used as props in memoized
  // components without problems.
  const enqueue = React.useCallback((item: T) => {
    setQueue((q) => [...q, item]);
  }, []);

  const dequeue = React.useCallback(() => {
    setQueue((q) => q.slice(1));
  }, []);

  const clear = React.useCallback(() => {
    setQueue([]);
  }, []);

  return {
    queue,
    enqueue,
    dequeue,
    clear,
    peek: queue.at(0),
    size: queue.length,
  };
};

export default useQueue;
