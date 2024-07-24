// Custom hook 🪝
import useIsClient from "../hooks/useIsClient";

// Component
const IsClient = () => {
  // Custom hook 🪝
  const isClient = useIsClient();

  // JSX
  return (
    <>
      <h1>useIsClient</h1>
      <p className="description">
        Use this hook 🪝 to determine if the code is running in a client
        environment.
      </p>

      <p>
        <strong>isClient:</strong> {isClient ? "✅" : "❌"}
      </p>
    </>
  );
};

export default IsClient;
