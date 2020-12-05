import React, { Fragment, useContext } from "react";
import Logo from "../../layouts/nav-bars/Logo";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, Redirect } from "react-router-dom";
import * as yup from "yup";

import AuthContext from "../../context/Auth/AuthContext";
const Register = () => {
  const authcontext = useContext(AuthContext);
  const { register_user, isLoggedIn, error } = authcontext;

  const initalvalues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const onSubmit = (value) => {
    register_user(value);
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email type")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password does not match")
      .required("Confirm password is required"),
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
          <Formik
            initialValues={initalvalues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <div className="auth-forms">
            <div className='error-msg'>
            {error}
          </div>
              <Form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Please enter your email address"
                  ></Field>
                  <ErrorMessage name="email"></ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Pasword</label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Please enter your password"
                  ></Field>
                  <ErrorMessage name="password"></ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirmation password"
                  ></Field>
                  <ErrorMessage name="confirmPassword"></ErrorMessage>
                </div>

                <div className="btn-submit">
                  <button type="submit">Submit</button>
                </div>
                <div className="redirect">
                  Already have an account. Go to
                  <Link to="/login">
                    <h4>Log In</h4>
                  </Link>
                </div>
              </Form>
            </div>
          </Formik>
        </main>
      </Fragment>
    );
  }
};

export default Register;
