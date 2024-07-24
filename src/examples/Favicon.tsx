import React from "react";

// Custom hook 🪝
import useFavicon from "../hooks/useFavicon";

// Component
const Favicon = () => {
  // Built-in hooks 🪝 (just to show the example)
  const [favicon, setFavicon] = React.useState("/icons/react.svg");

  // Custom hook 🪝
  useFavicon(favicon);

  // JSX
  return (
    <>
      <h1>useFavicon</h1>
      <p className="description">
        Use this hook 🪝 to dynamically update the favicon.
      </p>
      <p>Update the favicon to:</p>
      <div className="buttons">
        <button onClick={() => setFavicon("/icons/react-white.svg")}>
          <img src="/icons/react-white.svg" alt="Icon 1" />
        </button>
        <button onClick={() => setFavicon("/icons/react-orange.svg")}>
          <img src="/icons/react-orange.svg" alt="Icon 2" />
        </button>
      </div>
    </>
  );
};

export default Favicon;
