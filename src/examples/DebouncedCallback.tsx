import * as React from "react";

// Custom hook 🪝
import useDebouncedCallback from "../hooks/useDebouncedCallback";

// Component
const DebouncedCallback = () => {
  // Built-in hooks 🪝 (just to show the example)
  const [text, setText] = React.useState<null | string>(null);

  // Debounced event handler (using the custom hook 🪝)
  const debouncedSetText = useDebouncedCallback(setText, 600);

  // JSX
  return (
    <>
      <h1>useDebouncedCallback</h1>
      <p className="description">
        Use this hook 🪝 to delay the execution of a function.
        <br />
        Useful for handling frequently occurring actions (e.g., searching in a
        text field, resizing the window...).
      </p>

      <p>
        <strong>text:</strong> {text}{" "}
      </p>

      <input
        placeholder="Enter a text..."
        onChange={(e) => debouncedSetText(e.target.value)}
      />
    </>
  );
};

export default DebouncedCallback;
