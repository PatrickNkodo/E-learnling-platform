import { useState } from "react";
import './signup.css';
import { Row,Col } from "reactstrap";
import { useEverywhere } from "../../pages/context";
const Signup = ({method}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [userType, setUserType] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {createUser}=useEverywhere();

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Password and confirm password fields do not match!");
      return;
    }
    let data = await createUser({name,email,gender,password,number:phone,userType});
    if(data.user){
      alert('Account created successfully!');
      window.location.reload();
    }else{
      alert('An error occured')
      console.log(data)
    }
  };

  return (
    <section id="signup">
    <div className="signup">
    <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <Row>
        <Col md={6} lg={6} sm={12}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select gender...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        </Col>
        <Col md={6} lg={6} sm={12}>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="userType">User type</label>
          <select
            type="text"
            id="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>
        </Col>
        </Row>
       <div className="flex end">
       <button className="btn" type="submit">Sign Up</button>
       </div>
      </form>
      <p>Already have an account? login <b onClick={method}>Here</b></p>
    </div>
    </section>
  );
};

export default Signup;