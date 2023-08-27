<<<<<<< HEAD
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Login.css'
=======
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
>>>>>>> d1625ea7acf4655cf008e3002d82d0fa0fac22f0

  return (
<<<<<<< HEAD
    <div><main class="main">
    <div class="container">
      <section class="wrapper">
        <div class="heading1">
          <h1 class="text text-large">Sign In</h1>
          <p class="text text-normal">New user? <span><Link to="/signup" class="text text-links">Create an account</Link></span>
          </p>
        </div>
        <form name="signin" class="form">
          <div class="input-control">
            <label for="email" class="input-label" hidden>Email Address</label>
            <input type="email" name="email" id="email" class="input-field" placeholder="Email Address"/>
          </div>
          <div class="input-control">
            <label for="password" class="input-label" hidden>Password</label>
            <input type="password" name="password" id="password" class="input-field" placeholder="Password"/>
          </div>
          <div class="input-control">
            <Link href="#" class="text text-links">Forgot Password</Link>
            <input type="submit" name="submit" class="input-submit" value="Sign In" disabled/>
          </div>
        </form>
        
      </section>
    </div>
  </main></div>
=======
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
>>>>>>> d1625ea7acf4655cf008e3002d82d0fa0fac22f0
  );
}

export default Login;

