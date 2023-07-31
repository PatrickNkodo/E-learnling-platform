import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import "./adminDashboard.css";
import {Container,Row,Col,Modal,ModalHeader,ModalBody,ModalFooter,} from "reactstrap";
import { useEverywhere } from "../context";
import DashboardItemDetail from "./DashboardItemDetail";

const TeacherDashboardPage = () => {
  const { teacherCourses } = useEverywhere();
  const [data, setData] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [courseDescription, setCourseDescription] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage,setCoursesPerPage] = useState(5);
  const [courseTitle,setCourseTitle]=useState('')
  const [isOpen,setIsOpen] = useState(false);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = data.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(data.length / coursesPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

//   const redirect=useNavigate();
  const {createCourse}=useEverywhere()
  const newCourse=async()=>{
    let done= await createCourse({title:courseTitle,description:courseDescription})
    if(done.success){
        alert('Course creaded successfully')
        setIsOpen(false);
        fetchMyCourses()
    }else{alert(done.error)}
  }
  const fetchMyCourses=()=>{
    teacherCourses().then((data) => {
        if (data.data) {
          setEmpty(data.data.length < 1);
          setData(data.data);
        } else {
          alert("An error occurred");
          console.log(data.error);
        }
      });
  }
  React.useEffect(() => {
    fetchMyCourses()
  }, []);

  // const handleStatItemClick = (type) => {
  //   setSelectedType(type);
  // };


  return (
    <div className="admin-dashboard-page">
      <h1 className="admin-dashboard-page__title">Teacher Dashboard</h1>
      <div className="admin-dashboard-page__add mb-2">
          <button className="btn" onClick={()=>setIsOpen(true)}>
            <i className="ri-library-line"></i>Add course
          </button>
      </div>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
          <ModalHeader toggle={() => setIsOpen(!isOpen)}>
            Adding a new course
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
                <label htmlFor="course">Course Title</label>
                <input type="text" name="course" id="course" className="form-control" onChange={(e)=>setCourseTitle(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Course Description</label>
                <textarea name="description" id="description" className="form-control" onChange={(e)=>setCourseDescription(e.target.value)}/>
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn" onClick={newCourse}>Create course</button>
          </ModalFooter>
        </Modal>
      {empty ? (
        <h3 className="text-secondary text-center">You have no courses</h3>
      ) : (
        <div className="table-responsive">
          <h3>Dispensed Courses</h3>
          <table className="table table-striped table-hover table-bordered">
            <thead className="bg-black text-white">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Instructor</th>
                <th scope="col"># of Lessons</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentCourses.map((x,i) => (
                <tr key={i}>
                  <td>{x.title}</td>
                  <td>{x.instructorName} (You)</td>
                  <td>{x.numberOfLessons}</td>
                  <td>
                    <Link to='/coursemanagement' state={{id:x._id}}>
                        <button className="btn-sm btn-success"> <i className="ri-pencil-line text-light"></i> Edit</button>
                    </Link>
                    &nbsp;
                    <button className="btn-sm btn-danger">
                      <i className="ri-delete-bin-7-line text-light"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav>
            <ul className="pagination">
              {pageNumbers.map((number) => {
                return (
                  <li
                    key={number}
                    className={`page-item${
                      currentPage === number ? " active" : ""
                    }`}
                  >
                    <button
                      className="btn"
                      onClick={() => setCurrentPage(number)}
                    >
                      {number}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboardPage;
