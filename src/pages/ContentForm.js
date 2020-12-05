import React, {
  Fragment,
  useState,
  useRef,
  useContext,
  useEffect,
} from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as yup from "yup";
import Logo from "../layouts/nav-bars/Logo";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import Uploading from "../layouts/upload";
//context
import AuthProfileCOntext from "../context/AuthProfile/AuthProfileContext";
import Auth from "../context/Auth/AuthContext";

const ContentForm = () => {
  const authprofile = useContext(AuthProfileCOntext);
  const auth = useContext(Auth);
  const { user, loaduser } = auth;
  const { add_profile, uploading, profile } = authprofile;
  const [file, setFile] = useState();
  const hiddenFileInput = useRef(null);

  const { url } = useRouteMatch();
  const initialValues = {
    name: "",
    type: "",
    phNumbers: [""],
    subjects: [""],
    address: "",
    about: "",
    website: "",
  };
  const onSubmit = (value) => {
    const formdata = new FormData();
    formdata.append("coverImg", file);
    formdata.append("content", JSON.stringify(value));
    add_profile(formdata);
  };

  const validationSchema = yup.object({
    name: yup.string().required("Is required"),
    type: yup.string().required("Type is Required"),
    subjects: yup.string().required("Is required"),
    address: yup.string().required("Is required"),
    about: yup.string().required("Is required"),
  });

  const onFileChange = (e) => {
    const param = e.target.files[0];
    setFile(param);
  };
  useEffect(() => {
    loaduser();

    // eslint-disable-next-line
  }, [profile]);
  if (user.hasProfile === true) {
    return <Redirect to={`/user`}></Redirect>;
  } else {
    return (
      <Fragment>
        {uploading ? <Uploading></Uploading> : null}
        <header>
          <Logo></Logo>
        </header>
        <main>
          <div className="main">
            <Router>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                <Switch>
                  <Route exact path={`${url}`}>
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
                          <option style={{ padding: "7px" }}>
                            Please choose one
                          </option>
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
                    </Form>
                    <div className="foot">
                      <Link to={`${url}/form2`}>
                        <p>Next</p>
                      </Link>
                    </div>
                  </Route>

                  <Route path={`${url}/form2`}>
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
                      <div className="form-group">
                        <label htmlFor="website">Website</label>
                        <Field name="website" type="text"></Field>
                      </div>
                      {file ? (
                        <div className="preview-img">
                          <Preview file={file}></Preview>
                        </div>
                      ) : null}
                      <div className="add-img">
                        <input
                          type="file"
                          name="file"
                          accept="image/*"
                          onChange={onFileChange}
                          className="file-upload"
                          ref={hiddenFileInput}
                        />
                        <button
                          type="button"
                          className="custom-upload-button"
                          onClick={(event) => hiddenFileInput.current.click()}
                        >
                          Choose a file
                        </button>
                      </div>
                      <div className="btn-submit">
                        <button type="submit">Submit</button>
                      </div>
                    </Form>
                    <div className="foot">
                      <Link to={`${url}`} className="footer">
                        Back
                      </Link>
                    </div>
                  </Route>
                </Switch>
              </Formik>
            </Router>
          </div>
        </main>
      </Fragment>
    );
  }
};

const Preview = ({ file }) => {
  const [preview, setPreview] = useState();

  const load = (img) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      setPreview(result);
    };
    reader.readAsDataURL(img);
  };
  load(file);
  return <img src={preview} alt="" />;
};

export default ContentForm;
