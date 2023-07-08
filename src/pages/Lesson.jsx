import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./lesson.css";
import Question from "../components/Question/Question";
import { useLocation } from "react-router";
import { useEverywhere } from "./context";

const LessonPage = ({ title, content, multimedia, activities }) => {
  const [disabled, setDisabled] = useState(true);
  const [score, setScore] = useState(null);
  const [lesson, setLesson] = useState({});
  const [finishedQuiz, setFinishedQuiz] = useState(false);
  const [quizzes, setQuizzes] = useState([
    {
      prompt: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: 0,
      selected: null,
    },
    {
      prompt: "What is the largest country in the world?",
      options: ["Russia", "Canada", "China", "USA"],
      correctAnswer: 0,
      selected: null,
    },
    {
      prompt: "What is the highest mountain in the world?",
      options: [
        "Mount Everest",
        "Mount Kilimanjaro",
        "Mount Fuji",
        "Mount McKinley",
      ],
      correctAnswer: 0,
      selected: null,
    },
    {
      prompt: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Cu", "Fe"],
      correctAnswer: 0,
      selected: null,
    },
  ]);
  const { fetchNextLesson } = useEverywhere();
  const location = useLocation(); //useLocation is storing the values
  const { courseId, studentId } = location.state;
  // function handleAnswerSelect(correctAnswer) {
  function handleAnswerSelect(questionIndex, answerIndex) {
    setQuizzes((prevQuizzes) => {
      const newQuizzes = [...prevQuizzes];
      newQuizzes[questionIndex] = {
        ...newQuizzes[questionIndex],
        selected: answerIndex,
      };
      return newQuizzes;
    });
  }

  function handleSubmitQuiz() {
    setFinishedQuiz(true);
    setDisabled(false);
    let correctAnswers = 0;
    //check for each quiz question if the correct answer was choosen, and calculate score
    quizzes.forEach((quiz) => {
      if (quiz.correctAnswer === quiz.selected) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
  }
  const toNext = (e) => {
    if (e.target.classList.contains("disable")) {
      console.log("yes");
      e.preventDefault();
    } else {
      console.log("no");
      alert("Next lesson");
    }
  };

  const toPrevious = () => {
    alert("Previous lesson");
  };

  useEffect(() => {
    fetchNextLesson(courseId, studentId).then((x) => {
      if (x.data) {
        setLesson(x.data);
      } else {
        alert(x.error);
      }
    });
  }, []);
  console.log(lesson);
  return (
    <div className="lesson-page">
      <div className="lesson">
        <h1 className="lesson-page__title text-center">{lesson.lessonTitle}</h1>
        <div className="lesson-page__content">
          <ReactMarkdown>{lesson.lessonContent}</ReactMarkdown>
        </div>
        {multimedia && (
          <div className="lesson-page__multimedia">
            <h2 className="lesson-page__multimedia-title">Multimedia</h2>
            {multimedia}
          </div>
        )}
      </div>
      <div className="lesson-page__quiz">
        <h4 className="lesson-page__quizzes-title">Exercise of the lesson</h4>
        <Row>
          {quizzes.map((quiz, index) => (
            <Question
              key={index}
              prompt={quiz.prompt}
              options={quiz.options}
              correctAnswer={quiz.correctAnswer}
              handleAnswer={handleAnswerSelect}
              questionIndex={index}
            />
          ))}
        </Row>
        <div className={`flex between ${finishedQuiz ? "" : "hide"}`}>
          {score !== null && (
            <div className="lesson-page__score">
              <p>
                You scored {score} out of {quizzes.length}
              </p>
            </div>
          )}
          <button
            type="button"
            className="btn btn-dark"
            onClick={handleSubmitQuiz}
            //disable= not when all inputs are !=null (if some inputs are null, disabled=true)
            disabled={!quizzes.every((quiz) => quiz.selected !== null)} //disabled =true if score
          >
            Submit
          </button>
        </div>
      </div>
      <div className="flex around my-2">
        <button className="btn" onClick={toPrevious}>
          Previous
        </button>
        <button className={`btn ${disabled ? "disable" : ""}`} onClick={toNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LessonPage;
