// Custom hook 🪝
import useToggle from "../hooks/useToggle";

// Component
const Toogle = () => {
  // Custom hook 🪝
  const [isToggled, setToggled] = useToggle();

  // JSX
  return (
    <>
      <h1>useToggle</h1>
      <p className="description">
        Use this hook 🪝 to toggle a boolean state.
      </p>
      <p><strong>isToggled</strong>: { isToggled ? 'true' : 'false' }</p>
      <p>Update isToggled to:</p>
      <div className="buttons">
        <button onClick={() => setToggled()}>setToggled()</button>
        <button onClick={() => setToggled(true)}>setToggled(true)</button>
        <button onClick={() => setToggled(false)}>setToggled(false)</button>
      </div>
    </>
  );
};

export default Toogle;
