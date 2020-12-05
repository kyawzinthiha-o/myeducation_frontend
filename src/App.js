import React from "react";
import MainApp from "./Main";
//context state

import AuthState from "./context/Auth/AuthState";
import AuthProfile from "./context/AuthProfile/AuthProfileState";
import PublicState from "./context/Public/PublicState";
function App() {
  return (
    <AuthState>
      <AuthProfile>
        <PublicState>
          <div className="App">
            <MainApp></MainApp>
          </div>
        </PublicState>
      </AuthProfile>
    </AuthState>
  );
}

export default App;
