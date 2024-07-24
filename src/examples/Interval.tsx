import * as React from "react";

// Custom hook 🪝
import useInterval from "../hooks/useInterval";

// Component
const Interval = () => {
  // Built-in hooks 🪝 (just to show the example)
  const [count, setCount] = React.useState(0);

  // Custom hook 🪝
  const interval = useInterval(() => setCount((c) => c + 1), 1000);

  // JSX
  return (
    <>
      <h1>useInterval</h1>
      <p className="description">Use this hook 🪝 to manage an interval.</p>
      <p>Count: {count}</p>
      <div className="buttons">
        <button onClick={interval.create} disabled={interval.isActive}>
          Create interval
        </button>
        <button onClick={interval.clear} disabled={!interval.isActive}>
          Clear interval
        </button>
      </div>
    </>
  );
};

export default Interval;
