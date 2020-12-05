import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DynamicFeedOutlinedIcon from "@material-ui/icons/DynamicFeedOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

import Auth from "../../context/Auth/AuthContext";
import AuthProfile from "../../context/AuthProfile/AuthProfileContext";
const Authed = ({ UploadPhoto }) => {
  const auth = useContext(Auth);
  const authprofile = useContext(AuthProfile);
  const { removeprofile } = authprofile;
  const { logout } = auth;
  const logoutF = () => {
    logout();
    removeprofile();
  };
  return (
    <div className="nav multi">
      <div className="logo">
        <Link to="">
          <h2>My Education</h2>
        </Link>
      </div>
      <NavBar>
        <NavItems icon={<CloudUploadIcon />} onClick={UploadPhoto} />
        <NavItems icon={<MoreVertOutlinedIcon />}>
          <Dropdown>
            <DropDownItems
              link="/updataprofile"
              icon={<DynamicFeedOutlinedIcon />}
            >
              Update Profile
            </DropDownItems>

            <DropDownItems link="/setting" icon={<SettingsIcon />}>
              Setting
            </DropDownItems>
            <DropDownItems
              link="/login"
              icon={<ExitToAppOutlinedIcon />}
              onClick={logoutF}
            >
              Log Out
            </DropDownItems>
          </Dropdown>
        </NavItems>
      </NavBar>
    </div>
  );
};

/* Reueseable components */

/* Main Nav Bar container start */
const NavBar = ({ children }) => {
  return (
    <nav className="tools">
      <ul className="tools-list">{children}</ul>
    </nav>
  );
};
/* Main Nav Bar container end */

/* Nav Items Inside Nav Bar start */
const NavItems = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <div
        className="icon-button"
        onClick={
          props.onClick
            ? props.onClick
            : () => {
                setOpen(!open);
              }
        }
      >
        {props.icon}
      </div>
      {open && props.children}
    </li>
  );
};
/* Nav Items Inside Nav Bar end */

/* Drop Dowm main container start */
const Dropdown = (props) => {
  return <div className="drop-down-menu">{props.children}</div>;
};
/* Drop Dowm main container end */

/* Drop Dowm Items start */
const DropDownItems = (props) => {
  return (
    <div>
      <Link to={props.link} onClick={props.onClick ? props.onClick : null}>
        <span className="menu-icon-left"> {props.icon} </span>
        {props.children}
      </Link>
    </div>
  );
};
/* Drop Dowm Items end */
export default Authed;
