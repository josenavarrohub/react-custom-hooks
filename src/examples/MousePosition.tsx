import * as React from "react";

// Custom hook 🪝
import useMousePosition from "../hooks/useMousePosition";

// Component
const MousePosition = () => {
  // Built-in hooks 🪝 (just to show the example)
  const elementRef = React.useRef<HTMLDivElement>(null);

  // Custom hook 🪝
  const { documentPosition, viewportPosition, elementPosition } = useMousePosition(elementRef);

  // Derived state (just to show the example)
  const isIntersecting = elementPosition
    ? elementPosition.x > 0 &&
      elementPosition.x < 300 &&
      elementPosition.y > 0 &&
      elementPosition.y < 150
    : false;

  // JSX
  return (
    <>
      <h1>useMousePosition</h1>
      <p className="description">
        Use this hook 🪝 to track the mouse position relative to the document, viewport, and a provided element (if specified).
      </p>

      <p>Mouse position relative to the:</p>
      <table>
        <tbody>
          <tr>
            <th style={{ width: "120px" }}>document</th>
            <td>
              {documentPosition && `x: ${documentPosition.x}, y: ${documentPosition.y}`}
            </td>
          </tr>
          <tr>
            <th>viewport</th>
            <td>
              {viewportPosition && `x: ${viewportPosition.x}, y: ${viewportPosition.y}`}
            </td>
          </tr>
          <tr>
            <th>element?</th>
            <td>
              {elementPosition && `x: ${elementPosition.x}, y: ${elementPosition.y}`}
            </td>
          </tr>
        </tbody>
      </table>

      <div
        ref={elementRef}
        className={`box ${isIntersecting ? "active" : "inactive"}`}
      >
        Element
      </div>
    </>
  );
};

export default MousePosition;
