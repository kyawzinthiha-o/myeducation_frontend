import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Authcontext from "../../context/Auth/AuthContext";
function LogOutRoute({ children, ...rest }) {
  const authcontext = useContext(Authcontext);
  const { isLoggedIn } = authcontext;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? children : <Redirect to="/login"></Redirect>
      }
    />
  );
}

export default LogOutRoute;
