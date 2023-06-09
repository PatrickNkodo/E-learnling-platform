import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/Student.jpg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section id="home" style={{marginTop:0}}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
                Our platform is meant to study, <br />  No need to have an imposed schedule.<br /> 
                Work at your rythm, and learn our best courses.
              </p>
            </div>
            {/* <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div> */}
          </Col>

          <Col lg="6" md="6" className="pt-5">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
