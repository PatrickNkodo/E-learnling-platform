import React, { Fragment, useState} from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Lesson from "./Lesson";
import Profile from "./Profile";
import Enrollsuccess from "./EnrollSuccess";
import Course_detail from "./Course_detail";
import MyCourses from "./MyCourses";
import CreateLesson2 from "./CreateLesson2"
import CourseManagement from "./Admin/CourseManagement"
import Courses from "../components/Courses-section/Courses"
import Instructordetail from "./Instructordetail";
import Home from "./Home";
import Error from "./Error";
import Welcome from "./Welcome";
import AdminDashboardPage from "./Admin/AdminDashboard";
import TeacherDashboardPage from "./Admin/TeacherDashboard";
import DashboardItemDetail from "./Admin/DashboardItemDetail";
import AdminSignup from "./Admin/AdminSignup";
import QuizCreator from "./Admin/QuizzCreator";

const Main = () => {
  return (
    <BrowserRouter>
   <div className="main-parent">
    <Header/>
 <div className="routes">
  <Routes>
    <Route path="/" element={<Home/>} />
     <Route path="/home" element={<Courses />} />
     <Route path="/profile" element={<Profile />} />
     <Route path="/welcome1" element={<Enrollsuccess />} />
     <Route path="/coursedetail" element={<Course_detail />} />
     <Route path="/instructor" element={<Instructordetail />} />
     <Route path="/quiz" element={<QuizCreator />} />
     <Route path="/mycourses" element={<MyCourses />} />
     <Route path="/welcome" element={<Welcome />} />
     <Route path="/lesson" element={<Lesson />} />
     <Route path="/adminsignup" element={<AdminSignup />} />
     <Route path="/createlesson" element={<CreateLesson2/>} />
     <Route path="/coursemanagement" element={<CourseManagement/>} />
     <Route path="/admin" element={<AdminDashboardPage/>} />
     <Route path="/teacher" element={<TeacherDashboardPage/>} />
     <Route path="/details" element={<DashboardItemDetail/>} />
     <Route path='*' element={<Error/>} />
   </Routes>
  </div>
     <Footer/>
   </div>
    </BrowserRouter>
  );
};
export default Main;
