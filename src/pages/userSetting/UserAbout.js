import React, { Fragment, useContext } from "react";

//context api
import AuthContext from "../../context/Auth/AuthContext";
import AuthProfile from "../../context/AuthProfile/AuthProfileContext";
const PersonalInformation = () => {
  const auth = useContext(AuthContext);
  const authprofile = useContext(AuthProfile);
  const { profile } = authprofile;
  const { user } = auth;
  return (
    <Fragment>
      <div className="information-container">
        <div className="information-items">
          <h3>Name</h3>
          <p>{profile.name}</p>
        </div>

        <div className="information-items">
          <h3>Date</h3>
          <p>{user.date} </p>
        </div>
        <div className="information-items">
          <h3>Profile Link</h3>
          <p>{`https://myeducation.com/profile/${profile.name}`} </p>
        </div>
        {user.isVarified && (
          <div className="information-items">
            <h3>Account Is Varified</h3>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default PersonalInformation;
