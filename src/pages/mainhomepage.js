import React, { Fragment } from "react";
import Navbar from "../layouts/navbar";

import Content from "../layouts/maincontentpart";

const mainhomepage = () => {
  return (
    <Fragment>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="main-content-part">
        <Content></Content>
      </main>
    </Fragment>
  );
};

export default mainhomepage;
