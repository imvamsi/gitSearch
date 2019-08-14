import React, { Component } from "react";
import PropTypes from "prop-types";

const Navbar = props => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <h2>
          <i className={props.icon} style={{ marginright: "10px" }} />
          {props.title}
        </h2>
      </nav>
    </div>
  );
};
Navbar.defaultProps = {
  title: "gitSearch",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
