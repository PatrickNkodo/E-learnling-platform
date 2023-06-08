import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Introduction to React',
      description: 'Learn the basics of React and build your first web app.',
      instructor: 'Jane Smith',
      image: 'https://via.placeholder.com/150x150',
      price: 49.99,
    },
    {
      id: 2,
      title: 'JavaScript Basics',
      description: 'Learn the fundamentals of JavaScript and start building interactive web pages.',
      instructor: 'John Doe',
      image: 'https://via.placeholder.com/150x150',
      price: 29.99,
    },
    {
      id: 3,
      title: 'HTML & CSS Fundamentals',
      description: 'Master the basics of HTML and CSS and start building your own web pages.',
      instructor: 'Sarah Johnson',
      image: 'https://via.placeholder.com/150x150',
      price: 19.99,
    },
  ]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div className="course-list-page">
      <h1>Course List</h1>
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div className="course-list">
        {sortedCourses.map((course) => (
          <div key={course.id} className="course-item">
            <Link to={`/courses/${course.id}`}>
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>Instructor: {course.instructor}</p>
              <p>Price: ${course.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseListPage;