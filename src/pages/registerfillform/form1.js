import React, { Fragment } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { Icon } from "@material-ui/core";
import * as yup from "yup";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Form1 = () => {
  const initialValues = {
    name: "",
    type: "",
    phNumbers: [""],
    subjects: [""],
    address: "",
    about: "",
  };

  const onSubmit = (value) => {
    console.log(value);
  };

  const validationSchema = yup.object({
    name: yup.string().required("Is required"),
    type: yup.string().required("Type is Required"),
    phNumbers: yup.string().required("Is required"),
    subjects: yup.string().required("Is required"),
    address: yup.string().required("Is required"),
    about: yup.string().required("Is required"),
  });

  return (
    <Fragment>
      <header>
        <div className="nav single">
          <h2>My Education</h2>
        </div>
      </header>
      <main>
        <Router>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Switch>
              <Route exact path="/">
                <Form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text"></Field>
                    <ErrorMessage name="name"></ErrorMessage>
                  </div>

                  {/* Select component */}
                  <div className="form-group select-group">
                    <label htmlFor="type">Type</label>
                    <Field component="select" name="type">
                      <option
                        style={{ padding: "7px" }}
                        value="Private High School"
                      >
                        Private High School
                      </option>
                      <option
                        style={{ padding: "7px" }}
                        value="Private University"
                      >
                        Private University
                      </option>
                      <option style={{ padding: "7px" }} value="Tuition">
                        Tuition
                      </option>
                    </Field>
                    <ErrorMessage name="type"></ErrorMessage>
                  </div>

                  {/* Array component */}
                  <div className="form-group">
                    <label htmlFor="Subjects"> Subjects</label>
                    <FieldArray name="subjects">
                      {(FieldArrayProps) => {
                        const { push, remove, form } = FieldArrayProps;
                        const { values } = form;
                        const { subjects } = values;

                        return (
                          <Fragment>
                            <div>
                              {subjects.map((ph, index) => (
                                <div key={index}>
                                  <Field
                                    name={`subjects[${index}]`}
                                    type="text"
                                  ></Field>
                                  {index > 0 && (
                                    <button
                                      className="delete-btn"
                                      type="button"
                                      onClick={() => {
                                        remove(index);
                                      }}
                                    >
                                      -
                                    </button>
                                  )}
                                </div>
                              ))}
                              <ErrorMessage name="subjects"></ErrorMessage>
                            </div>
                            <button className="add-btn">
                              <Icon
                                className="fa fa-plus-circle"
                                color="primary"
                                onClick={() => push("")}
                              />
                            </button>
                          </Fragment>
                        );
                      }}
                    </FieldArray>
                  </div>

                  {/* Array component */}

                  <div className="form-group">
                    <label htmlFor="phNumbers"> Ph-Numbers</label>
                    <FieldArray name="phNumbers">
                      {(FieldArrayProps) => {
                        const { push, remove, form } = FieldArrayProps;
                        const { values } = form;
                        const { phNumbers } = values;

                        return (
                          <Fragment>
                            <div>
                              {phNumbers.map((ph, index) => (
                                <div key={index}>
                                  <Field
                                    name={`phNumbers[${index}]`}
                                    type="text"
                                  ></Field>
                                  {index > 0 && (
                                    <button
                                      className="delete-btn"
                                      type="button"
                                      onClick={() => {
                                        remove(index);
                                      }}
                                    >
                                      -
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                            <button className="add-btn">
                              <Icon
                                className="fa fa-plus-circle"
                                color="primary"
                                onClick={() => push("")}
                              />
                            </button>
                          </Fragment>
                        );
                      }}
                    </FieldArray>
                  </div>
                </Form>
                <div className="foot">
                  <Link to="/form2">
                    {" "}
                    <p>Next</p>
                  </Link>
                </div>
              </Route>

              <Route path="/form2">
                <Form>
                  <div className="form-group">
                    <label htmlFor="address">Addrewss</label>
                    <Field
                      name="address"
                      type="text"
                      placeholder="Type your address"
                    ></Field>
                    <ErrorMessage name="address"></ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">About</label>
                    <Field
                      name="about"
                      type="text"
                      placeholder="About your school"
                      as={"textarea"}
                    ></Field>
                    <ErrorMessage name="about"></ErrorMessage>
                  </div>
                  <div className="btn-submit">
                    <button type="submit">Submit</button>
                  </div>
                </Form>
                <div className="foot">
                  <Link to="" className="footer">
                    Back
                  </Link>
                </div>
              </Route>
            </Switch>
          </Formik>
        </Router>
      </main>
    </Fragment>
  );
};

export default Form1;
