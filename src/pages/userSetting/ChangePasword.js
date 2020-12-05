import React, { Fragment, useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

import Auth from "../../context/Auth/AuthContext";
const ChangePassword = () => {
  const auth = useContext(Auth);
  const { update_password, error, msg } = auth;
  const initalvalues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const validationSchema = yup.object({
    oldPassword: yup.string().required("Old Password is Required"),
    newPassword: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Password does not match")
      .required("Confirm password is required"),
  });
  const onSubmit = (value) => {
    update_password(value);
  };
  return (
    <Fragment>
      {msg && <div className="msg-area ">{msg}</div>}
      {error && <div className='error-msg'>{error}</div>}
      <Formik
        initialValues={initalvalues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="oldPassword">Old Password</label>
            <Field name="oldPassword" type="password"></Field>
            <ErrorMessage name="oldPassword"></ErrorMessage>
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <Field name="newPassword" type="password"></Field>
            <ErrorMessage name="newPassword"></ErrorMessage>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field name="confirmPassword" type="password"></Field>
            <ErrorMessage name="confirmPassword"></ErrorMessage>
          </div>
          <div className="btn-submit">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default ChangePassword;
