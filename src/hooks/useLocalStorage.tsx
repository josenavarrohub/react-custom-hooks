import * as React from "react";

/**
 * `useLocalStorage` is a custom hook to manage state with localStorage.
 * The data will persist even after refreshing the page or closing the browser.
 *
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {T} initialState - The initial state to use if no value is found in localStorage.
 *
 * @returns An array containing the current state and a function to update the state.
 */
const useLocalStorage = <T,>(
  key: string,
  initialState: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  // Subscription (to the external data store)
  const subscribe = React.useCallback(
    (cb: () => void) => {
      const handleStorageChange = (event: StorageEvent) => {
        if (event.key === key) cb();
      };
      window.addEventListener("storage", handleStorageChange);
      return () => window.removeEventListener("storage", handleStorageChange);
    },
    [key]
  );

  // Snapshot: returns the current state
  const getSnapshot = React.useCallback(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialState;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return initialState; // Fallback to initial state on parse error
    }
  }, [key, initialState]);

  // Server-side rendering
  const getServerSnapshot = React.useCallback(() => {
    throw new Error("useLocalStorage 🪝 is a client-only hook");
  }, []);

  // Use useSyncExternalStore to manage the state
  const state = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  // Update state and localStorage
  const setState = React.useCallback(
    (newState: T | ((prevState: T) => T)) => {
      try {
        const value = newState instanceof Function ? newState(state) : newState;
        localStorage.setItem(key, JSON.stringify(value));

        // Manually trigger a 'storage' event to notify all tabs,
        // including the one where the change occurred.
        const event = new StorageEvent("storage", {
          key,
          newValue: JSON.stringify(value),
        });
        window.dispatchEvent(event);
      } catch (error) {
        console.error("Failed to update localStorage:", error);
      }
    },
    [key, state]
  );

  return [state, setState];
};

export default useLocalStorage;
