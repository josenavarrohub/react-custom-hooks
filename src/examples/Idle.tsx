// Custom hook 🪝
import useIdle from "../hooks/useIdle";

// Component
const Idle = () => {
  // Custom hook 🪝
  const isIdle = useIdle(2000);

  // JSX
  return (
    <>
      <h1>useIdle</h1>
      <p className="description">
        Use this hook 🪝 to track whether the user is idle.
      </p>

      <p>
        The status will change to "Idle" if you don't interact with the page for 2 seconds.
      </p>

      <p>
        The current <strong>status</strong> is:{" "}
        <span className={isIdle ? "idle" : "active"}>
          {isIdle ? "Idle" : "Active"}
        </span>
      </p>
    </>
  );
};

export default Idle;
