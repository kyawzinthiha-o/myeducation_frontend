import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Authnavbar from "../../layouts/authnavbar";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const { email, password, password2 } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("registered user");
    console.log(user);
  };
  return (
    <Fragment>
      <div className="auth-nav-bar">
        <Authnavbar></Authnavbar>
      </div>
      <div className="form-container">
        <h1>Account Register</h1>
        <form onSubmit={onSubmit}>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={email} onChange={onChange} />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password2">Conform Password</label>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              required
            />
          </div>
          <input type="submit" className="btnSubmit-register" />
        </form>
        <div className="margin"></div>
        <div className="form-text">
          Don't have an account? Go to
          <Link className="link" to="/login">
            Sign-Up
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
