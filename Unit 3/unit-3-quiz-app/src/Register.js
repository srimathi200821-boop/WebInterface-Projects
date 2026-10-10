import React, { useState } from "react";

function Register({ onRegister, goToLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    onRegister({
      username: username.trim(),
      email: email.trim(),
      password: password,
    });
  };

  return (
    <div className="login-container">
      <div className="login-card register-card">
        <div className="logo">✨</div>

        <h1>Create Account</h1>

        <p className="subtitle">
          Join QuizMaster today
        </p>

        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Username</label>

          <input
            type="text"
            name="quiztest-register-username"
            placeholder="Enter username"
            value={username}
            autoComplete="new-username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Email</label>

          <input
            type="email"
            name="quiztest-register-email"
            placeholder="Enter email"
            value={email}
            autoComplete="new-email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            name="quiztest-register-password"
            placeholder="Create password"
            value={password}
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>

          <input
            type="password"
            name="quiztest-confirm-password"
            placeholder="Confirm password"
            value={confirmPassword}
            autoComplete="new-password"
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="primary-btn"
          >
            Create Account
          </button>
        </form>

        <div className="register-text">
          <span>Already have an account?</span>

          <button
            type="button"
            className="link-btn"
            onClick={goToLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;