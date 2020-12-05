import React, { Fragment, useContext, useState, useRef } from "react";

import AuthProfile from "../../context/AuthProfile/AuthProfileContext";
const UpdateCoverImg = () => {
  const authprofile = useContext(AuthProfile);
  const { uploadimg, msg, error } = authprofile;
  const [file, setfile] = useState();

  const hiddenFileInput = useRef(null);
  const onFileChange = (e) => {
    setfile(e.target.files[0]);
  };
  const onsubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", file);
    uploadimg(formdata);
  };
  return (
    <Fragment>
      <form onSubmit={onsubmit}>
        {msg === "Updated" && <div className="msg-area-update ">{msg}</div>}
        {error && <div className='error-msg'>{error}</div>}
        <div className="image-preview-update">
          {file && <Preview file={file}></Preview>}
        </div>
        <div className="add-img">
          <input
            type="file"
            name="file"
            onChange={onFileChange}
            className="file-upload"
            ref={hiddenFileInput}
            accept="image/*,video/*"
            multiple
          />
          <button
            type="button"
            className="custom-upload-button-cover"
            onClick={(event) => hiddenFileInput.current.click()}
          >
            Choose a file
          </button>
        </div>
        <button className="portal-submit" type="submit">
          Submit
        </button>
      </form>
    </Fragment>
  );
};
const Preview = ({ file }) => {
  const [preview, setPreview] = useState();
  const [loading, setLoading] = useState(true);

  const reader = new FileReader();
  reader.onload = () => {
    const result = reader.result;
    setPreview(result);
    setLoading(false);
  };
  reader.readAsDataURL(file);

  if (loading) {
    return <p>loading...</p>;
  }
  if (file.type.match("image.*")) {
    return <img src={preview} alt=""></img>;
  }
};
export default UpdateCoverImg;
