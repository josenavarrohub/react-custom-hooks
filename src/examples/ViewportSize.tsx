// Custom hook 🪝
import useViewportSize from "../hooks/useViewportSize";

// Component
const ViewportSize = () => {
  // Custom hook 🪝
  const { width, height } = useViewportSize();

  // JSX
  return (
    <>
      <h1>useViewportSize</h1>
      <p className="description">
        Use this hook 🪝 to get the current viewport size (excluding the scrollbars).
      </p>

      <p>Viewport size:</p>
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

export default ViewportSize;
