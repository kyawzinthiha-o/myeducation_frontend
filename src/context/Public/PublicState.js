import React, { useReducer } from "react";

import PublicContext from "./PublicContext";
import PublicReducer from "./PublicReducer";
import {
  GET_USER,
  GET_USER_PROFILE,
  DELETE_USER_PROFILE,
  IS_LOADING,
  DELETE_SEARCH,
  GET_USER_POST,
  GET_SEARCH,
  NO_MORE_LOAD,
  NO_POST_LOAD,
  CLEAR_NO_MORE_LOAD
} from "../Types";

//axios
import axios from "axios";
import ContentType from '../axios/contentType'
const PublicState = (props) => {
  const initialState = {
    users: [],
    searched: '',
    currentProfile: "",
    currentPosts: [  ],
    isloading: false,
    Nomoreload: false,
    PostNoMoreLoad : false,
  };

  const [state, dispatch] = useReducer(PublicReducer, initialState);

  ContentType()

  //get public data
  const getPublicdata = async (skip) => {
    console.log(skip)
    const res = await axios.get(`http://localhost:5000/api/public/publicdata/${skip}` );
    dispatch({ type: GET_USER, payload: res.data });
    if (res.data.length < 25) {
      nomoreload(true);
    }
  };
  //get public profile
  const setcurrent = async (username) => {
    try {
      isloadig(true);
      const res = await axios.get(`http://localhost:5000/api/public/user/${username}`);
      await dispatch({ type: GET_USER_PROFILE, payload: res.data });
      isloadig(false);
    } catch (error) {}
  };
  const getpost = async (id, skip) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/public/posts/${id}/${skip}`, );
      dispatch({ type: GET_USER_POST, payload: res.data });
      if (res.data.length < 10) {
        nopostload(true);
      }
    } catch (error) {
      console.error(error)
    }
  };
  //delete from state
  const deletecurrent = () => {
    dispatch({ type: DELETE_USER_PROFILE });
  };

  //loading
  const isloadig = (bol) => {
    dispatch({ type: IS_LOADING, payload: bol });
  };
  const search = async (data) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/public/search/${data}`);
      dispatch({ type: GET_SEARCH, payload: res.data });
    } catch (error) {
      console.error(error)
    }
  };
  const clearsearch = ()=> {
    dispatch({type: DELETE_SEARCH})
  }
  const deleteSearch = () => {
    dispatch({ type: DELETE_SEARCH });
  };
  const nomoreload = (bol) => {
    dispatch({ type: NO_MORE_LOAD, payload: bol });
  };
  const nopostload = (bol)=> {
    dispatch({type : NO_POST_LOAD, payload: bol})
  }
  const clearnomoreload = ()=> {
    dispatch({type : CLEAR_NO_MORE_LOAD})
  }
  return (
    <PublicContext.Provider
      value={{
        users: state.users,
        profile: state.profile,
        currentProfile: state.currentProfile,
        currentPosts: state.currentPosts,
        loading: state.isloading,
        Nomoreload: state.Nomoreload,
        searched : state.searched,
        PostNoMoreLoad : state.PostNoMoreLoad,
        getPublicdata,
        setcurrent,
        deletecurrent,
        search,
        deleteSearch,
        getpost,
        clearsearch,
        clearnomoreload
      }}
    >
      {props.children}
    </PublicContext.Provider>
  );
};
export default PublicState;
