import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { navLinks } from "../Header/Header";

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
        <Row className="d-flex justify-content-between ms-5">
          <Col lg="4" md="6">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> Learners.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="4" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: Sylhet, Bangladesh</p>
            <p> Phone: +88 0123456789 </p>
            <p>Email: example@gmail.com</p>
          </Col>
          <Col lg="4" md="6">
           <a href="#" className="text-decoration-none"> <h6 className="fw-bold btn btn-dark">Back to top</h6></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
