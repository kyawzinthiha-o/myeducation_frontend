import React, { Fragment, useContext, useEffect } from "react";
import Logo from "../../layouts/nav-bars/Logo";
import AuthContext from "../../context/Auth/AuthContext";
import { Redirect, Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
const Varification = () => {
  const authcontext = useContext(AuthContext);
  const { sendmail, user, check, error } = authcontext;
  const mail = {
    email: user.email,
  };

  useEffect(() => {
    if (!user.isVarified) {
      if (user.email) {
        sendmail(mail);
      }
    }
    // eslint-disable-next-line
  }, [user.email]);
  const onSubmit = (value) => {
    check(value);
  };
  const initialValues = {
    code: "",
  };
  const validationSchema = yup.object({
    code: yup.string().required("Code is Required"),
  });

  const sendEmailAgain = (e) => {
    e.preventDefault();
    if (user.email) {
      sendmail(mail);
    }
  };
  if (user.isVarified) {
    return <Redirect to="/user"></Redirect>;
  } else {
    return (
      <Fragment>
        <header>
          <Logo></Logo>
        </header>
        <main>
          <div className="main">
          <div className='error-msg'>
            {error}
          </div>
            <div className="varification">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form className="vari-form">
                  <div className="input-number">
                    <Field type="number" name="code" maxLength="4" />
                  </div>
                  <div className="button-sumlit">
                    <button type="submit"> Submit</button>
                  </div>
                  <div className="changeEmail">
                    <p>
                      <Link to="/changemail"> Change Email</Link>
                    </p>
                  </div>
                  <div className="text">
                    Didn't receive any code.
                    <p onClick={sendEmailAgain}> Resend </p>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
};

export default Varification;
