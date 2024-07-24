// Custom hook 🪝
import useSessionStorage from "../hooks/useSessionStorage";

// Component
const SessionStorage = () => {
  // Custom hook 🪝
  const [name, setName] = useSessionStorage("name", "John Doe");

  // JSX
  return (
    <>
      <h1>useSessionStorage</h1>
      <p className="description">
        Use this hook 🪝 to manage state with localStorage.
        <br /> The data will persist across page reloads but will be cleared
        when the <strong>tab or window is closed</strong>.
      </p>

      <p>
        <strong>name:</strong> {name}
      </p>

      <p>Update name:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default SessionStorage;
