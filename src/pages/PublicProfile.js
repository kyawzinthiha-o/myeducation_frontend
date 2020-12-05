import React, { Fragment, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { HashLoader } from "react-spinners";
import { Waypoint } from "react-waypoint";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//pages
import Logo from "../layouts/nav-bars/Logo";

//context api
import PublicContext from "../context/Public/PublicContext";
const PublicProfile = () => {
  const publicprofile = useContext(PublicContext);
  const {
    setcurrent,
    getpost,
    currentProfile,
    currentPosts,
    loading,
    PostNoMoreLoad,
  } = publicprofile;
  const { username } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    if (!currentProfile) {
      setcurrent(username);
    }
    if (currentProfile) {
      getpost(currentProfile._id, 0);
    }
    // eslint-disable-next-line
  }, [currentProfile]);
  if (loading) {
    return (
      <div className="loading">
        <HashLoader />
      </div>
    );
  } 
  else if(!currentProfile){
    return(<div className="loading">
    <HashLoader />
  </div>)
  }
  else {
    return (
      <Fragment>
        <header>
          <Logo></Logo>
        </header>
        <main>
          <div className="main">
            <Router>
              <div className="profile">
                <div className="coverImg">
                  <img src={currentProfile.coverImg} alt="" />
                </div>
                <div className="name">
                  <h2>{currentProfile.name}</h2>
                </div>
                <div className="profile-nav">
                  <div>
                    <Link to={`${url}`}>
                      <h2>About</h2>
                    </Link>
                  </div>
                  <div>
                    <Link to={`${url}/photo`}>
                      <h2>Photo</h2>
                    </Link>
                  </div>
                </div>
                <Switch>
                  <Route path={`${url}/photo`}>
                    <div className="photo-page">
                      <Fragment>
                        {currentPosts.length !== 0 &&
                          currentPosts.map((post, i) => (
                          
                            <Fragment key={i}>
                               {!PostNoMoreLoad
                                ? i === currentPosts.length - 2 && (
                                    <Waypoint
                                    scrollableAncestor={window}
                                      onEnter={() => {
                                          getpost(currentProfile._id, i + 2);
                                      }}
                                    ></Waypoint>
                                  ) : null
                                }
                              <ImageBox
                                CoverSrc={currentProfile.coverImg}
                                Name={currentProfile.name}
                                Caption={post.caption}
                                ImgSrc={post.data}
                              />
                              

                            </Fragment>
                          ))}
                        {PostNoMoreLoad && (
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
                      </Fragment>
                    </div>
                  </Route>
                  <Route exact path={`${url}`}>
                    {currentProfile && 
                    <div className="about">
                      <div className="type">
                        <h2>Type</h2> {currentProfile.type}
                      </div>
                      <div className="subjects">
                        <h2>Subjects :</h2> {currentProfile.subjects.join(', ')}
                      </div>
                      <div className="phNum">
                        <h3>PhNumbers : </h3> {currentProfile.phNumbers.join(', ')}
                      </div>
                      <div className="aboutSc">
                        <h2>About</h2>
                        <p> {currentProfile.about} </p>
                      </div>
                      <div className="location">
                        <h2>Location</h2>
                        <p> {currentProfile.location} </p>
                      </div>
                      {currentProfile.website && (
                        <div className="website">
                          <h2>Website</h2>
                          <button>
                            <a
                              href={`${currentProfile.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Website
                            </a>
                          </button>
                        </div>
                      )}
                    </div>
                    }
                  </Route>
                </Switch>
              </div>
            </Router>
          </div>
        </main>
      </Fragment>
    );
  }
};
const ImageBox = (props) => {
  const { CoverSrc, Name, Caption, ImgSrc } = props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: true,
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
      <div className="caption">
        <p>{Caption}</p>
      </div> }
            

      <div className="photo">
        {ImgSrc && 
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
        }
      </div>
    </div>
  );
};
export default PublicProfile;
