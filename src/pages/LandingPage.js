import React, { Fragment } from "react";

//pages
import Main from "../layouts/nav-bars/Main";
import ContentContainer from "../layouts/MainContentPart";
const LandingPage = () => {
  return (
    <Fragment>
      <header>
        <Main></Main>
      </header>
      <main>
        <div className="main">
          <ContentContainer></ContentContainer>
        </div>
      </main>
    </Fragment>
  );
};

export default LandingPage;
