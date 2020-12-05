import React, { Fragment, useContext, useEffect } from "react";
import { Waypoint } from "react-waypoint";
import { HashLoader } from "react-spinners";
//page
import ContentBox from "./ContentBox";

import { Link } from "react-router-dom";

//context api
import PublicProfile from "../context/Public/PublicContext";
const MainContentPart = () => {
  const publicProfile = useContext(PublicProfile);
  const { getPublicdata, users, Nomoreload, deletecurrent, searched, clearsearch, clearnomoreload } = publicProfile;

  useEffect(() => {
    console.log('enter')
    getPublicdata(0);
    deletecurrent();
    clearnomoreload()
    // eslint-disable-next-line
  }, []);
  if (users.length === 0) {
    return (
      <div className="loading">
        <HashLoader></HashLoader>
      </div>
    );
  } else {
    return (
      <Fragment>
        {searched ? 
        <Fragment>
          <div className="clear-search">
            <button onClick={clearsearch}>
              Clear
            </button>
          </div>
       { searched.map((item, i)=> (
          <Fragment key={i}>
                        <Link to={`/profile/${item.name}`}>
              <ContentBox
                img={item.coverImg}
                name={item.name}
                type={item.type}
                subjects={item.subjects}
              ></ContentBox>
            </Link>
          </Fragment>
        ))  }
        <div className='extra'>

        </div>
        </Fragment>
      :       <Fragment>
      {users.map((singleuser, i) => (
        <Fragment key={i}>
          <Link to={`/profile/${singleuser.name}`}>
          {Nomoreload ? null : i === users.length - 2 && (
            <Waypoint
            scrollableAncestor={window}
              onEnter={() => {
                console.log(Nomoreload)
                getPublicdata(users.length);
              }}
            ></Waypoint>
          )}
            <ContentBox
              img={singleuser.coverImg}
              name={singleuser.name}
              type={singleuser.type}
              subjects={singleuser.subjects}
            ></ContentBox>
          </Link>
          
        </Fragment>
      ))}
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
      </Fragment> }

      </Fragment>
    );
  }
};
export default MainContentPart;
