import * as React from "react";

/**
 * useClickOutside is a custom hook to execute a callback when clicking outside a specified element.
 *
 * @param {() => void} cb The callback function to be executed when a click outside the element occurs.
 * @returns {React.RefObject<HTMLElement | null>} A ref object that should be attached to the element you want to monitor for outside clicks.
 */
const useClickOutside = (cb: () => void) => {
  const ref = React.useRef<HTMLElement | null>(null);

  // The received cb is saved as a reference.
  const cbRef = React.useRef(cb);

  // Ensure cbRef.current always holds the latest cb.
  React.useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  // Attach the event listener using the current cb reference.
  React.useEffect(() => {
    const handleEvent = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        cbRef.current();
      }
    };

	// This ensures that the outside click detection happens before
	// any React-managed click events (bubbling phase).
    window.document.addEventListener("click", handleEvent, true); // Capturing phase

    return () => {
		window.document.removeEventListener("click", handleEvent, true);
    };
  }, []);

  return ref;
};

export default useClickOutside;
