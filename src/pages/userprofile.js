import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useRouteMatch,
  Link,
} from "react-router-dom";
import Usernavbar from "../layouts/userprofilenavbar";
import ProfileHeader from "../layouts/profileheader";
import ProfileAbout from "../layouts/profileabout";
import ProfileImage from "../layouts/profileimage";
import Profilesmallnav from "../layouts/profileaboutphoto";
const Userprofile = () => {
  let { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <Fragment>
      <header>
        <Usernavbar></Usernavbar>
      </header>
      <Router>
        <main>
          <ProfileHeader></ProfileHeader>

          {/* <Profilesmallnav ></Profilesmallnav> */}
          <div>
            <Link to={`${url}/about/`}>About</Link>
            <Link to="/userprofile/photos/">Photos</Link>
          </div>

          <Route
            path /*  */={`${path}/photos/`} /* "/userprofile/photos/" */
            component={ProfileImage}
          ></Route>
          <Route path="/userprofile/about/" component={ProfileAbout}></Route>
        </main>
      </Router>
    </Fragment>
  );
};

export default Userprofile;
