import React, { Fragment, useContext } from "react";
import Logo from "../../layouts/nav-bars/Logo";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link, Redirect } from "react-router-dom";
import Authcontext from "../../context/Auth/AuthContext";
const Login = () => {
  const authcontext = useContext(Authcontext);
  const { login_user, isLoggedIn, error } = authcontext;
  const initalvalues = {
    email: "",
    password: "",
  };
  const onSubmit = (value) => {
    login_user(value);
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email type")
      .required("Email is required"),
    password: yup.string().required("Password is Required"),
  });
  if (isLoggedIn) {
    return <Redirect to={`/user`} />;
  } else {
    return (
      <Fragment>
        <header>
          <Logo></Logo>
        </header>
        <main>
          
          <div className="auth-forms">
          <div className='error-msg'>
            {error}
          </div>
            <Formik
              initialValues={initalvalues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Please enter your email"
                  ></Field>
                  <ErrorMessage name="email"></ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Please enter your password"
                  ></Field>
                  <ErrorMessage name="password"></ErrorMessage>
                </div>
                <div className="btn-submit">
                  <button type="submit">Submit</button>
                </div>
                <div className="redirect">
                  Don't have an account. PLease
                  <Link to="register">
                    <h4>Sign Up</h4>
                  </Link>
                </div>
              </Form>
            </Formik>
          </div>
        </main>
      </Fragment>
    );
  }
};
export default Login;
