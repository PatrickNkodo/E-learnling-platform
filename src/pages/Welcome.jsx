import React from 'react'
import './welcome.css'
import { useNavigate } from 'react-router'
const Welcome = () => {
  const redirect=useNavigate()
    const data={
      courseName:'React development',
    }
    const onStartLesson=()=>{
      redirect('/lesson')
    }
    const onStartLater=()=>{
      redirect('/home')
    }
  return (
  <div className="welcome-page">
      <div className='welcome'>
     <div className="">
     <h1>Welcome to the course!</h1>
      <p>
        You successfully enrolled for the {data.courseName} course!. 
        You can now start the lessons.
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