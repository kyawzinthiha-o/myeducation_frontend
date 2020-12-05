import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducaer from "./AuthReducer";
import {
  LOGIN_USER,
  LOG_OUT,
  RTEGISTER_USER,
  LOAD_USER,
  VARIFY_USER,
  SEND_MAIL,
  UPDATE_PASSWORD,
  UPDATE_EMAIL,
  CLEAR,
  REGISTER_FAIL,
  LOG_IN_FAIL,
  VARIFY_USER_FAIL,
  UPDATE_PASSWORD_FAIL,
  SEND_EMAIL_FAIL,
  UPDATE_EMAIL_FAIL,
  ERROR_CLEAR,
  LOAD_ERROR,

} from "../Types";
import axios from "axios";
import helper from "../axios/request";
const AuthState = (props) => {
  const initalState = {
    user: "",
    isLoggedIn: false,
    token: '',
    msg: "",
    error: ""
  };
  const [state, dispatch] = useReducer(AuthReducaer, initalState);
  helper();
  //LOGIN_USER
  const login_user = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth", data);
      await dispatch({ type: LOGIN_USER, payload: res.data });
      loaduser();
    } catch (error) {
      console.log(error.response.data.msg)
     dispatch({type: LOG_IN_FAIL, payload: error.response.data.msg}) 
     clearerror()
    }
  };
  //REGISTER_USER
  const register_user = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/user", data);
      await dispatch({ type: RTEGISTER_USER, payload: res.data });
      loaduser();
    } catch (error) {
      dispatch({type: REGISTER_FAIL, payload: error.response.data.msg})
      clearerror()
    }
  };
  //UPDATA_PASSWORD
  const update_password = async (data) => {
    try {
      console.log("changed");
      const res = await axios.put("http://localhost:5000/api/user", data);
      dispatch({ type: UPDATE_PASSWORD, payload: res.data.msg });
      setTimeout(() => {
        clear();
      }, 3000);
    } catch (error) {
      dispatch({type: UPDATE_PASSWORD_FAIL, payload: error.response.data.msg})
      clearerror()
    }
  };
  //LOAD_USER
  const loaduser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth");
      dispatch({ type: LOAD_USER, payload: res.data });
    } catch (error) {
      dispatch(
        { type: LOAD_ERROR, payload: error.response.data.msg }
      )
      clearerror()
    }
  };
  //log out user
  const logout = async () => {
    await axios.get("http://localhost:5000/api/logout");
    dispatch({ type: LOG_OUT });
  };

  //email varification
  const sendmail = async (mail) => {
    try {
      await axios.post("http://localhost:5000/confirmation/mail", mail);
      dispatch({ type: SEND_MAIL });
    } catch (error) {
      dispatch({type: SEND_EMAIL_FAIL, payload : error.response.data.msg})
      clearerror()
    }
  };
  //check code
  const check = async (code) => {
    try {
      await axios.post("http://localhost:5000/confirmation", code);
      dispatch({ type: VARIFY_USER });
      loaduser();
    } catch (error) {
      dispatch({type: VARIFY_USER_FAIL, payload: error.response.data.msg})
      clearerror()
    }
  };
  const changemail = async (email) => {
    try {
      const res = await axios.put("http://localhost:5000/api/user/updatemail", email);
      dispatch({ type: UPDATE_EMAIL, payload: res.data.msg });
      setTimeout(() => {
        clear();
      }, 3000);
      loaduser();
    } catch (error) {
      dispatch({type: UPDATE_EMAIL_FAIL, payload: error.response.data.msg})
      clearerror()
    }
  };
  const clear = () => {
    dispatch({ type: CLEAR });
  };
   const clearerror = async (timeout = 5000) =>{
    setTimeout(() => {
      dispatch({type: ERROR_CLEAR})
    }, timeout);
  } 
  const csrfToken = async()=> {
    const {data} = await axios.get('http://localhost:5000/csrfToken')

    axios.defaults.headers['X-CSRF-Token'] = data.csrfToken
  }
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        msg: state.msg,
        error : state.error,
        login_user,
        register_user,
        update_password,
        sendmail,
        check,
        loaduser,
        logout,
        changemail,
        csrfToken
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
