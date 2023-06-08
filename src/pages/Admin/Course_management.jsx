import React, { useState, useEffect } from "react";
import "./AdminCourseManagementPage.css";

const AdminCourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [students, setStudents] = useState([]);

  const [formValues, setFormValues] = useState({
    courseId: "",
    courseName: "",
    instructorId: "",
    studentIds: [],
  });

  useEffect(() => {
    // Fetch data from API or database
    // Replace with your own API or database call
    const fetchCourseData = async () => {
      try {
        const response = await fetch("/api/courses");
        const data = await response.json();
        setCourses(data.courses);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchInstructorData = async () => {
      try {
        const response = await fetch("/api/instructors");
        const data = await response.json();
        setInstructors(data.instructors);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchStudentData = async () => {
      try {
        const response = await fetch("/api/students");
        const data = await response.json();
        setStudents(data.students);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourseData();
    fetchInstructorData();
    fetchStudentData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleMultipleSelectChange = (event) => {
    const { name, options } = event.target;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setFormValues({ ...formValues, [name]: selectedValues });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Submit form data to API or database
    // Replace with your own API or database call
    console.log(formValues);
  };

  const handleDeleteCourse = (courseId) => {
    // Delete course from API or database
    // Replace with your own API or database call
    console.log(`Deleting course with ID ${courseId}`);
  };

  return (
    <div className="admin-course-management-page">
      <h1 className="admin-course-management-page__title">Course Management</h1>
      <div className="admin-course-management-page__form-container">
        <h2 className="admin-course-management-page__form-title">Add Course</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formValues.courseName}
            onChange={handleInputChange}
          />
          <label htmlFor="instructorId">Instructor:</label>
          <select
            id="instructorId"
            name="instructorId"
            value={formValues.instructorId}
            onChange={handleInputChange}
          >
            <option value="">Select Instructor</option>
            {instructors.map((instructor) => (
              <option key={instructor.id} value={instructor.id}>
                {instructor.name}
              </option>
            ))}
          </select>
          <label htmlFor="studentIds">Students:</label>
          <select
            id="studentIds"
            name="studentIds"
            multiple
            value={formValues.studentIds}
            onChange={handleMultipleSelectChange}
          >
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>
          <button type="submit">Add Course</button>
        </form>
      </div>
      <div className="admin-course-management-page__course-list">
        <h2 className="admin-course-management-page__list-title">Course List</h2>
        {courses.length > 0 ? (
          <ul>
            {courses.map((course) => (
              <li key={course.id}>
                <span>{course.name}</span>
                <button onClick={() => handleDeleteCourse(course.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No courses found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminCourseManagement;