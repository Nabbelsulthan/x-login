import { useState } from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const name = "user";
  const pass = "password";

  function handleSubmit(e) {
    e.preventDefault();

    if (!userName || !password) {
      setError("Username and password are required");
      return;
    }

    if (name === userName && pass === password) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="App">
      <h1>Login Page</h1>

      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          {error && <p role="alert">{error}</p>}

          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <h3>Welcome, user!</h3>
      )}
    </div>
  );
}

export default App;
