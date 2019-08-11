import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    title: "gitSearch",
    icon: "fab fa-github"
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <nav className="navbar bg-primary">
          <h2>
            <i className={this.props.icon} style={{ marginright: "10px;" }} />
            {this.props.title}
          </h2>
        </nav>
      </div>
    );
  }
}

export default Navbar;
