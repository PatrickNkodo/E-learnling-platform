import React from "react";
import img from "../../assests/images/ui-ux.png"
import { Link } from 'react-router-dom';
import Course_detail from '../../pages/Course_detail'
const CourseCard = (props) => {
  let {title, description,instructorName,numberOfLessons,studentsEnrolled } = props.item;
  if(title.length>60){
    title  = title.slice(0, 30) + '...';  //cut the title, and add the 3 dots
  }
  const data={
    lessons:100,
    stars:30,
    enrolled:50
  }
  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={img} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title flex mb-4" style={{alignItems:'stretch',height:'2rem'}}>{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i className="ri-book-open-line"></i> {data.lessons} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i className="ri-user-line"></i> {data.enrolled} Students
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center mb-0">
            <i className="ri-star-fill"></i> {data.stars} Students
          </p>

          <button className=" btn btn-sm enroll d-flex align-items-center gap-1">
            View course
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
