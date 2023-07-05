import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import "./login.css";
import { useEverywhere } from "../../pages/context";

const LoginPage = ({ method }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const redirect = useNavigate();
  const {customFetch}=useEverywhere()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data=await fetch("http://localhost:4000/login", {
        method: "post",
        body:JSON.stringify({email, password}),
        headers:{"Content-Type": "application/json"}
      });
      data=await data.json()
      if(data.InvalidCredentials){
        setInvalid(true)
        //console.log("Error",data);
      }else{
        //console.log(data);
        localStorage.setItem('admin',data.user.admin)
        localStorage.setItem('token',data.token)
        redirect('/home')
      }
    } catch (e) {
      console.log(e);
    }
    localStorage.setItem("auth", true);
  };
  useEffect(()=>{
    setTimeout(() => {
        setInvalid(false)
    }, 3000);
  },[invalid])
  return (
    <section id="login">
      <div className="login-page">
        <h1>Login</h1>
        {invalid && <small>Incorrect username or password</small>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              className="form-control"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
        <p>
          Don't have an account? <b onClick={method}>Register here</b>
        </p>
        <p>
          Forgot your password? <b>Reset password</b>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
