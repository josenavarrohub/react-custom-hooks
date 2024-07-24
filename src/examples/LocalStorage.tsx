// Custom hook 🪝
import useLocalStorage from "../hooks/useLocalStorage";

// Component
const LocalStorage = () => {
  // Custom hook 🪝
  const [name, setName] = useLocalStorage("name", "John Doe");

  // JSX
  return (
    <>
      <h1>useLocalStorage</h1>
      <p className="description">
        Use this hook 🪝 to manage state with localStorage.
        <br />
        The data will persist{" "}
        <strong>even after refreshing the page or closing the browser</strong>.
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

export default LocalStorage;
