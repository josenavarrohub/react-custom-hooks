import * as React from "react";

// Subscription (to the external data store)
const subscribe = (cb: () => void) => {
  document.addEventListener("visibilitychange", cb);

  // Clean up the subscription
  return () => {
    document.removeEventListener("visibilitychange", cb);
  };
};

// Snapshot: returns the current state
const getSnapshot = () => document.visibilityState === "visible";

// Server-side rendering
const getServerSnapshot = () => {
  throw new Error("useDocumentVisibility 🪝 is a client-only hook");
};

/**
 * `useDocumentVisibility` is a custom hook that tracks the visibility state of the document.
 * @returns {boolean} - True if the document is currently visible, false otherwise.
 */
const useDocumentVisibility = () => {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useDocumentVisibility;
