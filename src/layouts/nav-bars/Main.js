import React ,{useState, useContext} from "react";

import { Link } from "react-router-dom";

//context api
import PublicProfile from '../../context/Public/PublicContext'
const Main = () => {
  const profile = useContext(PublicProfile)
  const {search} = profile
  const [searchWords, setSearch] = useState('')
  const onChange = e =>{
    setSearch(e.target.value)
  }
  const onSubmit = e=> {
    console.log('search')
    e.preventDefault();
    search(searchWords)
  }
  return (
    <div className="header">
      <div className="nav multi">
        <div className="logo">
          <Link to="/">
            <h2>My Education</h2>
          </Link>
        </div>
        <div className="tools">
          <div className="search-bar">
            <form onSubmit={onSubmit}>
            <input className="search" type="search" placeholder="Search" onChange={onChange} />
            </form>
          </div>
          <ul className="nav-bar-tools">
            <Link to={`/user`}>
              <i className="far fa-user fa-lg"></i>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
