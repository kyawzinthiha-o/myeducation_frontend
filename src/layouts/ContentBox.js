import React, { Fragment } from "react";

const ContentBox = ({ img, name, type, subjects }) => {
  return (
    <Fragment>
      <div className="content-container">
        <div className="img">
          <img src={img} alt="l" />
        </div>
        <div className="text-area">
          <h4>Name :</h4> {name}
          <h4>Type :</h4> {type}
          <h4>Subjects :</h4> {subjects.toString(" ")}
        </div>
      </div>
    </Fragment>
  );
};

export default ContentBox;
