import React, { useState, useEffect, useRef } from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";

const AboutUs = () => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const componentRect = componentRef.current.getBoundingClientRect(); //get dimensions of the item
      const windowHeight = window.innerHeight;

      //getBoundingCLientRect returns 3 values: top(distance from top of document to top of component),bottom(distance from top of document to bottom of component),height(height of component. ie bottom-top)
      //if top of component is < windowHeight (window is already going down the component body) && componentRect is >0 (it has a body)
      if (componentRect.top < windowHeight && componentRect.bottom > 0) {
        setIsComponentVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" ref={componentRef}>
      <Container>
        <center className="mb-5">
          <h2>About Us</h2>
        </center>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      {isComponentVisible && (
                        <CountUp start={0} end={25} duration={2} suffix="" />
                      )}
                    </span>

                    <p className="counter__title">Students</p>
                  </div>
                  <div className="single__counter">
                    <span className="counter">
                      {isComponentVisible && (
                        <CountUp start={0} end={5} duration={3} suffix="" />
                      )}
                    </span>
                    <p className="counter__title">Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;