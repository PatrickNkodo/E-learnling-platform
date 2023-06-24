import React, { useState } from "react";
import "./profile.css";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Patrick");
  const [email, setEmail] = useState("pat@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  const courses = [
    { id: 1, name: "Introduction to React" },
    { id: 2, name: "Advanced React Techniques" },
    { id: 3, name: "React Native" },
  ];

  const [currentPassword, setCurrentPassword] = useState("pat");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setName("Patrick");
    setEmail("pat@gmail.com");
    setPhoneNumber("");
    setGender("");
  };

  const handleSave = () => {
    // TODO: Implement save functionality to update the student's profile data
    console.log("Saving changes...");
    setIsEditing(false);
  };

  const handlePasswordSave = () => {
    if (currentPassword !== currentPassword) { // Replace with actual logic to check the current password
      alert("Current password is incorrect");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      alert("New passwords do not match");
      return;
    }
    // TODO: Implement save functionality to update the student's password
    alert("Saving password changes...");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setIsEditing(false)
  };

  return (
    <div className="student-profile">
      <div className="dashboard">
        <h3>Dashboard</h3>
        <ul>
          <li>
            <a href="#" onClick={handleEdit}>
              Modify Account Information           </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsEditing("password")}>
              Modify Passwords
            </a>
          </li>
        </ul>
      </div>
      <div className="profile">
        {isEditing === "password" ? (
          <div>
            <h3>Modify Passwords</h3>
            <label htmlFor="currentPassword">Current Password:</label>
            <input
              required
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <br />
            <label htmlFor="newPassword">New Password:</label>
            <input
              required
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <br />
            <label htmlFor="confirmNewPassword">Confirm New Password:</label>
            <input
              required
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <br />
            <button onClick={handlePasswordSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        ) : isEditing ? (
          <div>
            <label htmlFor="name">Name:</label>
            <input
              required
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              required
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              required
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br />
            <label htmlFor="gender">Gender:</label>
            <select
              required
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br />
            <button onClick={handlePasswordSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        ) : (
          <div>
            <h3>View Profile</h3>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone Number:</strong> {phoneNumber ? phoneNumber : "N/A"}</p>
            <p><strong>Gender:</strong> {gender ? gender : "N/A"}</p>
            <h4>Courses:</h4>
            <ul>
              {courses.map((course) => (
                <li key={course.id}>{course.name}</li>
              ))}
            </ul>
            <br />
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
            <button onClick={() => setIsEditing("password")}>Modify Passwords</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;