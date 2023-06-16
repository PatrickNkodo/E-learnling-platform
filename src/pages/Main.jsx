import React, { Fragment, useState} from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from "../components/Header/Header";
import OurCourses from "../components/Courses-section/OurCourses";
import Course_detail from "../pages/Course_detail";
import Enrollsuccess from "../pages/EnrollSuccess";
import Lesson from "../pages/Lesson";
import Instructordetail from "../pages/Instructordetail";
import Footer from "../components/Footer/Footer";
import Home from "./Home";
import Error from "./Error";

const Main = () => {
  const [login,setLogin]=useState(true);
  return (
    <BrowserRouter>
   <div className="main-parent">
    <Header/>
  <div className="routes">
  <Routes>
    <Route path="/" element={<Home/>} />
     <Route path="/courses" element={<OurCourses />} />
     <Route path="/welcome" element={<Enrollsuccess />} />
     <Route path="/coursedetail" element={<Course_detail />} />
     <Route path="/instructor" element={<Instructordetail />} />
     <Route path="/lesson" element={<Lesson />} />
     <Route path='*' element={<Error/>} />
   </Routes>
  </div>
     <Footer/>
   </div>
    </BrowserRouter>
  );
};

export default Main;
