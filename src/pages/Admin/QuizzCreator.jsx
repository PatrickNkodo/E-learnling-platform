import React, { useEffect, useState } from 'react'
import './quizz.css'
import { Col, Row } from 'reactstrap'
import { useLocation } from 'react-router'
function QuizCreator({title,send,sendData}) {
  const [quizData, setQuizData] = useState({
    questions: [
      {
        questionText: '',
        answerOptions: [
          { answerText: '', isCorrect: false },
          { answerText: '', isCorrect: false },
          { answerText: '', isCorrect: false },
          { answerText: '', isCorrect: false },
        ],
        correctAnswer: 0,
      },
      {
        questionText: '',
        answerOptions: [
          { answerText: '', isCorrect: false },
          { answerText: '', isCorrect: false },
          { answerText: '', isCorrect: false },
          { answerText: '', isCorrect: false },
        ],
        correctAnswer: 0,
      },
      {
        questionText: '',
        answerOptions: [
          { answerText: '', isCorrect: false },
          { answerText: '', isCorrect: false },
          { answerText: '', isCorrect: false },
          { answerText: '', isCorrect: false },
        ],
        correctAnswer: 0,
      },
      {
        questionText: '',
        answerOptions: [
          { answerText: '', isCorrect: false },
          { answerText: '', isCorrect: false },
          { answerText: '', isCorrect: false },
          { answerText: '', isCorrect: false },
        ],
        correctAnswer: 0,
      },
    ],
  })
  useEffect(()=>{
    setQuizData({
      questions: [
        {
          questionText: 'What is the largest planet in our solar system by diameter?',
          answerOptions: [
            { answerText: 'Jupiter', isCorrect: true },
            { answerText: 'Saturn', isCorrect: false },
            { answerText: 'Neptune', isCorrect: false },
            { answerText: 'Uranus', isCorrect: false },
          ],
          correctAnswer: 0,
        },
        {
          questionText: 'What is the tallest mountain on Earth?',
          answerOptions: [
            { answerText: 'Mount Everest', isCorrect: true },
            { answerText: 'Mount Kilimanjaro', isCorrect: false },
            { answerText: 'Mount Fuji', isCorrect: false },
            { answerText: 'Mount Denali', isCorrect: false },
          ],
          correctAnswer: 0,
        },
        {
          questionText: 'What is the capital of Australia?',
          answerOptions: [
            { answerText: 'Sydney', isCorrect: false },
            { answerText: 'Melbourne', isCorrect: false },
            { answerText: 'Brisbane', isCorrect: false },
            { answerText: 'Canberra', isCorrect: true },
          ],
          correctAnswer: 3,
        },
        {
          questionText: 'What is the largest ocean in the world by area?',
          answerOptions: [
            { answerText: 'Atlantic Ocean', isCorrect: false },
            { answerText: 'Indian Ocean', isCorrect: false },
            { answerText: 'Arctic Ocean', isCorrect: false },
            { answerText: 'Pacific Ocean', isCorrect: true },
          ],
          correctAnswer: 3,
        },
      ]
    })
  },[])
  console.log(quizData);
  const handleQuestionChange = (event, questionIndex) => {
    const updatedQuestions = [...quizData.questions]
    updatedQuestions[questionIndex].questionText = event.target.value
    setQuizData({ ...quizData, questions: updatedQuestions })
  }

  const handleAnswerChange = (event, questionIndex, answerIndex) => {
    const updatedQuestions = [...quizData.questions]
    updatedQuestions[questionIndex].answerOptions[answerIndex].answerText = event.target.value
    setQuizData({ ...quizData, questions: updatedQuestions })
  }

  const handleCorrectAnswerChange = (event, questionIndex) => {
    const updatedQuestions = [...quizData.questions]
    updatedQuestions[questionIndex].correctAnswer = parseInt(event.target.value)
    setQuizData({ ...quizData, questions: updatedQuestions })
  }

 send && sendData(quizData)
// const location=useLocation()
// const {title}=location.state
  return (
    <div id="quizz">
      <h4>Quiz for the lesson: {title}</h4>
      <form>
      {quizData.questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <div className="form-group">
          <label>
            Question {questionIndex + 1}:
          </label>
            <input type="text" value={question.questionText} onChange={event => handleQuestionChange(event, questionIndex)} />
          </div>
          <br />
            <Row md={12}>
          {/* <div className='col-4'> */}
          {question.answerOptions.map((answerOption, answerIndex) => (
          <div className="form-group col-3">
              <label key={answerIndex}>
              Answer {answerIndex + 1}:
            </label>
              <input type="text" className='form-control' value={answerOption.answerText} onChange={event => handleAnswerChange(event, questionIndex, answerIndex)} />
              <input type="radio" className='form-check-input' name={`correctAnswer${questionIndex}`} value={answerIndex} checked={question.correctAnswer === answerIndex} onChange={event => handleCorrectAnswerChange(event, questionIndex)} />
              <span>Correct answer</span>
          </div>
          ))}
          {/* </div> */}
        </Row>
          <br />
        </div>
      ))}
      <button className='btn' type="button">Submit Quiz</button>
    </form>
    </div>
  )
}
export default QuizCreator