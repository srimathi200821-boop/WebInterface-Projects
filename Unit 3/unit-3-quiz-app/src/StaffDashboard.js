import React, { useState } from "react";

function StaffDashboard({
  user,
  questions,
  addQuestion,
  deleteQuestion,
  logout,
}) {
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAddQuestion = (e) => {
    e.preventDefault();

    if (
      !question.trim() ||
      !option1.trim() ||
      !option2.trim() ||
      !option3.trim() ||
      !option4.trim() ||
      !answer.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    const options = [
      option1.trim(),
      option2.trim(),
      option3.trim(),
      option4.trim(),
    ];

    if (!options.includes(answer.trim())) {
      alert(
        "Correct answer must exactly match one of the options."
      );
      return;
    }

    addQuestion({
      question: question.trim(),
      options,
      answer: answer.trim(),
    });

    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setAnswer("");
    setShowForm(false);

    alert("Question added successfully!");
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this question?"
    );

    if (confirmDelete) {
      deleteQuestion(index);
    }
  };

  return (
    <div className="staff-dashboard">
      <nav className="navbar">
        <div className="brand">
          QuizTest
        </div>

        <div className="nav-right">
          <span className="user-name">
            {user?.username}
          </span>

          <button
            type="button"
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="staff-content">
        <div className="staff-welcome">
          <div>
            <p className="small-text">
              Staff Dashboard:
            </p>

            <h1>Quiz Management</h1>

            <p>
              Create and manage your quiz questions.
            </p>
          </div>

          <div className="staff-icon">
            👨‍💻
          </div>
        </div>

        <div className="management-header">
          <div>
            <h2>Quiz Questions</h2>

            <p>
              Total Questions: {questions.length}
            </p>
          </div>

          <button
            type="button"
            className="add-btn"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm
              ? "✕ Close"
              : "+ Add Question"}
          </button>
        </div>

        {showForm && (
          <div className="question-form">
            <h2>Add New Question</h2>

            <form onSubmit={handleAddQuestion}>
              <input
                type="text"
                placeholder="Enter question"
                value={question}
                onChange={(e) =>
                  setQuestion(e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Option 1"
                value={option1}
                onChange={(e) =>
                  setOption1(e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Option 2"
                value={option2}
                onChange={(e) =>
                  setOption2(e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Option 3"
                value={option3}
                onChange={(e) =>
                  setOption3(e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Option 4"
                value={option4}
                onChange={(e) =>
                  setOption4(e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Correct answer (must match an option)"
                value={answer}
                onChange={(e) =>
                  setAnswer(e.target.value)
                }
              />

              <button
                type="submit"
                className="save-btn"
              >
                Save Question ✓
              </button>
            </form>
          </div>
        )}

        <div className="questions-list">
          {questions.length === 0 ? (
            <div className="no-questions">
              <div>📭</div>

              <h3>No Questions Available</h3>

              <p>
                Click "Add Question" to create your first quiz question.
              </p>
            </div>
          ) : (
            questions.map((item, index) => (
              <div
                className="question-item"
                key={index}
              >
                <div className="question-number">
                  {index + 1}
                </div>

                <div className="question-details">
                  <h3>{item.question}</h3>

                  <div className="options-preview">
                    {item.options.map(
                      (option, optionIndex) => (
                        <span
                          key={optionIndex}
                          className={
                            option === item.answer
                              ? "correct-option"
                              : ""
                          }
                        >
                          {String.fromCharCode(
                            65 + optionIndex
                          )}. {option}
                        </span>
                      )
                    )}
                  </div>

                  <p className="answer-text">
                    Correct Answer:{" "}
                    <strong>{item.answer}</strong>
                  </p>
                </div>

                <button
                  type="button"
                  className="delete-btn"
                  onClick={() =>
                    handleDelete(index)
                  }
                >
                  🗑 Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default StaffDashboard;