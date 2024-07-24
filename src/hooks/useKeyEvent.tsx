import * as React from "react";

// Types
interface UseKeyEventOptions {
  type?: "keydown" | "keyup" | "keypress";
  target?: EventTarget;
  listenerOptions?: AddEventListenerOptions;
}

/**
 * `useKeyEvent` is a custom hook to listen for key events.
 *
 * @param {string} key - The key to listen for.
 * @param {(event: KeyboardEvent) => void} cb - The callback function to be executed when the key event occurs.
 * @param {UseKeyEventOptions} [options={}] - Additional options for the event listener.
 */
const useKeyEvent = (
  key: string,
  cb: (event: KeyboardEvent) => void,
  options: UseKeyEventOptions = {}
) => {
  // Default options
  const { type = "keydown", target = window, listenerOptions } = options;

  // The received cb is saved as a reference.
  const cbRef = React.useRef(cb);

  // Ensure cbRef.current always holds the latest cb.
  React.useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  React.useEffect(() => {
    const handleEvent = (event: KeyboardEvent) => {
      if (key !== event.key) return;
      cbRef.current(event);
    };

    target.addEventListener(
      type,
      handleEvent as EventListener,
      listenerOptions
    );

    return () => {
      target.removeEventListener(
        type,
        handleEvent as EventListener,
        listenerOptions
      );
    };
  }, [key, target, type, listenerOptions]);
};

export default useKeyEvent;
