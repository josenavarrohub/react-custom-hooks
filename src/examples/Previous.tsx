import * as React from "react";

// Custom hook 🪝
import usePrevious from "../hooks/usePrevious";

// Component
const Previous = () => {
  // Built-in hooks 🪝 (just to show the example)
  const [fruit, setFruit] = React.useState('🍌');

  // Custom hook 🪝
  const previousfruit = usePrevious(fruit);

  // JSX
  return (
    <>
      <h1>usePrevious</h1>
      <p className="description">
        Use this hook 🪝 to access the previous state of a variable.
      </p>

      <table>
        <thead>
          <tr>
            <th>Previous fruit</th>
            <th>Current fruit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{previousfruit ?? 'null'}</td>
            <td>{fruit}</td>
          </tr>
        </tbody>
      </table>

      <p>Update fruit to:</p>
      <div className="buttons">
        <button onClick={() => setFruit("🥑")}>🥑</button>
        <button onClick={() => setFruit("🍉")}>🍉</button>
		<button onClick={() => setFruit("🥝")}>🥝</button>
      </div>
    </>
  );
};

export default Previous;
