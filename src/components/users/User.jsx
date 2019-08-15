import React, { Component } from "react";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      hireable,
      public_repos,
      public_gists
    } = this.props.user;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default User;
