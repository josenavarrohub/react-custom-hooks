import React from "react";

// Custom hook 🪝
import useEventListener from "../hooks/useEventListener";

// Component
const EventListener = () => {
  // Built-in hooks 🪝 (just to show the example)
  const btn1Ref = React.useRef(null);
  const btn2Ref = React.useRef(null);

  // Custom hook 🪝
  useEventListener(btn1Ref, "click", (e) => {
    console.log("Click on button 1", e);
    window.alert(`Click on button 1 ${e}`);
  });

  useEventListener(btn2Ref, "click", (e) => {
    console.log("Click on button 2", e);
    window.alert(`Click on button 2 ${e}`);
  });

  // JSX
  return (
    <>
      <h1>useEventListener</h1>
      <p className="description">
        Use this hook 🪝 to attach an event listener to an HTML element. You can
        pass either an HTML element directly or a
        React.RefObject&lt;HTMLElement&gt; reference.
      </p>

      <p>Trigger events:</p>
      <div className="buttons">
        <button ref={btn1Ref}>Button 1</button>
        <button ref={btn2Ref}>Button 2</button>
      </div>
    </>
  );
};

export default EventListener;
