import React, { useState } from "react";

function Quiz({ questions, finishQuiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  if (!questions || questions.length === 0) {
    return (
      <div className="empty-quiz">
        <h2>No Questions Available</h2>
      </div>
    );
  }

  const question = questions[currentQuestion];

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }

    const isCorrect =
      selectedAnswer === question.answer;

    const newScore =
      isCorrect ? score + 1 : score;

    setScore(newScore);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      finishQuiz(newScore);
    }
  };

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <div className="quiz-header">
          <div>
            <span className="quiz-label">
              QUESTION
            </span>

            <h2>
              {currentQuestion + 1} / {questions.length}
            </h2>
          </div>

          <div className="live-badge">
            ● LIVE
          </div>
        </div>

        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="question-section">
          <h1>{question.question}</h1>

          <p>
            Choose the correct answer
          </p>
        </div>

        <div className="options-container">
          {question.options.map((option, index) => (
            <button
              key={index}
              type="button"
              className={
                selectedAnswer === option
                  ? "quiz-option selected"
                  : "quiz-option"
              }
              onClick={() => handleAnswer(option)}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>

              <span>{option}</span>

              {selectedAnswer === option && (
                <span className="check">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="next-question-btn"
          onClick={handleNext}
        >
          {currentQuestion + 1 === questions.length
            ? "Finish Quiz ✓"
            : "Next Question →"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;