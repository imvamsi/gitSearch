import React, { useContext } from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";
import GitContext from "../../context/git/GitContext";

const Repos = ({ repos }) => {
  // const gitContext = useContext(GitContext);
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

export default Repos;
