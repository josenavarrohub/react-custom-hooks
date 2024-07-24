// Custom hook 🪝
import React from "react";

// Custom hook 🪝
import useWindowScroll from "../hooks/useWindowScroll";

// Component
const WindowScroll = () => {
  // Built-in hooks 🪝 (just to show the example)
  React.useEffect(() => {
    const appElement = document.querySelector(".app") as HTMLDivElement;
    
	appElement.style.gridTemplateRows = "auto";
    
	return () => {
      appElement.style.gridTemplateRows = "100vh";
    };
  }, []);

  // Custom hook 🪝
  const [position, scrollTo] = useWindowScroll();

  // JSX
  return (
    <>
      <h1>useWindowScroll</h1>
      <p className="description">
        Use this hook 🪝 to track and manipulate the window scroll position.
      </p>

      <table>
        <thead>
          <tr>
            <th style={{ width: "50%" }}>x</th>
            <th>y</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{position && position.x}</td>
            <td>{position && position.y}</td>
          </tr>
        </tbody>
      </table>

      <p>Scroll to:</p>
      <div className="buttons">
        <button onClick={() => scrollTo(0, 0)}>scrollTo(0, 0)</button>
        <button onClick={() => scrollTo({ top: 0, left: 0 })}>
          scrollTo(&#123; top: 0, left: 0&#125;)
        </button>
      </div>

      <div style={{ minHeight: "800px" }}></div>
    </>
  );
};

export default WindowScroll;
