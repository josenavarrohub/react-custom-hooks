import * as React from "react";

// Types
interface UseLongPressOptions {
  onLongPress: () => void;
  onPress?: () => void;
  onRelease?: () => void;
  ms?: number;
}

/**
 * `useLongPress` is a custom hook to handle long press events on an element.
 *
 * @param {UseLongPressOptions} options - The options object.
 * @param {() => void} [options.onPress] - The cb to be called when the element is pressed.
 * @param {() => void} [options.onLongPress] - The cb to be called when the element is pressed for longer than the specified duration.
 * @param {() => void} [options.onRelease] - The cb to be called when the press is released.
 * @param {number} [options.ms=500] - The duration in ms to determine a long press.
 * @returns {React.RefObject<T>} A React ref object to be attached to the target element.
 */
const useLongPress = <T extends HTMLElement>({
  onPress,
  onLongPress,
  onRelease,
  ms = 500,
}: UseLongPressOptions): React.RefObject<T> => {
  const targetRef = React.useRef<T | null>(null);
  const timeoutRef = React.useRef<number | null>(null);
  const isPressingRef = React.useRef<boolean>(false);

  // Event handlers
  const handlePress = React.useCallback(() => {
    onPress?.();
    isPressingRef.current = true;
    timeoutRef.current = window.setTimeout(onLongPress, ms);
  }, [onPress, onLongPress, ms]);

  const handleRelease = React.useCallback(() => {
    if (isPressingRef.current) {
      onRelease?.();
      isPressingRef.current = false;
    }
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [onRelease]);

  const handleLeave = React.useCallback(() => {
    if (isPressingRef.current) handleRelease();
  }, [handleRelease]);

  React.useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    // Event listeners
    element.addEventListener("mousedown", handlePress);
    element.addEventListener("mouseup", handleRelease);
    element.addEventListener("mouseleave", handleLeave);

    element.addEventListener("touchstart", handlePress);
    element.addEventListener("touchend", handleRelease);
    element.addEventListener("touchcancel", handleRelease);

    // Cleanup function
    return () => {
      element.removeEventListener("mousedown", handlePress);
      element.removeEventListener("mouseup", handleRelease);
      element.removeEventListener("mouseleave", handleLeave);

      element.removeEventListener("touchstart", handlePress);
      element.removeEventListener("touchend", handleRelease);
      element.removeEventListener("touchcancel", handleRelease);
    };
  }, [handlePress, handleRelease, handleLeave]);

  return targetRef;
};

export default useLongPress;
