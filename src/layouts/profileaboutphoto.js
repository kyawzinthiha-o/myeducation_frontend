import React from "react";
import { Link, useLocation } from "react-router-dom";
const Profileaboutphoto = ({ location }) => {
  return (
    <div>
      <Link to={`${location}/about/`}>About</Link>
      <Link to="/userprofile/photos/">Photos</Link>
    </div>
  );
};

export default Profileaboutphoto;
