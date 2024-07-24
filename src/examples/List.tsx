// Custom hook 🪝
import useList from "../hooks/useList";

// Component
const List = () => {
  // Custom hook 🪝
  const { list, append, insertAt, removeAt, replaceAt, set, clear, size } =
    useList(["🍌", "🥑", "🍉", "🍇"]);

  // JSX
  return (
    <>
      <h1>useList</h1>
      <p className="description">
        Use this hook 🪝 to manage an array of items.
      </p>

      <table>
        <tbody>
          <tr>
            <th style={{ width: "100px" }}>value</th>
            {size === 0 && <td></td>}
            {list.map((value, i) => (
              <td key={i}>{value}</td>
            ))}
          </tr>
          <tr>
            <th>index</th>
            {size === 0 && <td></td>}
            {list.map((_, i) => (
              <td key={i}>{i}</td>
            ))}
          </tr>
        </tbody>
      </table>

      <div className="buttons">
        <button onClick={() => append("🍌")}>append(🍌)</button>
        <button onClick={() => insertAt(1, "🍇")}>insertAt(1,🍇)</button>
        <button onClick={() => removeAt(2)}>removeAt(2)</button>
        <button onClick={() => replaceAt(1, "🍉")}>replaceAt(1,🍉)</button>
      </div>
      <div className="buttons">
        <button onClick={() => set(["🍇", "🍇", "🍉", "🍉"])}>
          set([🍇,🍇,🍉,🍉])
        </button>
        <button onClick={() => clear()}>clear()</button>
      </div>
    </>
  );
};

export default List;
