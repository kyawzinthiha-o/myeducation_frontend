import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Authcontext from "../../context/Auth/AuthContext";
function PrivateRoute({ children, ...rest }) {
  const authcontext = useContext(Authcontext);
  const { isLoggedIn, user } = authcontext;
  const varified = user.isVarified;
  const hasContent = user.hasProfile;
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoggedIn ? (
          <Redirect to="/login"></Redirect>
        ) : !varified ? (
          <Redirect to="/varification"></Redirect>
        ) : !hasContent ? (
          <Redirect to="/contentform" />
        ) : (
          children
        )
      }
    />
  );
}

export default PrivateRoute;
