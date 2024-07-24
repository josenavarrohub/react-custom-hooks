import * as React from "react";

// Custom hook 🪝
import useFetch from "../hooks/useFetch";

// Types
interface User {
  id: number;
  name: string;
  email: string;
}

// Component
const Fetch = () => {
  // Built-in hooks 🪝 (just to show the example)
  const [userId, setUserId] = React.useState<number>(1);

  // Derived state
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  // Custom hook 🪝
  const { data: user, loading, error } = useFetch<User>(url);

  // Event handlers
  const handleClick = () => setUserId((u) => (u === 10 ? 1 : u + 1));

  // JSX
  return (
    <>
      <h1>useFetch</h1>
      <p className="description">Use this hook 🪝 to fetch data from a given URL.</p>

      <table>
        <tbody>
          <tr>
            <th style={{ width: "100px" }}>url</th>
            <td>{url}</td>
          </tr>
          <tr>
            <th>data</th>
            <td>
              Id: {user?.id}
              <br />
              Name: {user?.name}
              <br />
              Emai: {user?.email}
            </td>
          </tr>
          <tr>
            <th>error</th>
            <td>{error?.message}</td>
          </tr>
          <tr>
            <th>loading</th>
            <td>{loading ? "⏳" : ""}</td>
          </tr>
        </tbody>
      </table>

      <p>Fetch data:</p>
      <div className="buttons">
        <button onClick={handleClick}>Next user</button>
      </div>
    </>
  );
};

export default Fetch;
