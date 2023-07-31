import React, { useEffect, useRef, useState } from "react";
import ReactMde, { Preview } from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import "./createLesson.css";
import { useEverywhere } from "./context";
import QuizCreator from "./Admin/QuizzCreator";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { useNavigate, useLocation } from "react-router";

function MarkdownEditor() {
  const location = useLocation();
  const [updating, setUpdating] = useState(false);
  const [value, setValue] = useState(localStorage.getItem("text"));
  const [lessonId, setLessonId] = useState("");
  const [title, setTitle] = useState(localStorage.getItem("title"));
  const [goodTitle, setGoodTitle] = useState(false);
  const [selectedTab, setSelectedTab] = useState("write");
  const [quizzData, setQuizzData] = useState([]);
  const { addLesson } = useEverywhere();
  const [send, setSend] = useState(false);
  const redirect = useNavigate();
  function handleValueChange(value) {
    localStorage.setItem("text", value);
    setValue(value);
  }
  const titleRef = useRef(null);
  async function updateLesson() {
    saveLesson(lessonId, title, value, updating);
  }
  function sendData(data) {
    setQuizzData(data);
  }
  function validateQuizData(quizData) {
    const allQuestionsFilled = quizData?.questions?.every((question) => {
      return question.questionText.trim() !== "";
    });

    const allAnswersFilled = quizData?.questions?.every((question) => {
      return question.answerOptions.every((answerOption) => {
        return answerOption.answerText.trim() !== "";
      });
    });

    const allCorrectAnswersSelected = quizData?.questions?.every((question) => {
      return question.answerOptions.some((answerOption, index) => {
        return answerOption.isCorrect && index === question.correctAnswer;
      });
    });

    if (!allQuestionsFilled) {
      alert("Fill all quiz questions");
      return false;
    }
    if (!allAnswersFilled) {
      alert("Fill all answers");
      return false;
    }

    if (!allCorrectAnswersSelected) {
      alert("Select the correct answer for each question");
      return false;
    }
    return true;
  }
  async function saveLesson(id, title, content, updating = false) {
    setSend(true);
    if (value.length < 200) {
      return alert(
        "Please, your lesson is very short. Try to add some content"
      );
    }
    console.log(quizzData);
    let quizReady = validateQuizData(quizzData);
    if (quizReady) {
      let saved = await addLesson({
        id,
        lessonTitle: title,
        lessonContent: content,
        quizzData:quizzData.questions,
        updating,
      });
      if (saved.success) {
        alert(saved.success);
        // return
        localStorage.removeItem("text");
        localStorage.removeItem("title");
        redirect("/coursemanagement", { state: { id } });
      } else {
        alert("Error:" + saved.error);
        redirect("/coursemanagement", { state: { id: lessonId } });
      }
      console.log(saved);
    }
  }
  function handler() {
    if (title.length < 5) {
      alert("Title is too short! Please give a good title");
    } else {
      setGoodTitle(true);
    }
  }
  useEffect(() => {
    !goodTitle && titleRef.current.focus();
    const { id,updaing } = location.state;
    if(updating){setUpdating(true)}
    setLessonId(id);
  }, []);
  console.log(lessonId);
  return (
    <div id="createLesson">
      {!goodTitle ? (
        <Container>
          <label htmlFor="courseName">Lesson Title:</label>
          <input
            ref={titleRef}
            type="text"
            id="lessonTitle"
            name="lessonTitle"
            value={localStorage.getItem("title")}
            onChange={(e) => {
              setTitle(e.target.value);
              localStorage.setItem("title", e.target.value);
            }}
          />
          <div className="flex end mt-2">
            <button className="btn" onClick={handler}>
              Go to lesson body
            </button>
          </div>
        </Container>
      ) : (
        <Container>
          <button className="btn mb-2" onClick={() => setGoodTitle(false)}>
            Change Title
          </button>
          <ReactMde
            value={localStorage.getItem("text")}
            onChange={handleValueChange}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            minEditorHeight="400"
            classes={{ preview: "preview" }}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(converter.makeHtml(markdown))
            }
            childProps={{
              writeButton: {
                tabIndex: -1,
              },
            }}
          />
          <QuizCreator title={title} send={send} sendData={sendData} />
          <div className="flex end my-4">
            {updating ? (
              <button className="btn" onClick={updateLesson}>
                Update lesson
              </button>
            ) : (
              <button
                className="btn"
                onClick={() => saveLesson(lessonId, title, value)}
              >
                Save lesson
              </button>
            )}{" "}
            &nbsp;
            <Link to="/coursemanagement" state={{ id: lessonId }}>
              <button className="btn bg-danger">Cancel</button>
            </Link>
          </div>
        </Container>
      )}
    </div>
  );
}

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

export default MarkdownEditor;
