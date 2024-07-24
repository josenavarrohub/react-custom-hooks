import * as React from "react";

/**
 * `useEventListener` is a custom hook that attaches an event listener to an HTML element.
 *
 * @param {HTMLElement | React.RefObject<HTMLElement>} target - The HTML element or the HTML reference to which the event listener will be attached.
 * @param {string} type - The type of the event to listen for.
 * @param {(event: Event) => void} cb - The callback function that will be invoked when the event is triggered.
 * @param {boolean | AddEventListenerOptions | undefined} [options] - Optional parameter. An options object that specifies characteristics about the event listener.
 */
const useEventListener = (
  target: HTMLElement | React.RefObject<HTMLElement>,
  type: string,
  cb: (event: Event) => void,
  options?: boolean | AddEventListenerOptions
) => {
  // The received cb is saved as a reference.
  const cbRef = React.useRef(cb);

  // // Ensure cbRef.current always holds the latest cb.
  React.useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  // Attach the event listener using the current cb reference.
  React.useEffect(() => {
    const targetElement = "current" in target ? target.current : target;
    if (!targetElement?.addEventListener) return;

    targetElement.addEventListener(type, cbRef.current, options);

    return () => {
      targetElement.removeEventListener(type, cbRef.current, options);
    };
  }, [target, type, options]);
};

export default useEventListener;
