import React, { useState } from "react";

const Searchbar = () => {
  const { input, setInput } = useState();

  const onChange = (e) => setInput(e.target.value);
  return (
    <div className="search-bar">
      <input
        type="text"
        name="input"
        value={input}
        placeholder="Type to search"
        onChange={onChange}
      />
    </div>
  );
};

export default Searchbar;
