// Custom hook 🪝
import useClipboard from "../hooks/useClipboard";

// Component
const Clipboard = () => {
  // Custom hook 🪝
  const [clipboard, setClipboard] = useClipboard();

  // JSX
  return (
    <>
      <h1>useClipboard</h1>
      <p className="description">
        Use this hook 🪝 to copy text to the clipboard.
      </p>
      <p>
        The current <strong>clipboard</strong> is: {clipboard ?? "null"}
      </p>
      <p>Copy to the clipboard:</p>
      <div className="buttons">
        <button onClick={() => setClipboard("🍌")}>🍌</button>
        <button onClick={() => setClipboard("🥑")}>🥑</button>
      </div>
    </>
  );
};

export default Clipboard;
