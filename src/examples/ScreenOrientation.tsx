// Custom hook 🪝
import useScreenOrientation from "../hooks/useScreenOrientation";

// Component
const ScreenOrientation = () => {
  // Custom hook 🪝
  const { angle, type } = useScreenOrientation();

  // JSX
  return (
    <>
      <h1>useScreenOrientation</h1>
      <p className="description">
        Use this hook 🪝 to get the screen orientation.
      </p>

      <table>
        <thead>
          <tr>
            <th style={{ width: "50%" }}>Angle</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{angle}</td>
            <td>{type}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ScreenOrientation;
