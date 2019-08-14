import React, { Component } from "react";
import PropTypes from "prop-types";
export class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            id="mainInput"
            type="text"
            name="text"
            value={this.state.text}
            placeholder="search for users"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {this.props.showClear && (
          <button
            className="btn btn-light btn-block "
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
