import React, { useState } from "react";
import "./SettingsPage.css";

const SettingsPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNotificationChange = (event) => {
    setNotification(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Notification:", notification);
  };

  return (
    <div className="settings-page">
      <h1 className="settings-page__title">Settings</h1>
      <form onSubmit={handleSubmit}>
        <div className="settings-page__form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="settings-page__form-group">
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="settings-page__form-group">
          <label htmlFor="notification">Receive Notifications</label>
          <input
            type="checkbox"
            id="notification"
            checked={notification}
            onChange={handleNotificationChange}
          />
        </div>
        <button type="submit" className="settings-page__submit-button">Save Changes</button>
      </form>
    </div>
  );
};

export default SettingsPage;