import React,{useEffect,useState} from 'react';
import { Link, useNavigate,useLocation} from 'react-router-dom';
import img from "../assests/images/ui-ux.png";
import './course_detail.css'
import { useEverywhere } from './context';

const CourseDetailPage = () => {
  const [data,setData]=useState({});
  const redirect=useNavigate();
  const location = useLocation();
  const {fetchSingleCourse,enrollTocourse}=useEverywhere();
 async function enroll(id,title){
  let enrolled=await enrollTocourse({id})
  if(enrolled.success){
    alert(enrolled.success)
    console.log(enrolled);
    return redirect('/welcome',{state:{data:{id,title,studentId:enrolled.studentId}}})
  }
  alert(enrolled.error)
 }
 useEffect(()=>{
  const {id}=location.state
    fetchSingleCourse(id).then(x=>{setData(x)});
 },[])
  return (
    <section className="course-detail-page">
     <div className="block1">
     <h1>{data.title}</h1>
      <img src={img} alt={data.title} />
      <p className='instructor'><b>Course Instructor:</b></p>
      <Link to={{pathname:'/instructor'}} state={{email:data.instructorEmail}}><b>{data.instructorName}</b></Link>
      <p>{data.description}</p>
        <button className='btn' onClick={()=>enroll(data._id,data.title)}>Enroll now</button>
     </div>
     <div className="block2">
     <h2>Lessons</h2>
     <div className="content">
      <ul>
        {data?.lessons?.map(({lessonTitle:title,duration},index) => (
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
    </section>
  );
};

export default CourseDetailPage;