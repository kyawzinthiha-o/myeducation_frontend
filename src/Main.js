import React, { Fragment, useEffect, useContext } from "react";
//React router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import LandingPage from "./pages/LandingPage";
import PublicProfile from "./pages/PublicProfile";
import AuthedProfile from "./pages/AuthProfile";
import ContentForm from "./pages/ContentForm";
import MainSetting from "./pages/userSetting/MainSetting";
import UpdateProfile from "./pages/userSetting/UpdataProfile";
import Varification from "./pages/auth/Varification";
import ChangeMail from "./pages/auth/ChangeMail";

//log in and register
import Login from "./pages/auth/LogIn";
import Register from "./pages/auth/Register";

//import Pretoected Route
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import IsLoggedIn from "./pages/auth/IsLoggedIn";
//context api
import AuthContext from "./context/Auth/AuthContext";
import AuthProfile from "./context/AuthProfile/AuthProfileContext";
const MainApp = () => {
  const authcontext = useContext(AuthContext);
  const authprofile = useContext(AuthProfile);
  const { user_profile } = authprofile;
  const { loaduser, user, csrfToken } = authcontext;

  useEffect(() => {
    csrfToken()
    if (!user && localStorage.token) {
      loaduser();
    }
    if (user.hasProfile) {
      user_profile();
    }
    // eslint-disable-next-line
  }, [user]);
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route path="/profile/:username">
            <PublicProfile></PublicProfile>
          </Route>
          <ProtectedRoute path="/user">
            <AuthedProfile></AuthedProfile>
          </ProtectedRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <IsLoggedIn path="/contentform">
            <ContentForm></ContentForm>
          </IsLoggedIn>
          <ProtectedRoute path="/setting">
            <MainSetting></MainSetting>
          </ProtectedRoute>
          <ProtectedRoute path="/updataprofile">
            <UpdateProfile></UpdateProfile>
          </ProtectedRoute>
          <IsLoggedIn path="/varification">
            <Varification></Varification>
          </IsLoggedIn>
          <IsLoggedIn path="/changemail">
            <ChangeMail></ChangeMail>
          </IsLoggedIn>
        </Switch>
      </Fragment>
    </Router>
  );
};

export default MainApp;
