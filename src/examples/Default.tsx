// Custom hook 🪝
import useDefault from "../hooks/useDefault";

// Component
const Default = () => {
  // Custom hook 🪝
  const [fruit, setFruit] = useDefault("🍌", "🥑");

  // JSX
  return (
    <>
      <h1>useDefault</h1>
      <p className="description">
        Use this hook 🪝 to provide a default (fallback) value when the state is
        set to null or undefined.
      </p>

      <table>
        <thead>
          <tr>
            <th>Current fruit</th>
            <th>Default fruit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{fruit}</td>
            <td>🥑</td>
          </tr>
        </tbody>
      </table>

      <p>Update fruit to:</p>
      <div className="buttons">
        <button onClick={() => setFruit("🍌")}>🍌</button>
        <button onClick={() => setFruit("🍉")}>🍉</button>
        <button onClick={() => setFruit(null)}>null</button>
        <button onClick={() => setFruit(undefined)}>undefined</button>
      </div>
    </>
  );
};

export default Default;
