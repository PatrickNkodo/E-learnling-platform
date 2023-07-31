import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./lesson.css";
import Question from "../components/Question/Question";
import { useLocation } from "react-router";
import { useEverywhere } from "./context";

const LessonPage = ({ multimedia }) => {
  const [disabled, setDisabled] = useState(true);
  const [score, setScore] = useState(null);
  const [lesson, setLesson] = useState({});
  const [quiz, setQuiz] = useState([]);
  const [lastprev, setLastPrev] = useState(false);
  const [lastNext, setLastNext] = useState(false);
  const [nextLesson, setNextLesson] = useState({});
  const [mainLevel, setMainLevel] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const {
    fetchNextLesson,
    fetchPrevLesson,
    fetchActualLesson,
    saveProgression,
  } = useEverywhere();
  const location = useLocation(); //useLocation is storing the values
  let { courseId, actualLesson } = location.state;
  // function handleAnswerSelect(correctAnswer) {
  function handleAnswerSelect(questionIndex, answerIndex) {
    setSelectedAnswer(answerIndex);
    console.log(questionIndex, answerIndex, "is the data");
    setQuiz((prevQuizzes) => {
      const newQuizzes = [...prevQuizzes];
      //newQuizzes[questionIndex] represents the array object to update
      newQuizzes[questionIndex] = {
        ...newQuizzes[questionIndex],
        selected: answerIndex,
      };
      return newQuizzes;
    });
    // console.log(quiz);
  }
  // console.log(lesson);
  function handleSubmitQuiz() {
    setDisabled(false);
    let correctAnswers = 0;
    let totalQuestions = 0;
    //check for each quiz question if the correct answer was choosen, and calculate score
    quiz.forEach((quiz) => {
      if (quiz.correctAnswer === quiz.selected) {
        correctAnswers++;
      }
      totalQuestions++;
    });
    if (
      correctAnswers / totalQuestions >= 0.75 ||
      typeof (correctAnswers / totalQuestions) == "number"
    ) {
      setScore(correctAnswers);
      setQuiz((prev) => {
        const data = prev.map((x) => {
          delete x.selected;
          return x;
        });
        saveProgression(lesson._id, lesson.lessonNumber, mainLevel).then(
          (x) => {
            if (x.data) {
              setNextLesson({ ...x.data, last: x.last });
              return; //console.log('raw data sent ',x);
            }
            console.log(x.error);
          }
        );
        return data;
      });
      return;
    }
  }
  let check =lesson.lessonNumber === mainLevel + 1 && mainLevel + 2 === nextLesson.lessonNumber + 2;
  console.log(
    nextLesson,
    "index ",
    mainLevel,
    "lesson",
    lesson.lessonNumber,
    "mainlevel+2=: ",
    mainLevel + 2,
    "nextlesson: ",
    nextLesson.lessonNumber,
    "validate",
    check
  );
  const toNext = async (e) => {
    setScore(null);
    if (e.target.classList.contains("disable")) {
      console.log("Button is disabled");
      e.preventDefault();
    } else {
      setLastPrev(false);
      if (Object.keys(nextLesson).length > 0) {
        setLesson(nextLesson);
        actualLesson = nextLesson.lessonNumber;
        if (nextLesson.last === "next") {
          setLastNext(true);
        }
        setQuiz(nextLesson.quiz);
        // mainLevel<nextLesson.lessonNumber-1
      }
      // let data=await fetchNextLesson(lesson._id,lesson.lessonNumber)
      // data.data?setLesson(data.data):console.log(data.error);
    }
  };

  const toPrevious = async () => {
    setScore(null);
    setLastNext(false);
    const data = await fetchPrevLesson(lesson._id, lesson.lessonNumber);
    setLesson(data.data);
    setQuiz(data.data.quiz);
    if (data.lastPrev === true) {
      setLastPrev(true);
    }
  };
  useEffect(() => {
    try {
      fetchActualLesson(courseId, actualLesson).then((x) => {
        setLesson(x.data);
        setMainLevel(x.data.lessonNumber - 1);
        //setQuiz(x.data.quiz)
        console.log(x);
        if (x.last === "lastPrev") {
          setLastPrev(true);
        } else if (x.last === "lastNext") {
          setLastNext(true);
        }
      });
    } catch (e) {
      console.log(e.message);
    }
  }, []);
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
          {quiz.map((item, index) => (
            <Question
              key={index}
              prompt={item?.questionText}
              answers={{ ...item.answerOptions }}
              correctAnswer={item.correctAnswer}
              handleAnswer={handleAnswerSelect}
              selectedAnswer={item.selected}
              questionIndex={index}
              selected={item?.selected}
            />
          ))}
        </Row>
        <div className={"flex between"}>
          {score !== null && (
            <div className="lesson-page__score">
              <p>
                You scored {score} out of {quiz.length}.{" "}
                {score === 3
                  ? "Good!"
                  : score === 4
                  ? "Excellent!"
                  : "Try again!"}
              </p>
            </div>
          )}
          <button
            type="button"
            className="btn btn-dark"
            onClick={handleSubmitQuiz}
            //disable= not when all inputs are !=null (if some inputs are null, disabled=true)
            disabled={!quiz.every((quiz) => quiz.hasOwnProperty("selected"))}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="flex around my-2">
        <button className="btn" onClick={toPrevious} disabled={lastprev}>
          Previous
        </button>
        <button
          className={`btn ${disabled ? "disable" : ""}`}
          onClick={toNext}
          disabled={lastNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LessonPage;
