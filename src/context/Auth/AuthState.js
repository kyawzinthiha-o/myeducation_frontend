import React, { useReducer } from "react";
import axois from "axios";
import AuthContext from "./authContext";
import AuthReducer from "./authreducre";

import {
  REGISTER_USER,
  LOAIN_USER,
  LOGOUT_USER,
  LOAD_USER,
  DELETE_USER,
} from "../type";

const AuthState = (props) => {
  const initialsState = {
    profile: {
      name: "Gusto",
      type: "university",
      subject: "IT, Business",
    },
    loading: true,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialsState);

  //register user

  //log-in user

  //load user

  //log-out user

  //delete user

  //set-loader

  return (
    <AuthContext.Provider
      value={{
        profile: state.profile,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
