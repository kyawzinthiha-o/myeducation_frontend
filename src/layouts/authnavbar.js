import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const authnavbar = () => {
  return (
    <Fragment>
      <h2 className="logo">My-Edu.com</h2>
      <div>
        <Link to="/">Home Page</Link>
      </div>
    </Fragment>
  );
};

export default authnavbar;
