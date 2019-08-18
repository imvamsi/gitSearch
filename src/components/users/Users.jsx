import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import GitContext from "../../context/git/GitContext";

const Users = () => {
  const gitContext = useContext(GitContext);
  if (gitContext.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {gitContext.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
