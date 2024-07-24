// Custom hook 🪝
import useObject from "../hooks/useObject";

// Component
const Page = () => {
  // Custom hook 🪝
  const [fruit, setFruit] = useObject({
    emoji: "🍌",
    origin: "Ecuador",
    calories: 105,
  });

  // JSX
  return (
    <>
      <h1>useObject</h1>
      <p className="description">
        Use this hook 🪝 to manage state as an object. It provides a setter
        function to update the state (with a plain object or an updater
        function).
      </p>

      <p>
        <strong>fruit:</strong>
      </p>

      <table>
        <thead>
          <tr>
            {Object.keys(fruit).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(fruit).map((key) => {
              return <td key={key}>{`${fruit[key]}`}</td>;
            })}
          </tr>
        </tbody>
      </table>

      <p>Update <strong>fruit</strong> with a <strong>plain object</strong>:</p>
      <div className="buttons">
        <button onClick={() => setFruit({ origin: "Brazil" })}>
          &#123;origin: 'Brazil'&#125;
        </button>
        <button onClick={() => setFruit({ calories: 95, title: "Banana" })}>
          &#123;calories: 95, title: 'Banana'&#125;
        </button>
      </div>

      <p>Update <strong>fruit</strong> with an <strong>updater function</strong>:</p>
      <div className="buttons">
        <button onClick={() => setFruit((f) => ({ calories: f.calories + 5 }))}>
          f =&gt; (&#123; calories: f.calories + 5 &#125;)
        </button>
        <button
          onClick={() =>
            setFruit((f) => ({ calories: f.calories + 2, colour: "yellow" }))
          }
        >
          f =&gt; (&#123; calories: f.calories + 2, colour: 'yellow' &#125;)
        </button>
      </div>
    </>
  );
};

export default Page;
