import React, { useReducer } from "react";
import Axios from "axios";
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

  //Search the users
  const searchUsers = async text => {
    setLoading();
    console.log(text);
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLENT_SECRET}`
    );
    console.log(res);
    // this.setState({ users: res.data.items, loading: false });

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GitContext.Provider
      value={{
        user: state.user,
        users: state.users,
        repos: state.repos,
        loading: state.loading,
        searchUsers
      }}
    >
      {props.children}
    </GitContext.Provider>
  );
};

export default GitState;
