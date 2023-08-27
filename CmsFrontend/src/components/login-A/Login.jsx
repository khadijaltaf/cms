
import './Login.css'
import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login

/////////////



  return (

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

  );
}

export default Login;

