import * as React from "react";

// Custom hook 🪝
import useClickOutside from "../hooks/useClickOutside";

// Component: Modal window
const Modal = ({ onClose }: { onClose: () => void }) => {
  // Custom hook 🪝
  const ref = useClickOutside(onClose);

  return (
    <div className="modal">
      <dialog open ref={ref as React.RefObject<HTMLDialogElement>}>
        <header>Modal component</header>
        <p>This is a component using useClickOutside 🪝</p>
        <button onClick={onClose}>Close modal</button>
      </dialog>
    </div>
  );
};

// Component
const ClickOutside = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // JSX
  return (
    <div className="force-scroll">
      <h1>useClickOutside</h1>
      <p className="description">
        Use this hook 🪝 to execute a callback when clicking outside a specified element.
      </p>

      <div className="buttons">
        <button onClick={() => setIsOpen(true)}>Open modal</button>
      </div>

      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default ClickOutside;
