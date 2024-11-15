import React from "react";
import { Link } from "react-router-dom";

const Register_Field = () => {
  return (
    <section>
      <div className="login_container">
        <h1 className="login_title">Register</h1>
        <form className="register_inputs">
          <input
            type="text"
            className="register_input"
            placeholder="First Name "
          />
          <input
            type="text"
            className="register_input"
            placeholder="Last Name "
          />
          <input type="text" className="register_input" placeholder="Email " />
          <input
            className="register_input"
            type="text"
            placeholder="Password "
          />
        </form>
        <div className="login_btn-container">
          <button className="login_btn">Join Now</button>
          <Link to={"/Login"} className="link">
            <button className="login_btn">Sign In</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register_Field;
