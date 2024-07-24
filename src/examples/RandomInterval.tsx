import * as React from "react";

// Custom hook 🪝
import useRandomInterval from "../hooks/useRandomInterval";

// Component
const RandomInterval = () => {
  // Built-in hooks 🪝 (just to show the example)
  const [count, setCount] = React.useState(0);

  // Custom hook 🪝
  const randomInterval = useRandomInterval(
    () => setCount((c) => c + 1),
    1000,
    4000
  );

  // JSX
  return (
    <>
      <h1>useRandomInterval</h1>
      <p className="description">
        Use this hook 🪝 to manage a timeout at random intervals.
      </p>
      <p>Count: {count}</p>
      <div className="buttons">
        <button
          onClick={randomInterval.create}
          disabled={randomInterval.isActive}
        >
          Create random interval
        </button>
        <button
          onClick={randomInterval.clear}
          disabled={!randomInterval.isActive}
        >
          Clear random interval
        </button>
      </div>
    </>
  );
};

export default RandomInterval;
