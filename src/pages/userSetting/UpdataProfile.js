import React, { Fragment, useContext, useEffect } from "react";
import Logo from "../../layouts/nav-bars/Logo";
import { Formik, Form, Field, FieldArray } from "formik";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import AuthedProfile from "../../context/AuthProfile/AuthProfileContext";
import AuthContext from '../../context/Auth/AuthContext'
const ProfilePageUpdate = () => {
  const authedprofile = useContext(AuthedProfile);
  const auth = useContext(AuthContext)
  const {csrfToken} = auth
  const { update_profile, profile, msg, error } = authedprofile;
  const history = useHistory();

  const initalvalues = {
    name: profile.name,
    type: profile.type,
    phNumbers: profile.phNumbers,
    subjects: profile.subjects,
    location: profile.location,
    about: profile.about,
    website: profile.website,
  };
  const onSubmit = (value) => {
    update_profile(value);
  };
  useEffect(()=> {
    csrfToken()
    // eslint-disable-next-line
  },[])
  return (
    <Fragment>
      <header>
        <Logo />
      </header>
      <main>
        <div className="main">
          <button className="history-back" onClick={() => history.goBack()}>
            <ArrowBackIosIcon />
            Back
          </button>
          <Formik initialValues={initalvalues} onSubmit={onSubmit}>
            <Form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <Field name="name" type="text"></Field>
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
                  <option style={{ padding: "7px" }} value="Private University">
                    Private University
                  </option>
                  <option style={{ padding: "7px" }} value="Tuition">
                    Tuition
                  </option>
                </Field>
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
                        </div>
                        <button className="add-btn" type="button">
                          <i
                            className="fas fa-plus fa-lg"
                            onClick={() => push("")}
                          ></i>
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
                        <button className="add-btn" type="button">
                          <i
                            className="fas fa-plus fa-lg"
                            onClick={() => push("")}
                          ></i>
                        </button>
                      </Fragment>
                    );
                  }}
                </FieldArray>
              </div>
              <div className="form-group">
                <label htmlFor="location">Address</label>
                <Field
                  name="location"
                  type="text"
                  placeholder="Type your address"
                ></Field>
              </div>
              <div className="form-group">
                <label htmlFor="address">About</label>
                <Field
                  name="about"
                  type="text"
                  placeholder="About your school"
                  as={"textarea"}
                ></Field>
              </div>
              <div className="form-group">
                <label htmlFor="website">website</label>
                <Field name="website" type="text"></Field>
              </div>
              {msg && <div className="msg-area ">{msg}</div>}
              {error && <div className='error-msg'> {error}</div>}
              <div className="btn-submit">
                <button type="submit">Submit</button>
              </div>
              <div style={{ height: "20px" }}></div>
            </Form>
          </Formik>
        </div>
      </main>
    </Fragment>
  );
};

export default ProfilePageUpdate;
