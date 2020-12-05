import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Fragment>
      <div className="nav single">
        <div className="logo">
          <Link to="">
            <h2>My Education</h2>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Logo;
