import React, { useEffect } from "react";

import { HashLoader } from "react-spinners";

const Upload = () => {
  useEffect(() => {
    document.body.style.filter = "blur(1px)";
    document.body.style.pointerEvents = "none";
    document.body.style.overflow = "hidden";
    return () => (
      // eslint-disable-next-line
      (document.body.style.filter = "none"),
      (document.body.style.pointerEvents = "auto"),
      (document.body.style.overflow = "none")
    );
  }, []);
  return (
    <>
      <div className="uploading">
        <HashLoader></HashLoader>
      </div>
    </>
  );
};

export default Upload;
