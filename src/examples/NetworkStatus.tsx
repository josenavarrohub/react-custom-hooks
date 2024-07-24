// Custom hook 🪝
import useNetworkStatus from "../hooks/useNetworkStatus";

// Component
const NetworkStatus = () => {
  // Custom hook 🪝
  const { isOnline, connection } = useNetworkStatus();

  // JSX
  return (
    <>
      <h1>useNetworkStatus</h1>
      <p className="description">
        Use this hook 🪝 to get the current network status of the browser.
      </p>
      <p>
        The current <strong>status</strong> is:{" "}
        <span className={isOnline ? "online" : "offline"}>
          {isOnline ? "Online" : "Offline"}
        </span>
      </p>
      {isOnline && connection && (
        <table>
          <thead>
            <tr>
              <th>Effective Type</th>
              <th>Downlink</th>
              <th>Downlink Max</th>
              <th>RTT</th>
              <th>Save Data</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{connection.effectiveType ? connection.effectiveType : '---'}</td>
              <td>{connection.downlink ? `${connection.downlink} Mbps` : '---'}</td>
              <td>{connection.downlinkMax ? `${connection.downlinkMax} Mbps` : '---'}</td>
              <td>{connection.rtt ? `${connection.rtt} ms` : '---'}</td>
              <td>{connection.saveData ? "✅" : "❌"}</td>
              <td>{connection.type ? connection.type : '---'}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default NetworkStatus;
