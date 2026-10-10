import React from "react";

function StudentDashboard({
  user,
  questionCount,
  startQuiz,
  logout,
}) {
  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="brand">
          QuizTest
        </div>

        <div className="nav-right">
          <span className="user-name">
            {user?.username}
          </span>

          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="welcome-section">
          <div>
            <p className="small-text">
              Welcome back
            </p>

            <h1>
              Hello, {user?.username}!
            </h1>

            <p>
              Ready to test your knowledge?
            </p>
          </div>

          <div className="student-icon">
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon purple">
              📝
            </div>

            <h2>{questionCount}</h2>
            <p>Available Questions</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon blue">
              🎯
            </div>

            <h2>Quiz</h2>
            <p>Test Your Skills</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              🏆
            </div>

            <h2>Score</h2>
            <p>Track Your Result</p>
          </div>
        </div>

        <div className="start-quiz-card">
          <div>
            <h2>Ready for the Challenge?</h2>

            <p>
              Answer the questions and see how well
              you perform.
            </p>
          </div>

          <button
            className="start-btn"
            onClick={startQuiz}
            disabled={questionCount === 0}
          >
            {questionCount === 0
              ? "No Questions"
              : "Start Quiz →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;