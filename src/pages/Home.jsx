import React, { Fragment, useState} from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";

import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";

import Testimonials from "../components/Testimonial/Testimonials";

import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [login,setLogin]=useState(true);
  const switchComponent=()=>{setLogin(!login);}
  return (
    <Fragment>
      <HeroSection />
      {login?<Login method={switchComponent}/>:<Signup method={switchComponent}/>}
      <AboutUs/>
      <Courses />
      <ChooseUs />
      <Features />
      <Testimonials />
      <Newsletter />
    </Fragment>
  );
};
export default Home;
