import React, { Fragment, useState } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
//import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import GitState from "./context/git/GitState";
import "./App.css";
import Axios from "axios";

const App = () => {
  // state = {
  //   loading: false,
  //   users: [],
  //   repos: [],
  //   user: {},
  //   alert: null
  // };

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const [alert, setAlert] = useState(null);

  // async componentDidMount() {
  //   console.log(process.env);
  //   this.setState({ loading: true });
  //   const response = await Axios.get(
  //     `https://api.github.com/users?client_id=${
  //       process.env.REACT_APP_GITHUB_CLENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLENT_SECRET}`
  //   );
  //   console.log(response);
  //   this.setState({ users: response.data, loading: false });
  // }

  const showAlert = (msg, type) => {
    //this.setState({ alert: { msg: msg, type: type } });
    setAlert({ msg: msg, type: type });
    setTimeout(() => setAlert({ alert: null }), 1000);
  };

  //clear users
  const clearUsers = users => {
    setUsers([]);
  };

  //search the users

  //get details of a single github user

  const getUser = async username => {
    setLoading(true);
    const res = await Axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLENT_SECRET}`
    );
    //this.setState({ user: res.data, loading: false });
    setUser(res.data);
    setLoading(false);
  };

  //get the repos of that user
  const getUserRepos = async username => {
    // this.setState({ loading: true });
    setLoading(true);
    const res = await Axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLENT_SECRET}`
    );
    //this.setState({ repos: res.data, loading: false });
    setRepos(res.data);
    setLoading(false);
    console.log(repos);
  };

  return (
    <GitState>
      <Router>
        <div className="App">
          <Navbar />

          <div className="container">
            <Alert alert={alert} />
            <Switch>
              {/* render multiple components in a single route */}
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={showAlert}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={props => (
                  <User
                    {...props}
                    user={user}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GitState>
  );
};

export default App;
