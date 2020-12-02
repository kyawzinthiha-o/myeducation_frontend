import React from "react";
import { Link } from "react-router-dom";

const userprofilenavbar = () => {
  return (
    <div className="userProfilenavbar">
      <div className="logo">My-Edu.com</div>
      <div className="contents">
        <div className="bth">
          <Link to="/"> Home Page</Link>
        </div>
        <div>
          <i class="fas fa-users-cog"></i>
        </div>
      </div>
    </div>
  );
};

export default userprofilenavbar;
