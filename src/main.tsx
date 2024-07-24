import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App";

// Styles
import "./main.scss";

// Render
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
