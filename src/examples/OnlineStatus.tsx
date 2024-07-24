// Custom hook 🪝
import useOnlineStatus from "../hooks/useOnlineStatus";

// Component
const OnlineStatus = () => {
  // Custom hook 🪝
  const isOnline = useOnlineStatus();

  // JSX
  return (
    <>
      <h1>useOnlineStatus</h1>
      <p className="description">
        Use this hook 🪝 to get the current online status of the browser:
      </p>
      <p>
        The current <strong>status</strong> is:{" "}
        <span className={isOnline ? "online" : "offline"}>
          {isOnline ? "Online" : "Offline"}
        </span>
      </p>
    </>
  );
};

export default OnlineStatus;
