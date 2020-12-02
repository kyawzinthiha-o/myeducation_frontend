import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Contentbox from "./contentsbox";
import AuthContext from "../context/Auth/authContext";

const Maincontentpart = () => {
  const Context = useContext(AuthContext);
  const { profile } = Context;
  const { name, type, subject } = profile;
  return (
    <div>
      <Link to="/guestprofile">
        <Contentbox name={name} subject={subject} type={type}></Contentbox>
      </Link>
    </div>
  );
};

export default Maincontentpart;
