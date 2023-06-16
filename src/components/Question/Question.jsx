import React, { useState } from "react";
import './question.css'
const Question = ({ prompt, options, questionIndex, correctAnswer, handleAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (event) => {
    const answer = event.target.value;
    setSelectedAnswer(answer);
    handleAnswer(questionIndex, options.indexOf(answer));
  };

  return (
    <div className="question col-12 col-md-6 mb-4  ">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{prompt}</h5>
          <div className="form-check">
            {options.map((option, index) => (
              <div key={index}>
                <input
                  className="form-check-input"
                  type="radio"
                  name={prompt}
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={handleAnswerSelect}
                />
                <label className="form-check-label">{option}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;