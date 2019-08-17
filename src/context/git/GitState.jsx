import React, { useReducer } from "react";
import axios from "axios";
import GitContext from "./GitContext";
import GitReducer from "./GitReducer";

import {
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  CLEAR_USERS,
  SET_LOADING,
  SET_ALERT
} from "../types";

const GitState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GitReducer, initialState);

  return (
    <GitContext.Provider
      value={{
        user: state.user,
        users: state.users,
        repos: state.repos,
        loading: state.loading
      }}
    >
      {props.children}
    </GitContext.Provider>
  );
};

export default GitState;
