import React, { useEffect, useRef, useState } from "react";
import ReactMde, { Preview } from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import "./createLesson.css";
import { useEverywhere } from "./context";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import {useNavigate, useLocation } from "react-router";

function MarkdownEditor() {
  const location = useLocation();
  const [updating,setUpdating]=useState(false)
  const [value, setValue] = useState(localStorage.getItem('text'));
  const [lessonId, setLessonId] = useState("");
  const [title, setTitle] = useState(localStorage.getItem('title'));
  const [goodTitle, setGoodTitle] = useState(false);
  const [selectedTab, setSelectedTab] = useState("write");
  const { addLesson } = useEverywhere();
  const redirect=useNavigate()
  function handleValueChange(value) {
    localStorage.setItem('text',value)
    setValue(value);
  }
  const titleRef=useRef(null);
  async function updateLesson() {
    saveLesson(lessonId,title,value,updating)
  }
  async function saveLesson(id,title,content,updating=false) {
    if(value.length<200){return alert('Please, your lesson is very short. Try to add some content')}
    let saved = await addLesson({
      id,
      lessonTitle: title,
      lessonContent: content,
      updating
    });
    if (saved.success) {
      alert(saved.success);
      localStorage.removeItem('text')
      localStorage.removeItem('title')
      redirect('/coursemanagement',{state:{id}})
    } else {
      alert("Error:" + saved.error);
      redirect('/coursemanagement',{state:{id:lessonId}})
    }
    console.log(saved);
  }
  function handler() {
    if (title.length < 5) {
      alert("Title is too short! Please give a good title");
    } else {
      setGoodTitle(true);
    }
  }
  useEffect(()=>{
  titleRef.current.focus();
  const {id}= location.state
  location.state.updating?setUpdating(true):null
  setLessonId(id)
},[])
console.log(lessonId);
  return (
    <div>
      {!goodTitle ? (
        <Container>
          <label htmlFor="courseName">Lesson Title:</label>
          <input
          ref={titleRef}
            type="text"
            id="lessonTitle"
            name="lessonTitle"
            value={localStorage.getItem('title')}
            onChange={(e) => {setTitle(e.target.value);localStorage.setItem('title',e.target.value)}}
          />
         <div className="flex end mt-2">
         <button className="btn" onClick={handler}>
            Go to lesson body
          </button>
         </div>
        </Container>
      ) : (
       <Container>
          <button className="btn mb-2" onClick={()=>setGoodTitle(false)}>Change Title</button>
          <ReactMde
            value={localStorage.getItem('text')}
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
          <div className="flex end my-4">
          {updating
          ?   <button className="btn" onClick={updateLesson}>Update lesson</button>
          :  <button className="btn" onClick={()=>saveLesson(lessonId,title,value)}>
              Save lesson
            </button>} &nbsp;
            <Link to='/coursemanagement' state={{id:lessonId}}>
            <button className="btn bg-danger">
              Cancel
            </button>
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
