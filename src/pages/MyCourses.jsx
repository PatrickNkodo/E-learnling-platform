import React from "react";
import "./MyCourses.css";
import courseImg1 from "../assests/images/web-design.png";
import courseImg2 from "../assests/images/graphics-design.png";
import courseImg3 from "../assests/images/ui-ux.png";
const MyCoursesPage = () => {
  const myCourses = [
    {
      id: 1,
      title: "Introduction to React",
      instructor: "John Doe",
      progress: 30,
      img:courseImg1
    },
    {
      id: 2,
      title: "Advanced React",
      instructor: "Jane Doe",
      progress: 60,
      img:courseImg2
    },
    {
      id: 3,
      title: "React Native",
      instructor: "Bob Smith",
      progress: 0,
      img:courseImg3
    },
    {
      id: 4,
      title: "Node.js",
      instructor: "Alice Brown",
      progress: 100,
      img:courseImg1
    },
  ];

  return (
    <div className="my-courses-container">
      <h1>My Courses</h1>
      <div className="my-courses-list">
        {myCourses.map((course) => (
          <div key={course.id} className="my-course-item">
            <img src={course.img} alt={course.title} />
            <div className="my-course-details">
              <h2>{course.title}</h2>
              <p>Instructor: {course.instructor}</p>
              <p>Progress:</p>
              <div className="progress">
                <span style={{width:`${course.progress}%`}}>{course.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCoursesPage;
