// Custom hook 🪝
import useQueue from "../hooks/useQueue";

// Component
const Queue = () => {
  // Custom hook 🪝
  const { queue, enqueue, dequeue, clear, peek, size } = useQueue();

  // JSX
  return (
    <>
      <h1>useQueue</h1>
      <p className="description">
        Use this hook 🪝 to manage a queue data structure. It follows the FIFO (First-In-First-Out) principle.
      </p>

      <table>
        <tbody>
          <tr>
            <th style={{ width: "100px" }}>queue</th>
            <td>{`[${queue}]`}</td>
          </tr>
          <tr>
            <th>peek</th>
            <td>{String(peek)}</td>
          </tr>
          <tr>
            <th>size</th>
            <td>{size}</td>
          </tr>
        </tbody>
      </table>

      <p>enqueue()</p>
      <div className="buttons">
        <button onClick={() => enqueue("🍌")}>🍌</button>
        <button onClick={() => enqueue("🥑")}>🥑</button>
        <button onClick={() => enqueue("🍉")}>🍉</button>
        <button onClick={() => enqueue("🍇")}>🍇</button>
      </div>

      <p>Other methods:</p>
      <div className="buttons">
        <button onClick={() => dequeue()}>dequeue()</button>
        <button onClick={() => clear()}>clear()</button>
      </div>
    </>
  );
};

export default Queue;
