import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the basics of React and build your first web app.',
    instructor: 'Jane Smith',
    image: 'https://via.placeholder.com/150x150',
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
    ],
  };

  return (
    <div className="course-detail-page">
      <h1>{course.title}</h1>
      <img src={course.image} alt={course.title} />
      <p>{course.description}</p>
      <p>Instructor: {course.instructor}</p>
      <p>Price: ${course.price}</p>
      <h2>Lessons</h2>
      <ul>
        {course.lessons.map((lesson) => (
          <li key={lesson.id}>
            <h3>{lesson.title}</h3>
            <p>Duration: {lesson.duration}</p>
            <p>Video: <a href={lesson.videoUrl}>{lesson.videoUrl}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetailPage;