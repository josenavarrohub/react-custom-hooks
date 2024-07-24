import React from "react";

// Custom hook 🪝
import useDocumentTitle from "../hooks/useDocumentTitle";

// Component
const DocumentTitle = () => {
  // Built-in hooks 🪝 (just to show the example)
  const [title, setTitle] = React.useState("React Custom Hooks");

  // Custom hook 🪝
  useDocumentTitle(title);

  // JSX
  return (
    <>
      <h1>useDocumentTitle</h1>
      <p className="description">
        Use this hook 🪝 to update the document title.
      </p>
      <p>Update the document title to:</p>
      <div className="buttons">
        <button onClick={() => setTitle("Title 1")}>Title 1</button>
        <button onClick={() => setTitle("Title 2")}>Title 2</button>
      </div>
    </>
  );
};

export default DocumentTitle;
