import React, { Component } from "react";
import PropTypes from "prop-types";

const UserItem = props => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <img src={avatar_url} className="round-img" style={{ width: "50px" }} />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-4">
          More info..
        </a>
      </div>
    </div>
  );
};

UserItem.protoType = {
  user: PropTypes.object.isRequired
};

export default UserItem;
