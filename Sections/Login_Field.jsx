import React from "react";
import { Link } from "react-router-dom";

const Login_Field = () => {
  return (
    <section>
      <div className="login_container">
        <h1 className="login_title">Login</h1>
        <form className="login_inputs">
          <input type="text" className="login_input" placeholder="Email: " />
          <input className="login_input" type="text" placeholder="Password: " />
        </form>
        <div className="login_btn-container">
          <button className="login_btn">Sign In</button>
          <Link to={'/Register'} className="link">
          <button className="login_btn">Join Now</button>
          </Link>
        </div>
        <div className="forgot_container">
          <p className="forgot_password">Forgot your password?</p>
        </div>
      </div>
    </section>
  );
};

export default Login_Field;
