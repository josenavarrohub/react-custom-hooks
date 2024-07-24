import * as React from "react";

// Types
interface Position {
  x: number;
  y: number;
}

interface Positions {
  documentPosition: Position | null;
  viewportPosition: Position | null;
  elementPosition: Position | null;
}

/**
 * `useMousePosition` is a custom hook to track the mouse position relative to the document, viewport, and a provided element (if specified).
 *
 * @param {React.RefObject<HTMLElement> | undefined} elementRef - An optional reference to the HTML element for which to track relative mouse position.
 * @returns {Positions} An object containing the following properties:
 *   - `documentPosition`: An object representing the mouse position relative to the document (`{ x: number, y: number }`), or `null` if the mouse position has not been tracked yet.
 *   - `viewportPosition`: An object representing the mouse position relative to the viewport (`{ x: number, y: number }`), or `null` if the mouse position has not been tracked yet.
 *   - `elementPosition`: If `elementRef` is provided, an object representing the mouse position relative to the referenced element (`{ x: number, y: number }`), or `null` if the mouse position has not been tracked yet or if the referenced element is not currently in the DOM.
 */
const useMousePosition = (elementRef?: React.RefObject<HTMLElement>) => {
  const [positions, setPositions] = React.useState<Positions>({
    documentPosition: null,
    viewportPosition: null,
    elementPosition: null,
  });

  React.useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { pageX, pageY, clientX, clientY } = event;

      const newPositions: Positions = {
        documentPosition: { x: pageX, y: pageY },
        viewportPosition: { x: clientX, y: clientY },
        elementPosition: null,
      };

      if (elementRef?.current) {
        const rect = elementRef.current.getBoundingClientRect();
        newPositions.elementPosition = {
          x: Math.round(clientX - rect.x),
          y: Math.round(clientY - rect.y),
        };
      }

      setPositions(newPositions);
    };

    window.document.addEventListener("mousemove", handleMouseMove);
    
	return () => {
		window.document.removeEventListener("mousemove", handleMouseMove);
	}
  }, [elementRef]);

  const { documentPosition, viewportPosition, elementPosition } = positions;

  return { documentPosition, viewportPosition, elementPosition };
};

export default useMousePosition;
