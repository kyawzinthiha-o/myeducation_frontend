import React, { Fragment, useContext, useEffect, useState } from "react";
import Nav from "../layouts/nav-bars/Authed";
import UploadImg from "./portal/UploadImg";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

import { HashLoader, BarLoader
} from "react-spinners";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//context api
import AuthProfileContext from "../context/AuthProfile/AuthProfileContext";
import { Waypoint } from "react-waypoint";
const AuthProfile = () => {
  let { url } = useRouteMatch();

  const authprofile = useContext(AuthProfileContext);
  const { profile, posts, load_post, loading, hasProfile, uploading, Nomoreload, error, posterror } = authprofile;
  const [open, setOpen] = useState(false);
  const UploadPhoto = () => {
    setOpen(!open);
  };
  useEffect(() => {
    load_post(0);
    // eslint-disable-next-line
  }, []);
  if (loading) {
    return (
      <div className="loading">
        <HashLoader></HashLoader>
      </div>
    );
  }
  if (!hasProfile) {
    return (
      <div className="loading">
        <HashLoader></HashLoader>
      </div>
    );
  }
  if(error){
    return (
      <div className='error-msg'>
        {error}
      </div>
    )
  }
  return (
    <Fragment>
      <header>
        <Nav UploadPhoto={UploadPhoto}></Nav>
      </header>
      <Router>
        <main>
          <div className="main">
            <div className="profile">
              <div className="coverImg">
                <img src={profile.coverImg} alt="" />
              </div>
              <div className="main-profile">
                <div className="name">
                  <h2>{profile.name}</h2>
                </div>
                {open ? (
                  <UploadImg
                    onClose={() => {
                      setOpen(false);
                    }}
                  ></UploadImg>
                ) : null}

                <div className="profile-nav">
                  <div>
                    <Link to={`${url}`}>
                      <h2>About</h2>
                    </Link>
                  </div>
                  <div>
                    <Link to={`${url}/Photos`}>
                      <h2>Photos</h2>
                    </Link>
                  </div>
                </div>
                <Switch>
                  <Route exact path={`${url}`}>
                    <div className="about">
                      <div className="type">
                        <h3>Type</h3> {profile.type}
                      </div>
                      <div className="subjects">
                        <h3>Subjects :</h3> {profile.subjects.toString(" ")}
                      </div>
                      <div className="phNum">
                        <h3>PhNumbers : </h3> {profile.phNumbers.join(",  ")}
                      </div>
                      <div className="aboutSc">
                        <h3>About</h3>
                        <p>{profile.about}</p>
                      </div>
                      <div className="location">
                        <h3>Location</h3>
                        <p>{profile.location}</p>
                      </div>
                      <div className="website">
                        <h3>Website</h3>
                        <button>
                          <a
                            href="https://www.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Website
                          </a>
                        </button>
                      </div>
                    </div>
                  </Route>
                  <Route path={`${url}/Photos`}>
                    <div className="photo-page">
                      { uploading &&   <div className='img-uploading'>
                        <p>Uploading...</p>
                        <BarLoader css='upload-sign' color='#A5EEBD' width='100%'></BarLoader>
                      </div> }
                      {posterror && <div className='error-msg'>
                        {posterror}</div>}
                      {posts.length > 0 
                        ? posts.map((post, i) => (
                            <Fragment key={i}>
                               {!Nomoreload && i === posts.length - 2 && (
                                <Waypoint
                                scrollableAncestor={window}
                                  onEnter={() =>  load_post(i+2)}
                                  
                                >{console.log('photo load')}</Waypoint>
                                
                              )}
                              <ImageBox
                                CoverSrc={profile.coverImg}
                                Name={profile.name}
                                Caption={post.caption}
                                ImgSrc={post.data}
                              />

                            </Fragment>
                          ))
                        : null}
                         {Nomoreload && (
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            No More To Load
                          </div>
                        )}
                    </div>
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </main>
      </Router>
    </Fragment>
  );
};
const ImageBox = (props) => {
  const { CoverSrc, Name, Caption, ImgSrc } = props;
  const [readmore , setReadmore] = useState(true);
  const linecount = ImgSrc.length === 0 ? 30 : 10;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="photo-box">
      <div className="header">
        <img src={CoverSrc} alt="" />
        {Name}
      </div>
      {Caption !== 'undefined' &&
      Caption.length > linecount  ? 
      <div className="caption">
      <p>{readmore ? Caption.slice(0, linecount) : Caption}</p> <br/>
  <b className='read-more' onClick={()=>setReadmore(!readmore)}>{readmore ? <p>READMORE...</p> : <p>READLESS...</p>}</b>
    </div> 
      :
      <div className="caption">
        <p>{Caption}</p>
      </div>  }

      <div className="photo">
        <Slider {...settings}>
          {ImgSrc.map((photo, i) => ( <Fragment key={i}>
            {photo.match(/\.(JPG|jpg|PNG|png|gif|GIF|jpeg)$/) ? 
            (
              <img src={photo} alt=''></img>
            )  :
            (
              <video src={photo} alt='' controls></video>
            )
          }
          </Fragment> ) )}
        </Slider>
      </div>
    </div>
  );
};
export default AuthProfile;
