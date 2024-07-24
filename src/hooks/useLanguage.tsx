import * as React from "react";

// Subscription (to the external data store)
const subscribe = (cb: () => void) => {
  window.addEventListener("languagechange", cb);

  // Clean up the subscription
  return () => {
    window.removeEventListener("languagechange", cb);
  };
};

// Snapshot: returns the current state
const getSnapshot = () => navigator.language;

// Server-side rendering
const getServerSnapshot = () => {
	throw new Error("useLanguage 🪝 is a client-only hook");
};

/**
 * `useLanguage` is a custom hook that returns the preferred language of the user.
 */
const useLanguage = () => {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useLanguage;
