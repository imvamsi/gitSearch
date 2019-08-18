import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = props => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <h2>
          <i className={props.icon} style={{ marginright: "10px" }} />

          <Link to="/">{props.title}</Link>
        </h2>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
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
