import * as React from "react";

/**
 * `useCountdown` is a custom hook to create and manage a countdown timer.
 *
 * @param {number} endTime - The end time in milliseconds since the Unix epoch.
 * @param {number} [ms=1000] - The interval duration in milliseconds.
 * @param {(timeLeft: number) => void} [onTick] - Optional callback invoked on each interval with the time left in milliseconds.
 * @param {() => void} [onComplete] - Optional callback invoked when the countdown completes.
 * @returns {number} - The number of intervals left until endTime.
 */
const useCountdown = (
  endTime: number,
  ms: number = 1000,
  onTick?: (timeLeft: number) => void,
  onComplete?: () => void
): number => {
  const [count, setCount] = React.useState<number>(0);
  const idRef = React.useRef<number | null>(null); // Interval id

  // The received callbacks are saved as references.
  const onTickRef = React.useRef(onTick);
  const onCompleteRef = React.useRef(onComplete);

  // Ensure the references always hold the latest callbacks but the interval is not reset!
  React.useEffect(() => {
    onTickRef.current = onTick;
  }, [onTick]);
  React.useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  React.useEffect(() => {
    const updateCount = () => {
      const newCount = Math.ceil((endTime - Date.now()) / ms);
      setCount(newCount > 0 ? newCount : 0);
      onTickRef.current?.(Math.max(newCount * ms, 0));
      if (newCount <= 0) {
        onCompleteRef.current?.();
        if (idRef.current) window.clearInterval(idRef.current);
      }
    };
    updateCount();

    idRef.current = window.setInterval(updateCount, ms);

    return () => {
      if (idRef.current) window.clearInterval(idRef.current);
    };
  }, [endTime, ms]);

  return count;
};

export default useCountdown;
