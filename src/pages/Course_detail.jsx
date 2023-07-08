import React,{useEffect,useState} from 'react';
import { Link, useNavigate,useLocation} from 'react-router-dom';
import img from "../assests/images/ui-ux.png";
import './course_detail.css'

const CourseDetailPage = () => {
  // const [data,setData]=useState({});
  const redirect=useNavigate();
  const location = useLocation();
  const data=location.state
  const course = {
    id: 1,
    title: 'Introduction to React',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit quam, repellendus 
    quaerat nemo aspernatur! Voluptatum aperiam quia, minus labore recusandae eos expedita ducimus eius sed, magnam modi unde et fugit molestiae aspernatur deserunt quod quidem culpa accusamus facere explicabo! 
    Quos exercitationem necessitatibus consectetur unde non deleniti autem officia ipsa.`,
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
     <h1>{data.title}</h1>
      <img src={img} alt={course.title} />
      <p className='instructor'><b>Course Instructor:</b></p>
      <Link to={{pathname:'/instructor'}} state={{instructor:data.instructorName}}><b>{data.instructorName}</b></Link>
      <p>{data.description}</p>
     <div className="flex center">
        <button className='btn p-3' onClick={()=>redirect('/welcome')}>Enroll now</button>
     </div>
     </div>
     <div className="block2">
     <h2>Lessons</h2>
     <div className="content">
      <ul>
        {data.lessons.map(({lessonTitle:title,duration},index) => (
          <li key={index}>
           <div className="flex between">
          <h5> {`${index+1}.${title.length>40 ? title.slice(0,30)+'...':title}.`}</h5>
            <p>Duration: {duration}mins</p>
           </div>
            <p>Video: <a href={''}>videoUrl</a></p>
          </li>
        ))}
      </ul>
     </div>
        </div>
    </div>
  );
};

export default CourseDetailPage;