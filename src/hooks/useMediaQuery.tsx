import * as React from "react";

/**
 * `useMediaQuery` is a custom hook to determine if a media query matches the current window size.
 *
 * @param {string} query - The media query to evaluate. This should be a valid CSS media query.
 * @returns {boolean} - True if the media query matches, false otherwise.
 */
const useMediaQuery = (query: string): boolean => {
  // Memoize the MediaQueryList object to avoid recalculating it on every render
  const mediaQueryList = React.useMemo(() => window.matchMedia(query), [query]);

  // Subscription (to the external data store)
  const subscribe = React.useCallback((cb: () => void) => {
    mediaQueryList.addEventListener("change", cb);

    // Clean up the subscription
    return () => {
		mediaQueryList.removeEventListener("change", cb);
	}
  }, [mediaQueryList]);

  // Snapshot: returns the current state
  const getSnapshot = () => mediaQueryList.matches;

  // Server-side rendering
  const getServerSnapshot = () => {
    throw new Error("useMediaQuery 🪝 is a client-only hook");
  };

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useMediaQuery;
