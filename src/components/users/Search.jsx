import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GitContext from "../../context/git/GitContext";
const Search = ({ setAlert, searchUsers, clearUsers, showClear }) => {
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
      {showClear && (
        <button className="btn btn-light btn-block " onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
