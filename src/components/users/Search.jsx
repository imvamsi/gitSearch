import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GitContext from "../../context/git/GitContext";
const Search = ({ setAlert }) => {
  const [text, setText] = useState("");
  const gitContext = useContext(GitContext);
  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("please enter something", "light");
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

Search.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default Search;
