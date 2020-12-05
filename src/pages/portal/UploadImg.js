import React, { useEffect, useState, useRef, useContext } from "react";
import ReactDOM from "react-dom";
import { TextareaAutosize } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import AuthProfile from "../../context/AuthProfile/AuthProfileContext";
function UploadImg({ onClose }) {
  const authprofile = useContext(AuthProfile);
  const { create_post } = authprofile;
  /* Bakcground blur and other things  */
  useEffect(() => {
    document.getElementById("root").style.filter = "blur(5px)";
    document.getElementById("root").addEventListener("dblclick", onClose);
    document.body.style.overflow = "hidden";
    return () => (
      // eslint-disable-next-line
      (document.body.style.overflow = "unset"),
      (document.body.style.pointerEvents = "auto"),
      (document.getElementById("root").style.filter = "none")
    );
  });
  const [caption, setCaption] = useState();
  const [file, setFile] = useState();
  const hiddenFileInput = useRef(null);

  /* for form */
  const onSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.set("caption", caption);
    if (file) {
      file.forEach((image) => {
        formdata.append("image", image);
      });
    }
    create_post(formdata);
    onClose()
  };

  /* state for form */

  const onChange = (e) => {
    setCaption(e.target.value);
  };
  const onFileChange = (e) => {
    const array = [];
    Array.from(e.target.files).forEach((single) => {
      array.push(single);
    });
    setFile(array);
  };
  /* reutrn part */
  return ReactDOM.createPortal(
    <div className="portal">
      <header className="portal-header">
        <h3>Create Post</h3>
        <button className="portal-close" onClick={onClose}>
          <HighlightOffIcon />
        </button>
      </header>

      <form onSubmit={onSubmit}>
        <div className="portal-main">
          <div className="auth-form">
            <div className="portal-input">
              <TextareaAutosize
                name="captiopn"
                onChange={(e) => onChange(e)}
                type="url"
                placeholder="Add your caption here"
              ></TextareaAutosize>
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
                className="custom-upload-button"
                onClick={(event) => hiddenFileInput.current.click()}
              >
                Choose a file
              </button>
            </div>
            <div className="preview-img">
              {file &&
                file.map((img, i) => <Preview file={img} key={i}></Preview>)}
            </div>
          </div>
        </div>
        <button className="portal-submit" type="submit">
          Submit
        </button>
      </form>
    </div>,
    document.getElementById("portal")
  );
}

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
  } else {
    return <video src={preview} controls></video>;
  }
};
export default UploadImg;
