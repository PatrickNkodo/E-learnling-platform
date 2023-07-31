import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./adminDashboard.css";
import { useEverywhere } from "../context";
import DashboardItemDetail from "./DashboardItemDetail";

const AdminDashboardPage = () => {
  const { allUsers, fetchCourses } = useEverywhere();
  const [data, setData] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  const totalTeachers = data.filter((x) => x.userType === "teacher");
  const totalAdmins = data.filter((x) => x.userType === "admin");
  const totalStudents = data.filter((x) => x.userType === "student");
  const totalCourses = courses;

  React.useEffect(() => {
    allUsers().then((data) =>{setData(data);/*console.log(data);*/});
    fetchCourses().then((data) => {setCourses(data);/*console.log(data)*/});
  }, []);

  const handleStatItemClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="admin-dashboard-page">
      <h1 className="admin-dashboard-page__title">Admin Dashboard</h1>
      <div className="admin-dashboard-page__add mb-2">
        <Link to="/adminsignup">
          <button className="btn">
            <i className="ri-user-add-line"></i>Add admin
          </button>
        </Link>
      </div>
      <div className="admin-dashboard-page__stats">
        <div
          className="admin-dashboard-page__stat"
          onClick={() => handleStatItemClick(totalAdmins)}
        >
          <h2 className="admin-dashboard-page__stat-title">Total Admins</h2>
          <p className="admin-dashboard-page__stat-value">{totalAdmins.length}</p>
        </div>
        <div
          className="admin-dashboard-page__stat"
          onClick={() => handleStatItemClick(totalStudents)}
        >
          <h2 className="admin-dashboard-page__stat-title">Total Students</h2>
          <p className="admin-dashboard-page__stat-value">{totalStudents.length}</p>
        </div>
        <div
          className="admin-dashboard-page__stat"
          onClick={() => handleStatItemClick(totalTeachers)}
        >
          <h2 className="admin-dashboard-page__stat-title">Total Teachers</h2>
          <p className="admin-dashboard-page__stat-value">{totalTeachers.length}</p>
        </div>
        <div
          className="admin-dashboard-page__stat"
          onClick={() => handleStatItemClick(totalCourses)}
        >
          <h2 className="admin-dashboard-page__stat-title">Total Courses</h2>
          <p className="admin-dashboard-page__stat-value">{totalCourses.length}</p>
        </div>
      </div>
      {selectedType && <DashboardItemDetail type={selectedType} onClose={() => setSelectedType(null)}/>}
    </div>
  );
};

export default AdminDashboardPage;