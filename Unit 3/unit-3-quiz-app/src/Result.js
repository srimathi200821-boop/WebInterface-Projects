import React from "react";

function Result({
  score,
  total,
  goToDashboard,
  logout,
}) {
  const percentage =
    total > 0
      ? Math.round((score / total) * 100)
      : 0;

  let message;

  if (percentage >= 80) {
    message = "Excellent! You're doing great! 🎉";
  } else if (percentage >= 60) {
    message = "Good job! Keep improving! 👍";
  } else if (percentage >= 40) {
    message = "Nice effort! Practice more! 💪";
  } else {
    message = "Keep learning and try again! 📚";
  }

  return (
    <div className="result-container">
      <div className="result-card">
        <div className="result-icon">
          🏆
        </div>

        <p className="result-label">
          QUIZ COMPLETED
        </p>

        <h1>Congratulations!</h1>

        <p className="result-message">
          {message}
        </p>

        <div className="score-circle">
          <span>{percentage}%</span>
        </div>

        <h2>
          {score} / {total}
        </h2>

        <p className="score-text">
          Correct Answers
        </p>

        <div className="result-buttons">
          <button
            type="button"
            className="primary-btn"
            onClick={goToDashboard}
          >
            Back to Dashboard
          </button>

          <button
            type="button"
            className="secondary-btn"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;