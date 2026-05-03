import { useState } from "react";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadUsers() {
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomusers",
      );

      const data = await response.json();

      setUsers(data.data.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <div className="users-page">
      <div className="button-container">
        {users.length === 0 && (
          <button className="fetch-btn" onClick={loadUsers}>
            {loading ? "Loading..." : "Fetch Users"}
          </button>
        )}
      </div>

      <div className="users-grid">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <img src={user.picture.large} alt="" />

            <h2>
              {user.name.first} {user.name.last}
            </h2>

            <p>{user.email}</p>

            <p>
              {user.location.city}, {user.location.country}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
