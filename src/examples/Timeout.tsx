import * as React from "react";

// Custom hook 🪝
import useTimeout from "../hooks/useTimeout";

// Component
const Timeout = () => {
  // Built-in hooks 🪝 (just to show the example)
  const [padlock, setPadlock] = React.useState("🔒");

  // Custom hook 🪝
  const timeout = useTimeout(() => setPadlock("🔒"), 3000);

  // JSX
  return (
    <>
      <h1>useTimeout</h1>
      <p className="description">
        Use this hook 🪝 to manage a timeout.
        <br />
        Useful for a single delayed action (e.g. displaying a message after a
        delay).
      </p>
      <p>
        Padlock: {padlock} {timeout.isActive && "(It will be closed after 3s)"}
      </p>
      <div className="buttons">
        <button
          onClick={() => {
            setPadlock("🔓");
            timeout.create();
          }}
          disabled={timeout.isActive}
        >
          Create timeout
        </button>
        <button
          onClick={() => {
            setPadlock("🔒");
            timeout.clear();
          }}
          disabled={!timeout.isActive}
        >
          Clear timeout
        </button>
      </div>
    </>
  );
};

export default Timeout;
