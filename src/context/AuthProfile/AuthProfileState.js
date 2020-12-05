import React, { useReducer } from "react";

import AuthProfileContext from "./AuthProfileContext";
import AuthProfileReducer from "./AuthProfileReducer";
import {
  ADD_PROFILE,
  LOAD_PROFILE,
  UPDATE_PROFILE,
  CREATE_POST,
  LOAD_POST,
  UPLOADING,
  LOADING,
  CLEAR,
  UPDATE_COVER_IMG,
  REMOVE_PROFILE,
  NO_MORE_LOAD,
  ADD_PROFILE_FAIL,
  UPDATE_COVER_IMG_FAIL,
  UPDATE_PROFILE_FAIL,
  CREATE_POST_FAIL,
  GET_USER_FAIL,
  LOAD_POST_FAIL,
  CLEAR_AUTH_ERROR
} from "../Types";

//axios
import axios from "axios";
import header from "../axios/request";
const AuthProfileState = (props) => {
  const initalState = {
    profile: {},
    hasProfile: false,
    posts: [],
    loading: false,
    uploading: false,
    msg: "",
    Nomoreload: false,
    error: "",
    posterror: ""
  };
  header();
  const [state, dispatch] = useReducer(AuthProfileReducer, initalState);
  //Add Profile
  const add_profile = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/profile", data);
      dispatch({ type: ADD_PROFILE, payload: res.data });
    } catch (error) {
      dispatch({type : ADD_PROFILE_FAIL, payload: error.response.data.msg })
      clearautherror()
    }
  };
  const isloadig = (bol) => {
    dispatch({ type: LOADING, payload: bol });
  };
  //Get Profile
  const user_profile = async () => {
    try {
      isloadig(true);
      const res = await axios.get("http://localhost:5000/api/profile");
      await dispatch({ type: LOAD_PROFILE, payload: res.data });
      isloadig(false);
    } catch (error) {
      isloadig(false);
      console.log('enter errpr')
      dispatch({type :GET_USER_FAIL, payload: error.response.data.msg})
      clearautherror()
    }
  };
  //Update_Profile
  const update_profile = async (data) => {
    try {
      const res = await axios.put("http://localhost:5000/api/profile", data);
      dispatch({ type: UPDATE_PROFILE, payload: res.data.msg });
      user_profile();
      setTimeout(() => {
        clear();
      }, 10000);
    } catch (error) {
      dispatch({type: UPDATE_PROFILE_FAIL, payload: error.response.data.msg})
      clearautherror()
    }
  };
  //Create_Post
  const create_post = async (data) => {
    try {
      uploading(true);
      const res = await axios.post("http://localhost:5000/api/profile/upload", data);
      await dispatch({ type: CREATE_POST, payload: res.data });
      uploading(false);
    } catch (error) {
      uploading(false);
      dispatch({type: CREATE_POST_FAIL, payload: error.response.data.msg})
      clearautherror()
    }
  };
  const clear = () => {
    dispatch({ type: CLEAR });
  };
  //load post
  const load_post = async (skip) => {
    try{
      const res = await axios.get(`http://localhost:5000/api/profile/posts/${skip}`);
      dispatch({ type: LOAD_POST, payload: res.data });
      if (res.data.length < 10) {
        nomoreload(true);
      }
    } catch (error) {
    
      dispatch({type: LOAD_POST_FAIL, payload: error.response.data.msg})
      clearautherror()
    }
  };
  const uploading = (bol) => {
    dispatch({ type: UPLOADING, payload: bol });
  };
  //update cover img
  const uploadimg = async (data) => {
    try {
      const res = await axios.put("http://localhost:5000/api/profile/cover", data);
      dispatch({ type: UPDATE_COVER_IMG, payload: res.data.msg });
      setTimeout(() => {
        clear();
      }, 5000);
      user_profile();
    } catch (error) {
      dispatch({type: UPDATE_COVER_IMG_FAIL, payload: error.response.data.msg})
      clearautherror()
    }
  };
  const removeprofile = () => {
    dispatch({ type: REMOVE_PROFILE });
  };
  const nomoreload = (bol) => {
    dispatch({ type: NO_MORE_LOAD, payload: bol });
  };
  const clearautherror = ()=> {
    setTimeout(()=>{
      dispatch({type: CLEAR_AUTH_ERROR})
    }, 5000)
  }
  return (
    <AuthProfileContext.Provider
      value={{
        profile: state.profile,
        posts: state.posts,
        hasProfile: state.hasProfile,
        uploading: state.uploading,
        loading: state.loading,
        msg: state.msg,
        Nomoreload: state.Nomoreload,
        error : state.error,
        posterror: state.posterror,
        add_profile,
        user_profile,
        update_profile,
        create_post,
        load_post,
        uploadimg,
        removeprofile,
      }}
    >
      {props.children}
    </AuthProfileContext.Provider>
  );
};

export default AuthProfileState;
