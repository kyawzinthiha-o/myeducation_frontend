import React, { Fragment, useContext } from "react";
import Logo from "../../layouts/nav-bars/Logo";
import { Redirect, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import AuthContext from "../../context/Auth/AuthContext";
const ChangeMail = () => {
  const history = useHistory();
  const authcontext = useContext(AuthContext);
  const { changemail, user, isLoggedIn, msg, error } = authcontext;

  const onSubmit = (value) => {
    changemail(value);
  };
  const initialValues = {
    email: "",
  };
  const validationSchema = yup.object({
    email: yup.string().required("Email is Required"),
  });
  if (isLoggedIn && !user.isVarified) {
    return (
      <Fragment>
        <header>
          <Logo></Logo>
        </header>
        <main>
          <div className="main">
            <button className="history-back" onClick={() => history.goBack()}>
              <ArrowBackIosIcon />
              Back
            </button>
            {msg && <div className="msg-area ">{msg}</div>}
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
                  <div className="input-text">
                    <Field type="text" name="email" />
                    <ErrorMessage name="email"></ErrorMessage>
                  </div>
                  <div className="button-sumlit">
                    <button type="submit"> Submit</button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </main>
      </Fragment>
    );
  } else if (!isLoggedIn) {
    return <Redirect to="/login"></Redirect>;
  } else {
    return <Redirect to="/user"></Redirect>;
  }
};

export default ChangeMail;
