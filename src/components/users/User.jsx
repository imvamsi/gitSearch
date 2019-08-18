import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Repos from "../repos/Repos";
import GitContext from "../../context/git/GitContext";

const User = ({ match }) => {
  //Passing the method from app.js as props
  // componentDidMount() {
  //   this.props.getUser(this.props.match.params.login);
  //   this.props.getUserRepos(this.props.match.params.login);
  // }
  const gitContext = useContext(GitContext);
  useEffect(() => {
    gitContext.getUser(match.params.login);
    gitContext.getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  //the user props contain all these items
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
  } = gitContext.user;
  if (gitContext.loading) {
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
      {/* Repo section with all the repositories to max limit 5 */}
      <Repos repos={gitContext.repos} />
    </div>
  );
};

export default User;
