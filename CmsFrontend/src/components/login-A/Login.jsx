<<<<<<< HEAD
// import React from 'react'
// import { Link, Outlet } from 'react-router-dom';

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login

/////////////

import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-container">
        <input
          type="email"
          placeholder="Username/Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="input-container">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <span className="eye-icon" onClick={togglePasswordVisibility}>
          {showPassword ? '👁️' : '👁️‍🗨️'}
        </span>
      </div>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <p className="signup-link">
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </div>
  );
}

export default Login;

