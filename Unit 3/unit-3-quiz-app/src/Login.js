import React, { useState } from "react";

function Login({ onLogin, goToRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert("Please enter username and password.");
      return;
    }

    onLogin({
      username: username.trim(),
      role: role,
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">🧠</div>

        <h1>QuizTest</h1>

        <p className="subtitle">
          Interactive Quiz Application
        </p>

        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Username</label>

          <input
            type="text"
            name="quiztest-username"
            placeholder="Enter your username"
            value={username}
            autoComplete="new-username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            name="quiztest-password"
            placeholder="Enter your password"
            value={password}
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Select Role</label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="staff">Staff / Admin</option>
          </select>

          <button
            type="submit"
            className="primary-btn"
          >
            Login →
          </button>
        </form>

        <div className="register-text">
          <span>Don't have an account?</span>

          <button
            type="button"
            className="link-btn"
            onClick={goToRegister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;