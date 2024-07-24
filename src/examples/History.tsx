// Custom hook 🪝
import useHistory from "../hooks/useHistory";

// Component
const History = () => {
  // Custom hook 🪝
  const { previous, current, next, undo, redo, set, reset } = useHistory("🍌");

  // JSX
  return (
    <>
      <h1>useHistory</h1>
      <p className="description">Use this hook 🪝 to manage state history.</p>

      <table>
        <tbody>
          <tr>
            <th style={{ width: "100px" }}>previous</th>
            <td>{`[${previous}]`}</td>
          </tr>
          <tr>
            <th>current</th>
            <td>{current as string}</td>
          </tr>
          <tr>
            <th>next</th>
            <td>{`[${next}]`}</td>
          </tr>
        </tbody>
      </table>

      <p>Update current fruit to:</p>
      <div className="buttons">
        <button onClick={() => set("🥑")}>🥑</button>
        <button onClick={() => set("🍉")}>🍉</button>
        <button onClick={() => set("🍇")}>🍇</button>
        <button onClick={() => set("🥝")}>🥝</button>
      </div>

      <p>Other methods</p>
      <div className="buttons">
        <button disabled={!previous.length} onClick={undo}>
          undo()
        </button>
        <button disabled={!next.length} onClick={redo}>
          redo()
        </button>
		<button onClick={reset}>reset()</button>
      </div>
    </>
  );
};

export default History;
