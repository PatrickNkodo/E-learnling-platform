import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

const LoginPage = ({method}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirect=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href='/courses'
  };
  return (
   <section id='login'>
     <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className='form-control'
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
           className='form-control'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
      <p>Don't have an account? <b onClick={method}>Register here</b></p>
      <p>Forgot your password? <b>Reset password</b></p>
    </div>
   </section>
  );
};

export default LoginPage;