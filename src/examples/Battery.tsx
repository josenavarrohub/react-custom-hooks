// Custom hook 🪝
import useBattery from "../hooks/useBattery";

// Component
const Battery = () => {
  // Custom hook 🪝
  const battery = useBattery();

  // JSX
  return (
    <>
      <h1>useBattery</h1>
      <p className="description">
        Use this hook 🪝 to get battery information.
      </p>

      {battery === null && <p>Loading battery information...</p>}

      {battery !== null && (
        <table>
          <thead>
            <tr>
              <th>Supported API</th>
              <th>🔋 Level</th>
              <th>⚡ Charging</th>
              <th>⏳ Charging Time</th>
              <th>⏳ Discharging Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{battery.supported ? "✅" : "❌"}</td>
              <td>{battery.level * 100} %</td>
              <td>{battery.charging ? "✅" : "❌"}</td>
              <td>{battery.chargingTime}</td>
              <td>{battery.dischargingTime}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default Battery;
