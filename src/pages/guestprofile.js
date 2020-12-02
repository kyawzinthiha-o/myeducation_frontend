import React, { Fragment } from "react";
import Usernavbar from "../layouts/userprofilenavbar";
import ProfileHeader from "../layouts/profileheader";
import ProfileAbout from "../layouts/profileabout";
import ProfileImage from "../layouts/profileimage";
const guestprofile = () => {
  return (
    <Fragment>
      <header>
        <Usernavbar></Usernavbar>
      </header>

      <main>
        <ProfileHeader></ProfileHeader>
        <ProfileAbout></ProfileAbout>
        <ProfileImage></ProfileImage>
      </main>
    </Fragment>
  );
};

export default guestprofile;
