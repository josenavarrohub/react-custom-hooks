// Custom hook 🪝
import useMediaQuery from "../hooks/useMediaQuery";

// Constants
const QUERY = "(max-width: 768px)";

// Component
const MediaQuery = () => {
  // Custom hook 🪝
  const isMobile = useMediaQuery(QUERY);

  // Derived state
  const isDesktop = !isMobile;

  // JSX
  return (
    <>
      <h1>useMediaQuery</h1>
      <p className="description">Use this hook 🪝 to determine if a media query matches the current window size.</p>

      <p>
        <strong>query</strong>: {QUERY}
      </p>
      <table>
        <thead>
          <tr>
            <th>📱 Mobile</th>
            <th>💻 Desktop</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{isMobile ? "✅" : "❌"}</td>
            <td>{isDesktop ? "✅" : "❌"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default MediaQuery;
