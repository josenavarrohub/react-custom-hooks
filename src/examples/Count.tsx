// Custom hook 🪝
import useCount from "../hooks/useCount";

// Constants
const INITIAL_STATE = 5;
const MIN = -3;
const MAX = 6;

// Component
const Count = () => {
  // Custom hook 🪝
  const { count, set, decrease, increase, reset } = useCount(
    INITIAL_STATE,
    MIN,
    MAX
  );

  // JSX
  return (
    <>
      <h1>useCount</h1>
      <p className="description">Use this hook 🪝 to manage a count state with optional minimum and maximum bounds.</p>

      <table>
        <thead>
          <tr>
            <th>count</th>
            <th>initialState</th>
            <th>min?</th>
            <th>max?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{count}</td>
            <td>{INITIAL_STATE}</td>
            <td>{MIN}</td>
            <td>{MAX}</td>
          </tr>
        </tbody>
      </table>

      <p>Update count to:</p>
      <div className="buttons">
        <button onClick={() => set(2)}>set(2)</button>
        <button onClick={() => decrease()}>decrease()</button>
        <button onClick={() => increase()}>increase()</button>
        <button onClick={() => reset()}>reset()</button>
      </div>
    </>
  );
};

export default Count;
