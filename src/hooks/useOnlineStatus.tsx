import * as React from "react";

// Subscription (to the external data store)
const subscribe = (cb: () => void) => {
  window.addEventListener("online", cb, { passive: true });
  window.addEventListener("offline", cb, { passive: true });

  // Clean up the subscription
  return () => {
    window.removeEventListener("online", cb);
    window.removeEventListener("offline", cb);
  };
};

// Snapshot: returns the current state
const getSnapshot = () => navigator.onLine;

// Server-side rendering
const getServerSnapshot = () => {
  throw new Error("useOnlineStatus 🪝 is a client-only hook");
};

/**
 * `useOnlineStatus` is a custom hook that returns the current online
 * status of the browser.
 */
const useOnlineStatus = () => {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useOnlineStatus;
