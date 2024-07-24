import * as React from "react";

// Types
interface Connection {
  addEventListener: (
    type: string,
    listener: (event: Event) => void,
    options?: boolean | AddEventListenerOptions
  ) => void;
  removeEventListener: (
    type: string,
    listener: (event: Event) => void,
    options?: boolean | EventListenerOptions
  ) => void;
  effectiveType?: string; // General type of connection (e.g., 'slow-2g', '2g', '3g', '4g').
  downlink?: number; // Current estimated effective bandwidth in Mbps.
  downlinkMax?: number; // Maximum downlink speed in Mbps that the connection can achieve.
  rtt?: number; // Round-Trip Time in milliseconds, measuring connection latency.
  saveData?: boolean; // Boolean indicating if "Save Data" mode is enabled.
  type?: string; // Type of network connection (e.g., 'wifi', 'cellular', 'ethernet').
}

interface NavigatorWithConnection extends Navigator {
  connection?: Connection;
}

interface NetworkStatus {
  isOnline: boolean;
  connection: Partial<Connection>;
}

/**
 * `useNetworkStatus` is a custom hook to get the current network status of the browser.
 */
const useNetworkStatus = (): NetworkStatus => {
  // Ref to store the latest snapshot
  const snapshotRef = React.useRef<NetworkStatus | null>(null);

  // Subscription (to the external data store)
  const subscribe = React.useCallback((cb: () => void) => {
    window.addEventListener("online", cb, { passive: true });
    window.addEventListener("offline", cb, { passive: true });
    const connection = (navigator as NavigatorWithConnection).connection;
    if (connection) {
      connection.addEventListener("change", cb, { passive: true });
    }

    // Clean up the subscription
    return () => {
      window.removeEventListener("online", cb);
      window.removeEventListener("offline", cb);
      if (connection) {
        connection.removeEventListener("change", cb);
      }
    };
  }, []);

  // Snapshot: returns the current state
  const getSnapshot = React.useCallback((): NetworkStatus => {
    const connection = (navigator as NavigatorWithConnection).connection;
    const currentSnapshot = {
      isOnline: navigator.onLine,
      connection: {
        effectiveType: connection?.effectiveType,
        downlink: connection?.downlink,
        downlinkMax: connection?.downlinkMax,
        rtt: connection?.rtt,
        saveData: connection?.saveData,
        type: connection?.type,
      },
    };

    // Check if the snapshot has changed
    if (
      !snapshotRef.current ||
      JSON.stringify(snapshotRef.current) !== JSON.stringify(currentSnapshot)
    ) {
      snapshotRef.current = currentSnapshot;
    }

    return snapshotRef.current;
  }, []);

  // Server-side rendering
  const getServerSnapshot = React.useCallback(() => {
    throw new Error("useNetworkStatus 🪝 is a client-only hook");
  }, []);

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useNetworkStatus;
