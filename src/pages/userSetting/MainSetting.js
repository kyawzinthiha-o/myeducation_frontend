import React, { Fragment } from "react";
import Logo from "../../layouts/nav-bars/Logo";
import PersonaInformation from "./UserAbout";
import Changepassword from "./ChangePasword";
import SettingRouteNav from "../../layouts/nav-bars/SettingRouteNav";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import UpdateCover from "./UpdateCoverImg";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
const MainSetting = () => {
  const history = useHistory();
  const { url } = useRouteMatch();
  return (
    <Fragment>
      <header>
        <Logo></Logo>
      </header>
      <main>
        <div className="main">
          <button className="history-back" onClick={() => history.goBack()}>
            <ArrowBackIosIcon />
            Back
          </button>
          <Router>
            <Switch>
              <Route exact path={`${url}`}>
                <SettingRouteNav />
              </Route>
              <Route path={`${url}/personalinformation`}>
                <PersonaInformation />
              </Route>
              <Route path={`${url}/changepassword`}>
                <Changepassword />
              </Route>
              <Route path={`${url}/changecoverimg`}>
                <UpdateCover></UpdateCover>
              </Route>
            </Switch>
          </Router>
        </div>
      </main>
    </Fragment>
  );
};

export default MainSetting;
