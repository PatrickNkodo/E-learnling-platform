import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About US",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },

  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },

  {
    display: "Purchases Guide",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col lg="4" md="6" className="mb-4">
            <h2 className="d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> Learners.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span className="me-1">
                <a href="https://www.facebook.com">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>

              <span className="me-1">
                <a href="https://www.instagram.com">
                  <i className="ri-instagram-line"></i>
                </a>
              </span>

              <span className="me-1">
                <a href="https://www.linkedin.com">
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>

              <span className="me-1">
                <a href="https://www.twitter.com">
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="4" md="6" className="mb-4">
            <div className="get-in-touch">
              <h6 className="fw-bold mb-3">Get in Touch</h6>

              <p className="mb-2">Address: Yaounde, Cameroon</p>
              <p className="mb-2">Phone: +237 696000000</p>
              <p className="mb-0">Email: email@gmail.com</p>
            </div>
          </Col>

          <Col lg="4" md="6" className="mb-4">
            <div className="back-to-top">
              <a href="#" className="btn btn-dark">
                Back to top
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;