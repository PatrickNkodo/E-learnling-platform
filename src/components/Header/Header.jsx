import React, { useRef,useState,useEffect } from "react";
import { Container } from "reactstrap";
import "./header.css";

export const navLinks = [
  {
    display: "Home",
    url: "/#home",
  },
  {
    display: "Login",
    url: "/#login",
  },
  {
    display: "About",
    url: "/#about",
  },

  {
    display: "Courses",
    url: "/#courses",
  },
  {
    display: "Testimonials",
    url: "/#testimonials",
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Listen for the scroll event on the window
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past a certain point
      if (window.scrollY > 50) {
        // If they have, set the "scrolled" state to true
        setScrolled(true);
      } else {
        // If they haven't, set the "scrolled" state to false
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const menuRef = useRef(null);
  const menuToggle = () => {
    menuRef.current.classList.toggle("active");
  };
  return (
    <header className={`header ${scrolled?'scrolled':''}`}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class={`ri-pantone-line ${scrolled && 'text-white'}`}></i> Learners.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a className={`${scrolled?'below':''}`} href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
