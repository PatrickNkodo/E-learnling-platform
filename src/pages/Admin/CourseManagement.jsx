import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Modal, ModalHeader, ModalBody, ModalFooter, Container } from "reactstrap";
import { Link,useNavigate } from "react-router-dom";
import "./adminDashboard.css";
import { useEverywhere } from "../context";

const AdminCourseManagement = () => {
  const { addLesson,fetchSingleCourse,deleteLesson } = useEverywhere();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(10);
  const [formValues, setFormValues] = useState({
    lessonTitle: "",
    lessonContent: "",
  });
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = data?.lessons?.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const totalPages = Math.ceil(data?.lessons?.length / coursesPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  async function fetchThisCourse(){
    const { id } = location.state;
    let info=await fetchSingleCourse(id)
    if(info.error){
      return  alert('Error:'+info.error)
    }
    setData(info);
  }
  useEffect(() => {
   fetchThisCourse()
}, [location.state]);
    const redirect=useNavigate()
  const editLesson = (data,id) => {
    localStorage.setItem('title',data.lessonTitle)
    localStorage.setItem('text',data.lessonContent)
    redirect('/createlesson',{state:{id,updating:true}})
  };
  const newLesson=()=>{
    localStorage.removeItem('title')
    localStorage.removeItem('text')
    redirect("/createlesson", {state:{ id: data._id }})
  }
  const handleDeleteCourse = async(courseId,lessonId) => {
    let done=await deleteLesson({id:courseId,lessonId})
    if(done.success){
        const courseInfo= await fetchSingleCourse(data._id)
        setData(courseInfo)
        alert(done.success)
    }
  };

  return (
    <div className="admin-course-management-page bg-light">
      <h1 className="admin-course-management-page__title">Course Management</h1>
      <div className="admin-dashboard-page__title mb-2">
        <center>{data.title}</center>
      </div>

      {/* <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
            Adding a lesson
        </ModalHeader>
        <ModalBody>
        <div className="admin-course-management-page__form-container">
        <h2 className="admin-course-management-page__form-title">Add Lesson</h2>
      </div>
        </ModalBody>
        <ModalFooter>
        <Link to='/createlesson' state={{data:data}}><button type="submit" className="btn-sm mt-2">Add Lesson</button></Link>
        </ModalFooter>
      </Modal> */}
      <div className="admin-course-management-page__course-list">
     <Container>
        <div className="flex between px-2">
        <h2 className="admin-course-management-page__list-title">
          Lesson List
        </h2>
        <div className="admin-dashboard-page__add">
          <button className="btn" onClick={newLesson}>
            <i className="ri-book-2-line text-light"></i>Add Lesson
          </button>
      </div>
        </div>
     {data?.lessons?.length > 0 ? (
          <div className="">
            <table className="table table-striped table-hover table-bordered">
              <thead className="bg-black text-white">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Lesson Number</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentCourses.map((lesson) => (
                  <React.Fragment key={lesson._id}>
                    <tr>
                      <td>{lesson.lessonTitle}</td>
                      <td>{lesson.lessonNumber}</td>
                      <td>
                          <button className="btn-sm btn-success" onClick={()=>editLesson(lesson,data._id)}>
                            <i className="ri-pencil-line text-light"></i> Edit
                          </button>
                        &nbsp;
                        <button
                          className="btn-sm btn-danger"
                          onClick={() => handleDeleteCourse(data._id,lesson._id)}
                        >
                          <i className="ri-delete-bin-7-line text-light"></i>{" "}
                          Delete
                        </button>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
                <tr className="border">
                  <td colSpan="2">
                    <b>Total:</b>
                  </td>
                  <td><b>{data.lessons.length}</b></td>
                </tr>
              </tbody>
            </table>
            <nav>
              <ul className="pagination">
                {pageNumbers.map((number) => (
                  <li
                    key={number}
                    className={'page-item'}
                  >
                    <button
                      className={`btn box-shadow-none ${currentPage === number ? " bg-dark" : ""}`}
                      onClick={() => setCurrentPage(number)}
                    >
                      {number}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ) : (
          <p>No Lessons found.</p>
        )}
     </Container>
      </div>
    </div>
  );
};

export default AdminCourseManagement;