import React, { useState, useContext } from "react";

import GitContext from "../../context/git/GitContext";
import AlertContext from "../../context/alert/AlertContext";
const Search = () => {
  const [text, setText] = useState("");
  const gitContext = useContext(GitContext);
  const alertContext = useContext(AlertContext);
  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("please enter something", "light");
    } else {
      gitContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          id="mainInput"
          type="text"
          name="text"
          value={text}
          placeholder="search for users"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {gitContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block "
          onClick={gitContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
