import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/Graphic.jpg";
import courseImg3 from "../../assests/images/ui-ux.jpeg";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 5,
    students: 4,
    rating: 5,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 9,
    students: 6,
    rating: 10,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 6,
    students: 12,
    rating: 8,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section id="courses">
      <Container>
        <Row style={{ alignItems: "end" }}>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Courses</h2>
                <p>
                  Start, redirect or advance your career with our courses.<br />
                  We provide you means to learn some key courses which will boost your CV
                </p>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
