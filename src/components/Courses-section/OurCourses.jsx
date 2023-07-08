import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import CourseCard from "./CourseCard";
import { useEverywhere } from "../../pages/context";


const OurCourses = () => {
  const [coursesData,setCourseData]=useState([]);
 const {fetchCourses}=useEverywhere();
useEffect(()=>{
  fetchCourses().then(x=>setCourseData(x.slice(0,4)))
},[]) 
  return (
    <section id="courses">
      <Container className="pt-5">
        <Row>
          <Col lg="12">
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
            </div>
          </Col>
            {coursesData?.map((item) => (
              <Col lg="3" md="4" sm="6" key={item._id}>
                <a href='#login' style={{textDecoration:'none'}}><CourseCard item={item} /></a>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurCourses;
