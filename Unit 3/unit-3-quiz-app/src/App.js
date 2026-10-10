import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import StudentDashboard from "./StudentDashboard";
import StaffDashboard from "./StaffDashboard";
import Quiz from "./Quiz";
import Result from "./Result";

function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null);
  const [score, setScore] = useState(0);

  const [questions, setQuestions] = useState([
    {
      question: "Which language is mainly used to create web pages?",
      options: ["Python", "HTML", "Java", "C++"],
      answer: "HTML",
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "int", "string", "define"],
      answer: "var",
    },
    {
      question: "Which of the following is a Java programming language feature?",
      options: [
        "Object Oriented Programming",
        "Only procedural programming",
        "No inheritance",
        "No classes",
      ],
      answer: "Object Oriented Programming",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheet",
        "Cascading Style Sheets",
        "Creative Style System",
        "Colorful Style Sheet",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which data structure follows FIFO?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: "Queue",
    },
  ]);

  const handleLogin = (loginData) => {
    setUser(loginData);
    setScore(0);

    if (loginData.role === "student") {
      setPage("student");
    } else {
      setPage("staff");
    }
  };

  const handleRegister = (registerData) => {
    console.log("Registered User:", registerData);
    alert("Registration successful! Please login.");
    setPage("login");
  };

  const handleLogout = () => {
    setUser(null);
    setScore(0);
    setPage("login");
  };

  const goToRegister = () => {
    setPage("register");
  };

  const goToLogin = () => {
    setPage("login");
  };

  const startQuiz = () => {
    setScore(0);
    setPage("quiz");
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setPage("result");
  };

  const addQuestion = (newQuestion) => {
    setQuestions((previousQuestions) => [
      ...previousQuestions,
      newQuestion,
    ]);
  };

  const deleteQuestion = (index) => {
    setQuestions((previousQuestions) =>
      previousQuestions.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="app">
      {page === "login" && (
        <Login
          onLogin={handleLogin}
          goToRegister={goToRegister}
        />
      )}

      {page === "register" && (
        <Register
          onRegister={handleRegister}
          goToLogin={goToLogin}
        />
      )}

      {page === "student" && user && (
        <StudentDashboard
          user={user}
          questionCount={questions.length}
          startQuiz={startQuiz}
          logout={handleLogout}
        />
      )}

      {page === "staff" && user && (
        <StaffDashboard
          user={user}
          questions={questions}
          addQuestion={addQuestion}
          deleteQuestion={deleteQuestion}
          logout={handleLogout}
        />
      )}

      {page === "quiz" && questions.length > 0 && (
        <Quiz
          questions={questions}
          finishQuiz={finishQuiz}
        />
      )}

      {page === "quiz" && questions.length === 0 && (
        <div className="empty-quiz">
          <h2>No Questions Available</h2>

          <button
            className="primary-btn"
            onClick={() => setPage("student")}
          >
            Back to Dashboard
          </button>
        </div>
      )}

      {page === "result" && (
        <Result
          score={score}
          total={questions.length}
          goToDashboard={() => setPage("student")}
          logout={handleLogout}
        />
      )}
    </div>
  );
}

export default App;