import React, { useState,useEffect } from "react";
import "./profile.css";
import { useEverywhere } from "./context";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [data, setData] = useState({});
  const [courses, setCourses] = useState([]);
  const {fetchProfile,mycourses}=useEverywhere()
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const {updateProfile}=useEverywhere();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    fetchData()
  };
  const token = localStorage.getItem("token");
  // console.log({token});
  const handleSave = async() => {
    let data;
    if(isEditing=='password'){
      setNewPassword(undefined);
      if (newPassword !== confirmNewPassword) {
        alert("New password and confirm password do not match");
        return;
      }
      data= await updateProfile({actualPassword:currentPassword, password:newPassword})
      if(data.success){
        setIsEditing(false)
        alert(data.success);
      }else{ alert(data.error)}
    }else if(name && email && gender && phoneNumber && isEditing!='password'){
     data=await updateProfile({name, email,gender,number:phoneNumber})
     if(data.success){
      setIsEditing(false);
      alert(data.success);
    }else{ alert(data.error)}
    }
    await fetchData()
  };

  async function fetchData() {
    let user = await fetchProfile();
    let courses = await mycourses({});
    // setData(user.user);
    setCourses(courses);
    user=user.user
    setName(user.name);
    setEmail(user.email);
    setPhoneNumber(user.number);
    setGender(user.gender);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    // setIsEditing(false)
  }
  useEffect(() => { //create a function in useEffect to call another fxn getting data from an async function call
    fetchData();
  }, []);
  return (
    <div className="student-profile mt-lg-5">
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
            <button onClick={handleSave}>Save</button>
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
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <div>
            <h3>View Profile</h3>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone Number:</strong> {phoneNumber ? phoneNumber : "N/A"}</p>
            <p><strong>Gender:</strong> {gender ? gender : "N/A"}</p>
            <h4>My Courses:</h4>
            <ul>
              {courses.data? (courses.data.map((course,index) => (
                <li key={course._id}>{course.title}</li>
              ))):(
                <h4>You've no courses yet</h4>
              )}
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