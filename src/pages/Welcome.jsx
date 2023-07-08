import React from 'react'
import './welcome.css'
import { useLocation, useNavigate } from 'react-router'
const Welcome = () => {
  const redirect=useNavigate()
  const location=useLocation()
    const {data}=location.state
    const onStartLesson=()=>{
      redirect('/lesson',{state:{courseId:data.id,studentId:data.studentId}})
    }
    const onStartLater=()=>{
      redirect('/home')
    }
  return (
  <div className="welcome-page pt-lg-5">
      <div className='welcome'>
     <div className="">
     <h1>Welcome to the "{data.title}" course!</h1>
      <p>
        You successfully enrolled for this course!. 
        You can now start the lessons. We promise you that by the end of the lesson, you'll be a master👌
      </p>
      <p>Are you ready to start the lesson?</p>
      <button onClick={onStartLesson}>Start the lesson</button>
      <button onClick={onStartLater}>Start later</button>
     </div>
    </div>
  </div>
  );
}
export default Welcome;