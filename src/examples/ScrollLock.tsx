import * as React from "react";

// Custom hook 🪝
import useScrollLock from "../hooks/useScrollLock";

// Component: Modal window
const Modal = ({ onClose }: { onClose: () => void }) => {
  // Custom hook 🪝
  useScrollLock();

  return (
    <div className="modal">
      <dialog open>
        <header>Modal component</header>
        <p>This is a component using useScrollLock 🪝</p>
        <button onClick={onClose}>Close modal</button>
      </dialog>
    </div>
  );
};

// Component
const ScrollLock = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // JSX
  return (
    <div className="force-scroll">
      <h1>useScrollLock</h1>
      <p className="description">
        Use this hook 🪝 that locks the scroll of the body element.
      </p>
      <div className="buttons">
        <button onClick={() => setIsOpen(true)}>Open modal</button>
      </div>

      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default ScrollLock;
