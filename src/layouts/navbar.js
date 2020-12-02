import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [input, setInput] = useState();

  const onChange = (e) => setInput(e.target.value);
  return (
    <div className="mainpagenavbar">
      <h2 className="logo">My-Edu.com</h2>
      <div className="search-bar">
        <input
          className="search"
          type="text"
          name="input"
          value={input}
          placeholder="Type to search"
          onChange={onChange}
        />
      </div>
      <Link to="/register">
        <i class="fas fa-user fa-2x user"></i>
      </Link>
    </div>
  );
};

export default Navbar;
