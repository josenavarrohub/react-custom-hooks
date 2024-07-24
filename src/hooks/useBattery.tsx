import * as React from "react";

// Types
interface Battery {
  supported: boolean; // Indicates if the battery API is supported by the browser
  level: number; // Current battery level as a percentage (0 to 1)
  charging: boolean; // Indicates if the battery is currently charging
  chargingTime: number; // Time until the battery is fully charged, in seconds (0 if not charging)
  dischargingTime: number; // Time until the battery is fully discharged, in seconds (Infinity if not discharging)
}

interface BatteryManager extends EventTarget {
  level: number;
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  addEventListener: (
    type:
      | "levelchange"
      | "chargingchange"
      | "chargingtimechange"
      | "dischargingtimechange",
    listener: (this: BatteryManager, ev: Event) => void,
    options?: boolean | AddEventListenerOptions
  ) => void;
  removeEventListener: (
    type:
      | "levelchange"
      | "chargingchange"
      | "chargingtimechange"
      | "dischargingtimechange",
    listener: (this: BatteryManager, ev: Event) => void,
    options?: boolean | EventListenerOptions
  ) => void;
}

interface NavigatorWithBattery extends Navigator {
  getBattery?: () => Promise<BatteryManager>;
}

/**
 * `useBattery` is a custom hook to get battery information.
 *
 * @returns {Battery | null} The battery status, or null if the battery API is not supported.
 */
const useBattery = () => {
  const [state, setState] = React.useState<null | Battery>(null);

  React.useEffect(() => {
    const nav = navigator as NavigatorWithBattery;

    // Unsupported API
    if (!nav.getBattery) {
      setState({
        supported: false,
        level: 1,
        charging: false,
        chargingTime: 0,
        dischargingTime: Infinity,
      });
      return;
    }

    // Supported API
    let battery: BatteryManager | null = null;

    const handleChange = () => {
      if (!battery) return;
      setState({
        supported: true,
        level: battery.level,
        charging: battery.charging,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime,
      });
    };

    nav.getBattery().then((b) => {
      battery = b;
      handleChange();
      battery.addEventListener("levelchange", handleChange);
      battery.addEventListener("chargingchange", handleChange);
      battery.addEventListener("chargingtimechange", handleChange);
      battery.addEventListener("dischargingtimechange", handleChange);
    });

    return () => {
      if (!battery) return;
      battery.removeEventListener("levelchange", handleChange);
      battery.removeEventListener("chargingchange", handleChange);
      battery.removeEventListener("chargingtimechange", handleChange);
      battery.removeEventListener("dischargingtimechange", handleChange);
    };
  }, []);

  return state;
};

export default useBattery;
