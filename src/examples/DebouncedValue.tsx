import * as React from "react";

// Custom hook 🪝
import useDebouncedValue from "../hooks/useDebouncedValue";

// Component
const DebouncedValue = () => {
  // Built-in hooks 🪝 (just to show the example)
  const [text, setText] = React.useState<null | string>(null);

  // Custom hook 🪝
  const debouncedText = useDebouncedValue(text, 600);

  // JSX
  return (
    <>
      <h1>useDebouncedValue</h1>
      <p className="description">Use this hook 🪝 to delay the update of a value.</p>

      <p>
        <strong>text:</strong> {text}<br />
		<strong>debouncedText:</strong> {debouncedText}
      </p>

      <input
        placeholder="Enter a text..."
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default DebouncedValue;
