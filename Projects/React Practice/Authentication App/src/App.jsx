import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    username: "",
    role: "ADMIN",
  });

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function registerUser(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/register",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify(registerData),
        },
      );

      const data = await response.json();

      setMessage(data.message);

      setIsLogin(true);
    } catch (error) {
      console.error(error);
      setMessage("Registration failed");
    }

    setLoading(false);
  }

  async function loginUser(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/login",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify(loginData),
        },
      );

      const data = await response.json();

      setMessage(data.message);

      getCurrentUser();
    } catch (error) {
      setMessage("Login failed");
    }

    setLoading(false);
  }

  async function getCurrentUser() {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/current-user",
        { method: "GET", headers: { accept: "application/json" } },
      );

      const data = await response.json();

      setUser(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function logoutUser() {
    try {
      await fetch("https://api.freeapi.app/api/v1/users/logout", {
        method: "POST",
        headers: { accept: "application/json" },
      });

      setUser(null);
      setMessage("Logged out successfully");
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   getCurrentUser();
  // }, []);

  return (
    <div className="app">
      {message && <p className="message">{message}</p>}

      {!user ? (
        <div className="auth-card">
          {isLogin ? (
            <>
              <h2>Login</h2>

              <form onSubmit={loginUser}>
                <input
                  type="text"
                  placeholder="Username"
                  value={loginData.username}
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      username: e.target.value,
                    })
                  }
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      password: e.target.value,
                    })
                  }
                />

                <button disabled={loading}>
                  {loading ? "Loading..." : "Login"}
                </button>
              </form>

              <p className="switch-text">
                Don't have an account?
                <span onClick={() => setIsLogin(false)}>Register</span>
              </p>
            </>
          ) : (
            <>
              <h2>Register</h2>

              <form onSubmit={registerUser}>
                <input
                  type="text"
                  placeholder="Username"
                  value={registerData.username}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      username: e.target.value,
                    })
                  }
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      email: e.target.value,
                    })
                  }
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={registerData.password}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    })
                  }
                />

                <button disabled={loading}>
                  {loading ? "Loading..." : "Register"}
                </button>
              </form>

              <p className="switch-text">
                Already have an account?
                <span onClick={() => setIsLogin(true)}>Login</span>
              </p>
            </>
          )}
        </div>
      ) : (
        <div className="profile-card">
          <h2>Welcome, {user.username}</h2>

          <p>Email: {user.email}</p>

          <p>Role: {user.role}</p>

          <button onClick={logoutUser}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
