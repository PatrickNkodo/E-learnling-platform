import React, { useEffect, useState } from "react";
import "./AdminDashboardPage.css";

const AdminDashboardPage = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [inactiveUsers, setInactiveUsers] = useState(0);

  useEffect(() => {
    // Fetch data from API or database
    // Replace with your own API or database call
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setTotalUsers(data.totalUsers);
        setActiveUsers(data.activeUsers);
        setInactiveUsers(data.inactiveUsers);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="admin-dashboard-page">
      <h1 className="admin-dashboard-page__title">Admin Dashboard</h1>
      <div className="admin-dashboard-page__stats">
        <div className="admin-dashboard-page__stat">
          <h2 className="admin-dashboard-page__stat-title">Total Users</h2>
          <p className="admin-dashboard-page__stat-value">{totalUsers}</p>
        </div>
        <div className="admin-dashboard-page__stat">
          <h2 className="admin-dashboard-page__stat-title">Active Users</h2>
          <p className="admin-dashboard-page__stat-value">{activeUsers}</p>
        </div>
        <div className="admin-dashboard-page__stat">
          <h2 className="admin-dashboard-page__stat-title">Inactive Users</h2>
          <p className="admin-dashboard-page__stat-value">{inactiveUsers}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;