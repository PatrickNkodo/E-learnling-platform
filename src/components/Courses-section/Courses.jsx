import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard1";
import { useEverywhere } from "../../pages/context";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Courses = () => {
  const redirect = useNavigate();
  // Set up a state variable to keep track of whether the modal is open or closed
  const [isOpen, setIsOpen] = React.useState( sessionStorage.getItem('welcomed') ? false : true);
  const { fetchProfile } = useEverywhere();
  const [data, setData] = useState({});
  const [courses, setCourses] = useState([]);
  const { fetchCourses } = useEverywhere();
  useEffect(() => {
    fetchProfile().then((data) => setData(data.user));
    fetchCourses().then((data) => setCourses(data));
    sessionStorage.setItem('welcomed',true)
  }, []);

  return (
    <section id="courses">
      <Container>
        <Row style={{ alignItems: "end" }}>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Courses</h2>
                <p>
                  Start, redirect or advance your career with our courses.
                  <br />
                  We provide you means to learn some key courses which will
                  boost your CV
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {courses.map((item, i) => (
            <Col lg="3" md="4" sm="6" className="cards" key={i}>
              <Link to="/coursedetail" state={{id:item._id}}>
                <CourseCard key={item._id} item={item} />
              </Link>
            </Col>
          ))}
        </Row>

        {/* Add the modal component */}
        <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
          <ModalHeader toggle={() => setIsOpen(!isOpen)}>
            Hey {data?.name}! Welcome back to Learners!🙂
          </ModalHeader>
          <ModalBody>
            <p>We were waiting for you!</p>
            <p>
              Hope you're doing great, and want to continue to progress
              amazingly with us
            </p>
            <img
              src={courseImg1}
              alt="Course"
              className="img-fluid mx-auto d-block"
            />
          </ModalBody>
          <ModalFooter>
            <button className="btn" onClick={() => redirect("/mycourses")}>
              Go to my courses
            </button>
          </ModalFooter>
        </Modal>
      </Container>
    </section>
  );
};

export default Courses;
