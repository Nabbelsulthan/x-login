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
          <p>{error}</p>
        <label>UserName:</label>
        <input type='text' required value={userName} onChange={(e)=> setUserName(e.target.value)}/>
        <br/>

        <label>Password:</label>
        <input type='password' required value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <br/>
        <button type='submit'>Submit</button>
        </form>

      ) : (<h3>Welcome, {userName}!</h3>)}
         
    </div>
  );
}

export default App;
