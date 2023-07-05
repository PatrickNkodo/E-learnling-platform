import React, { useRef, useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import "./header.css";
import { useEverywhere } from "../../pages/context";

export const navLinks = [
  {
    display: "Home",
    url: "#home",
    key: "ri-home-4-line",
  },
  {
    display: "Login",
    url: "#login",
    key: "ri-login-box-line",
  },
  {
    display: "About",
    url: "#about",
    key: "ri-information-line",
  },
  {
    display: "Courses",
    url: "#courses",
    key: "ri-book-2-line",
  },
  {
    display: "Testimonials",
    url: "#testimonials",
    key: "ri-chat-1-line",
  },
];

export const navLinks2 = [
  {
    display: "Home",
    url: "/home",
    key: "ri-home-4-line",
  },
  {
    display: "My Courses",
    url: "mycourses",
    key: "ri-book-2-line",
  },
  {
    display: "Profile",
    url: "/profile",
    key: "ri-account-box-line",
  },
  {
    display: "Logout",
    url: "#",
    key: "ri-logout-box-r-line",
  },
];
const navLinks3 = [
  {
    display: "Dashboard",
    url: "/admin",
    key: "ri-user-add-line",
  },
  {
    display: "View courses",
    url: "/home",
    key: "ri-eye-line",
  },
  {
    display: "Profile",
    url: "/profile",
    key: "ri-account-box-line",
  },
  {
    display: "Logout",
    url: "#",
    key: "ri-logout-box-r-line",
  },
];

const Header = () => {
  const { fetchProfile } = useEverywhere();
  const [scrolled, setScrolled] = useState(false);
  const location=useLocation()
  let [admin,setAdmin]=useState()
  // Listen for the scroll event on the window
  useEffect(() => {
    setAdmin(localStorage.getItem('admin'))
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
  }, [location]);
  const menuRef = useRef(null);
  const menuToggle = () => {
    menuRef.current.classList.toggle("active");
  };
  const logout = (e) => {
    e.preventDefault(); // ton prevent default click event
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    window.location.href='/'
  };
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="navigation d-flex align-items-center justify-content-between">
        <div className="logo">
          <h2 className=" d-flex align-items-center gap-1">
            <i className={`ri-pantone-line ${scrolled && "text-white"}`}></i>{" "}
            Learners.
          </h2>
        </div>

        <div className="nav d-flex align-items-center gap-5">
          <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
            <ul className="nav__list">
              {admin === 'true'
                ? navLinks3.map((item, index) => (
                    <li key={index} className="nav__item">
                      <a
                        className={`${scrolled ? "below" : ""}`}
                        href={item.url}
                        onClick={index === 3 ? logout : null}
                      >
                        <i
                          className={`${item.key} ${scrolled && "text-white"}`}
                        ></i>
                        <span>{item.display}</span>
                      </a>
                    </li>
                  ))
                : admin==='false'
                ? navLinks2.map((item, index) => (
                    <li key={index} className="nav__item">
                      <a
                        className={`${scrolled ? "below" : ""}`}
                        href={item.url}
                        onClick={index === 3 ? logout : null}
                      >
                        <i
                          className={`${item.key} ${scrolled && "text-white"}`}
                        ></i>
                        <span>{item.display}</span>
                      </a>
                    </li>
                  ))
                : navLinks.map((item, index) => (
                    <li key={index} className="nav__item">
                      <a
                        className={`${scrolled ? "below" : ""}`}
                        href={item.url}
                      >
                        <i
                          className={`${item.key} ${scrolled && "text-white"}`}
                        ></i>
                        <span>{item.display}</span>
                      </a>
                    </li>
                  ))}
            </ul>
          </div>
        </div>

        <div className="mobile__menu">
          <span>
            <i className="ri-menu-line" onClick={menuToggle}></i>
          </span>
        </div>
      </div>
    </header>
  );
};
export default Header;
