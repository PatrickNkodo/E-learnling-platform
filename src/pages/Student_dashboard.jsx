import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    courses: [
      {
        id: 1,
        title: 'Introduction to React',
        progress: 60,
        image: 'https://via.placeholder.com/150x150',
      },
      {
        id: 2,
        title: 'JavaScript Basics',
        progress: 100,
        image: 'https://via.placeholder.com/150x150',
      },
      {
        id: 3,
        title: 'HTML & CSS Fundamentals',
        progress: 35,
        image: 'https://via.placeholder.com/150x150',
      },
    ],
  };

  return (
    <div className="dashboard-page">
      <h1>Welcome back, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <h2>My Courses</h2>
      <div className="course-list">
        {user.courses.map((course) => (
          <div key={course.id} className="course-item">
            <Link to={`/courses/${course.id}`}>
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>Progress: {course.progress}%</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;