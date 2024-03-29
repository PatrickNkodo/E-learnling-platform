import { useState } from "react";
import '../../components/Signup/signup.css';
import { useEverywhere } from "../../pages/context";
import { useNavigate } from "react-router";
const AdminSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {createUser}=useEverywhere();

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Password and confirm password fields do not match!");
      return;
    }
    let data = await createUser({name,email,gender,password,number:phone,userType:'admin'});
    if(data.user){
      alert('Account created successfully!');
      window.location.href('/dashboard');
    }else{
      alert('An error occured')
      console.log(data)
    }
  };

  return (
    <section id="signup" className="p-3">
    <div className="signup col-4 p-5" >
    <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
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
        <button className="btn" type="submit">Sign Up</button>
      </form>
    </div>
    </section>
  );
};

export default AdminSignup;