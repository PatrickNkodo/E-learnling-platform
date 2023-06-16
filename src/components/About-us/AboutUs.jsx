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
      const windowHeight = window.innerHeight; //height of the window. it changes only on window resizing
      // console.log('Position:'+componentRect.y+'top:'+componentRect.top+'bottom: '+componentRect.bottom+'height:'+componentRect.height+'windowheight:'+windowHeight)
      //getBoundingCLientRect returns 3 values: top(distance from top of viewport to top of component),bottom(distance from top of viewport to bottom of component),height(height of component. ie bottom-top)
      // componentRect.top < windowHeight: This checks if the top of the component is < the height of the viewport.(ie part of viewport already accessing the component)
      // componentRect.bottom > 0: This checks if the bottom of the component is > the top of the viewport, given its top is 0(conponent still on viewport)
      //an existing positive distance on bottom means that the item is still on view port. once negative, it means it has passed the component. because 
      if (componentRect.top < windowHeight && componentRect.bottom >0) {
        setIsComponentVisible(true);
      }else{setIsComponentVisible(false)}
    };
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isComponentVisible]);

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