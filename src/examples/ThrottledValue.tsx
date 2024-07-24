import * as React from "react";

// Custom hook 🪝
import useThrottledValue from "../hooks/useThrottledValue";

// Component
const ThrottledValue = () => {
  // Built-in hooks 🪝 (just to show the example)
  const [text, setText] = React.useState<null | string>(null);

  // Custom hook 🪝
  const throttledText = useThrottledValue(text, 600);

  // JSX
  return (
    <>
      <h1>useThrottledValue</h1>
      <p className="description">Use this hook 🪝 to throttle the update of a value.</p>

      <p>
        <strong>text:</strong> {text}<br />
		<strong>throttledText:</strong> {throttledText}
      </p>

      <input
        placeholder="Enter a text..."
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default ThrottledValue;
