// Custom hook 🪝
import useLongPress from "../hooks/useLongPress";

// Component
const LongPress = () => {
  // Custom hook 🪝
  const buttonRef = useLongPress<HTMLButtonElement>({
    onPress: () => console.log("Press started"),
    onLongPress: () => alert("Long Pressed!"),
    onRelease: () => console.log("Press ended"),
    ms: 1000,
  });

  // JSX
  return (
    <>
      <h1>useLongPress</h1>
      <p className="description">
        Use this hook 🪝 to handle long press events on an element.
      </p>

      <p>Press and hold the button 1 second:</p>
      <div className="buttons">
        <button ref={buttonRef}>Press and Hold</button>
      </div>
    </>
  );
};

export default LongPress;
