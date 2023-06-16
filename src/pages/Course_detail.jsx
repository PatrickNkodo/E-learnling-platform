import React from 'react';
import { Link, redirect, useNavigate, useParams } from 'react-router-dom';
import img from "../assests/images/ui-ux.png";
import './course_detail.css'

const CourseDetailPage = () => {
  const { id } = useParams();
  const redirect=useNavigate();
  const course = {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the basics of React and build your first web app.',
    instructor: 'Bisso Jerry',
    image: img,
    price: 49.99,
    lessons: [
      {
        id: 1,
        title: 'Getting Started with React',
        duration: '1 hour',
        videoUrl: 'https://www.youtube.com/watch?v=xJZa2_aldDs',
      },
      {
        id: 2,
        title: 'Building Components',
        duration: '2 hours',
        videoUrl: 'https://www.youtube.com/watch?v=7S8v8jfLb1Q',
      },
      {
        id: 3,
        title: 'Styling with CSS in React',
        duration: '1.5 hours',
        videoUrl: 'https://www.youtube.com/watch?v=5_eN8o2VzNk',
      },
      {
        id: 1,
        title: 'Getting Started with React',
        duration: '1 hour',
        videoUrl: 'https://www.youtube.com/watch?v=xJZa2_aldDs',
      },
      {
        id: 2,
        title: 'Building Components',
        duration: '2 hours',
        videoUrl: 'https://www.youtube.com/watch?v=7S8v8jfLb1Q',
      },
      {
        id: 3,
        title: 'Styling with CSS in React',
        duration: '1.5 hours',
        videoUrl: 'https://www.youtube.com/watch?v=5_eN8o2VzNk',
      },
      {
        id: 1,
        title: 'Getting Started with React',
        duration: '1 hour',
        videoUrl: 'https://www.youtube.com/watch?v=xJZa2_aldDs',
      },
      {
        id: 2,
        title: 'Building Components',
        duration: '2 hours',
        videoUrl: 'https://www.youtube.com/watch?v=7S8v8jfLb1Q',
      },
      {
        id: 3,
        title: 'Styling with CSS in React',
        duration: '1.5 hours',
        videoUrl: 'https://www.youtube.com/watch?v=5_eN8o2VzNk',
      },
    ],
  };

  return (
    <div className="course-detail-page">
     <div className="block1">
     <h1>{course.title}</h1>
      <img src={course.image} alt={course.title} />
      <p>{course.description}</p>
     <div className="flex">
        <p className='instructor me-5'>Instructor:<Link to='/instructor'><b>{course.instructor}</b></Link></p>
        <button className='price btn' onClick={()=>redirect('/lesson')}>Enroll now</button>
     </div>
     </div>
     <div className="block2">
     <h2>Lessons</h2>
     <div className="content">
      <ul>
        {course.lessons.map((lesson,index) => (
          <li key={lesson.id}>
           <div className="flex between">
          <h5> {`${index+1}.${lesson.title}.`}</h5>
            <p>Duration: {lesson.duration}</p>
           </div>
            <p>Video: <a href={lesson.videoUrl}>videoUrl</a></p>
          </li>
        ))}
      </ul>
     </div>
        </div>
    </div>
  );
};

export default CourseDetailPage;