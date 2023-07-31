import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./MyCourses.css";
import courseImg1 from "../assests/images/web-design.png";

import { useEverywhere } from "./context";
import { Container } from "reactstrap";
const MyCoursesPage = () => {
  const [courses,setCourses]=useState('')
  const {mycourses}=useEverywhere();
useEffect(()=>{
  mycourses().then(courses=>{
    setCourses(courses)
  });
},[])
console.log(courses);
  return (
    <div className="my-courses-container">
      <Container>
      <h1>My Courses</h1>
      <div className="my-courses-list">
        {courses?.data ? (courses.data.map((course,i) => (
          <div key={course._id} className="my-course-item">
            <img src={courseImg1} alt={course.title} />
            <div className="my-course-details">
              <h2>{course.title}</h2>
              <p>Instructor: {course.instructorName}</p>
              <div className="flex between">
              <p>Progress:</p>
              <Link to='/lesson' state={{courseId:course._id,actualLesson:course.studentsEnrolled[0].level}}><button className="btn btn-sm p-1">Continue</button></Link>
              </div>
              <div className="progress">
                <span style={{width:`${course.percentage>0?course.percentage:0}%`}}>{course.percentage>0?`${course.percentage}%`:<b className="text-dark">0%</b>}</span>
              </div>
            </div>
          </div>
        )))
        :
        (<h4>You have no courses yet</h4>)
        }
      </div>
      </Container>
    </div>
  );
};

export default MyCoursesPage;
