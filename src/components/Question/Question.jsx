import React, { useState } from "react";
import './question.css'
const Question = ({ prompt,answers, questionIndex, selectedAnswer,handleAnswer }) => {

  const answerQuestion=(x,y)=>{
    // setSelectedAnswer(y)
    handleAnswer(x,y)
  }
  let data=Object.values(answers)
  return (
    <div className="question col-12 col-md-6 mb-4  ">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{prompt}</h5>
          <div className="form-check">
            {data.map((option, index) => (
              <div key={index}>
                <input
                  className="form-check-input"
                  type="radio"
                  name={prompt}
                  value={option.answerText}
                  checked={selectedAnswer==index}
                  onChange={()=>answerQuestion(questionIndex,index)}
                />
                <label className="form-check-label">{option.answerText}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;