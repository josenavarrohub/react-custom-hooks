import * as React from "react";

// Custom hook 🪝
import useCountdown from "../hooks/useCountdown";

// Component
const Countdown = () => {
  const [endTime, setEndTime] = React.useState<number>(Date.now() + 10000); // 10 seconds from now
  const [timeLeft, setTimeLeft] = React.useState<number | null>(null);
  const [complete, setComplete] = React.useState(false);

  // Custom hook 🪝
  const count = useCountdown(
    endTime,
    1000,
    (timeLeft) => setTimeLeft(timeLeft),
    () => setComplete(true)
  );

  // Event handlers
  const handleRestart = () => {
    setEndTime(Date.now() + 10000); // 10 seconds from now
    setTimeLeft(null);
    setComplete(false);
  };

  // JSX
  return (
    <>
      <h1>useCountdown</h1>
      <p className="description">
        Use this hook 🪝 to create and manage a countdown timer.
      </p>

      <table>
        <thead>
          <tr>
            <th>count</th>
            <th>endTime</th>
            <th>ms</th>
            <th>timeLeft</th>
            <th>complete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{count}</td>
            <td>
              Timestamp: {endTime}
              <br />({new Date(endTime).toLocaleString()})
            </td>
            <td>{1000} ms</td>
            <td>{timeLeft} ms</td>
            <td>{complete ? "✅" : "❌"}</td>
          </tr>
        </tbody>
      </table>

      {!complete && (
        <>
          <p>Update endTime:</p>
          <div className="buttons">
            <button onClick={() => setEndTime((e) => e - 5000)}>
              decrease(5000)
            </button>
            <button onClick={() => setEndTime((e) => e + 5000)}>
              increase(5000)
            </button>
          </div>
        </>
      )}

      {complete && (
        <div className="buttons">
          <button onClick={handleRestart}>restart</button>
        </div>
      )}
    </>
  );
};

export default Countdown;
