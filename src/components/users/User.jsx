import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

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
      company,
      followers,
      following,
      hireable,
      public_repos,
      public_gists
    } = this.props.user;
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <div>
        <Link to="/" className="btn btn-light">
          Back to search
        </Link>
        Hireable:
        {hireable ? (
          <i className="fa fa-check text-success" />
        ) : (
          <i className="fa fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              style={{ width: "120px" }}
            />
            <h3>{name}</h3>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h2>Intro</h2>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-primary my-2">
              View Github Account
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username : </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Blog : </strong> {blog}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company : </strong> {company}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <div className="badge badge-danger">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-dark">
              Public Repositories: {public_repos}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
