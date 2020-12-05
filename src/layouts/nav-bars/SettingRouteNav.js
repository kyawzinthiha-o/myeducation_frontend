import React, { Fragment } from "react";
import InfoIcon from "@material-ui/icons/Info";
import LockIcon from "@material-ui/icons/Lock";
import { Link, useRouteMatch } from "react-router-dom";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
const SettingRouteNav = () => {
  const { url } = useRouteMatch();
  return (
    <Fragment>
      <div className="setting-nav">
        <Link to={`${url}/changecoverimg`}>
          <div className="setting-nav-item">
            <PhotoSizeSelectActualIcon />
            <h3>Update Cover Image</h3>
          </div>
        </Link>
        <Link to={`${url}/personalinformation`}>
          <div className="setting-nav-item">
            <InfoIcon></InfoIcon>
            <h3>Personal Informations</h3>
          </div>
        </Link>
        <Link to={`${url}/changepassword`}>
          <div className="setting-nav-item">
            <LockIcon />
            <h3>Change Password</h3>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default SettingRouteNav;
