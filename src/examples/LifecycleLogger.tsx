import * as React from "react";

// Custom hook 🪝
import useLifecycleLogger from "../hooks/useLifecycleLogger";

// Component: Parent
const Parent = () => {
  // Built-in hooks 🪝 (just to show the example)
  const [count, setCount] = React.useState(0);
  const [showChildA, setShowChildA] = React.useState(false);
  const [showChildB, setShowChildB] = React.useState(false);

  // Custom hook 🪝
  useLifecycleLogger('Parent', count, showChildA, showChildB);

  return (
    <div className="component">
      <p style={{ textAlign: 'center' }}>
        <strong>Parent</strong>
        <br />
        count: {count}
      </p>
      <div className="buttons">
        <button onClick={() => setCount((c) => c + 1)}>count + 1</button>
        <button onClick={() => setShowChildA(!showChildA)}>
          {!showChildA ? "Mount" : "Unmount"} A
        </button>
        <button onClick={() => setShowChildB(!showChildB)}>
          {!showChildB ? "Mount" : "Unmount"} B
        </button>
      </div>
      <div className="components">
        {showChildA && <ChildA count={count} />}
        {showChildB && <ChildB count={count} />}
      </div>
    </div>
  );
};

// Component: Child A
const ChildA = (props: { count: number }) => {
	useLifecycleLogger("Child A", props.count);

  return (
    <div className="component">
      <strong>Child A</strong>
      <br />
      props.count: {props.count}
    </div>
  );
};

// Component: Child B
const ChildB = (props: { count: number }) => {
	useLifecycleLogger("Child B", props.count);

  return (
    <div className="component">
      <strong>Child B</strong>
      <br />
      props.count: {props.count}
    </div>
  );
};

// Component
const LifecycleLogger = () => {
  // Custom hook 🪝

  // JSX
  return (
    <>
      <h1>useLifecycleLogger</h1>
      <p className="description">
        Use this hook 🪝 to log component lifecycle events with colours and emojis.
      </p>
      <Parent />
    </>
  );
};

export default LifecycleLogger;
