// Custom hook 🪝
import useLanguage from "../hooks/useLanguage";

// Component
const Language = () => {
  // Custom hook 🪝
  const language = useLanguage();

  // JSX
  return (
    <>
      <h1>useLanguage</h1>
      <p className="description">
        Use this hook 🪝 to get the preferred language of the user.
      </p>
      <p>The current <strong>language</strong> is: {language}</p>
    </>
  );
};

export default Language;
