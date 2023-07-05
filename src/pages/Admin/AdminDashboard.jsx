import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import "./adminDashboard.css";
import { useEverywhere } from "../context";

const AdminDashboardPage = () => {
  let [totalAdmins, setTotalAtotalAdmins] = useState(0);
  let [totalStudents, setTotalStudents] = useState(0);
  let [totalTeachers, setTotalTeachers] = useState(0);
  let [totalCourses, setTotalCourses] = useState(0);
  const [data, setData] = useState([]);
  const [courses, setCourses] = useState([]);
  const {allUsers,fetchCourses}=useEverywhere();

  totalTeachers=data.filter(x=>x.userType=='teacher')
  totalAdmins=data.filter(x=>x.admin==true)
  totalStudents=data.filter(x=>x.userType=='student')
  useEffect(() => {
      allUsers().then(data=>setData(data))
      fetchCourses().then(data=>setTotalCourses(data))
  }, []);

  return (
    <div className="admin-dashboard-page">
      <h1 className="admin-dashboard-page__title">Admin Dashboard</h1>
      <div className="admin-dashboard-page__add mb-2">
          <Link to=''><button className="btn"><i class="ri-user-add-line"></i>Add admin</button></Link>
      </div>
      <div className="admin-dashboard-page__stats">
        <div className="admin-dashboard-page__stat">
          <h2 className="admin-dashboard-page__stat-title">Total Admins</h2>
          <p className="admin-dashboard-page__stat-value">{totalAdmins.length}</p>
        </div>
        <div className="admin-dashboard-page__stat">
          <h2 className="admin-dashboard-page__stat-title">Total Students</h2>
          <p className="admin-dashboard-page__stat-value">{totalStudents.length}</p>
        </div>
        <div className="admin-dashboard-page__stat">
          <h2 className="admin-dashboard-page__stat-title">Total Teachers</h2>
          <p className="admin-dashboard-page__stat-value">{totalTeachers.length}</p>
        </div>
        <div className="admin-dashboard-page__stat">
          <h2 className="admin-dashboard-page__stat-title">Total Courses</h2>
          <p className="admin-dashboard-page__stat-value">{totalCourses.length}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;