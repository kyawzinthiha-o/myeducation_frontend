import React from "react";
import Mainhomepage from "./pages/mainhomepage";
import Userprofile from "./pages/userprofile";
/* import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Guestprofile from "./pages/guestprofile";*/
import Form1 from "./pages/registerfillform/form1";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* import AuthState from "./context/Auth/AuthState"; */
function App() {
  return (
    /* <AuthState> */
    <Router>
      <div className="App">
        <Form1></Form1>

        <Route path="/userprofile" component={Userprofile}></Route>
        {/*  <Route path="/guestprofile" component={Guestprofile}></Route>
        </Switch> */}
        {/* <footer>haha</footer> */}
      </div>
    </Router>
    /* </AuthState> */
  );
}

export default App;
