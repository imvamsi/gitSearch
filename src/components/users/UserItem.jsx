import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = props => {
  const { login, avatar_url, html_url } = props.user;
  //console.log(props.user);
  return (
    <div className="card text-center">
      <img src={avatar_url} className="round-img" style={{ width: "50px" }} />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-4">
          More info..
        </Link>
      </div>
    </div>
  );
};

UserItem.protoType = {
  user: PropTypes.object.isRequired
};

export default UserItem;
