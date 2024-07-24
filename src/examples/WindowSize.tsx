// Custom hook 🪝
import useWindowSize from "../hooks/useWindowSize";

// Component
const WindowSize = () => {
  // Custom hook 🪝
  const { width, height } = useWindowSize();

  // JSX
  return (
    <>
      <h1>useWindowSize</h1>
      <p className="description">
        Use this hook 🪝 to get the current window size (including the scrollbars).
      </p>

      <p>Window size:</p>
      <table>
        <thead>
          <tr>
            <th>Width</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{width}</td>
            <td>{height}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default WindowSize;
