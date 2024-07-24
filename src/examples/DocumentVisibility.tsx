import * as React from "react";

// Custom hook 🪝
import useDocumentVisibility from "../hooks/useDocumentVisibility";

// Component
const DefaultState = () => {
  // Built-in hooks 🪝 (just to show the example)
  const [countVisible, setCountVisible] = React.useState(0);
  const [countHidden, setCountHidden] = React.useState(0);

  // Custom hook 🪝
  const isVisible = useDocumentVisibility();

  // Built-in hooks 🪝 (just to show the example)
  React.useEffect(() => {
    isVisible ? setCountVisible((c) => c + 1) : setCountHidden((c) => c + 1);
  }, [isVisible]);

  // JSX
  return (
    <>
      <h1>useDocumentVisibility</h1>
      <p className="description">Use this hook 🪝 to track the visibility state of the document.</p>

      <p>
        Switch tabs or minimize the browser to count changes in visibility
        state.
      </p>

      <table>
        <thead>
          <tr>
            <th>🙉 Visible</th>
            <th>🙈 Hidden</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{countVisible}</td>
            <td>{countHidden}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DefaultState;
