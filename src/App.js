import React, { Fragment, Component } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
//import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import "./App.css";
import Axios from "axios";

class App extends Component {
  state = {
    loading: false,
    users: [],
    repos: [],
    user: {},
    alert: null
  };

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

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 1000);
  };

  //clear users
  clearUsers = users => {
    this.setState({ users: [] });
  };

  //search the users

  searchUsers = async text => {
    this.setState({ loading: true });
    console.log(text);
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLENT_SECRET}`
    );
    console.log(res);
    this.setState({ users: res.data.items, loading: false });
  };

  //get details of a single github user

  getUser = async username => {
    this.setState({ loading: true });
    const res = await Axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  //get the repos of that user
  getUserRepos = async username => {
    this.setState({ loading: true });
    const res = await Axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLENT_SECRET}`
    );
    this.setState({ repos: res.data, loading: false });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              {/* render multiple components in a single route */}
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users
                      users={this.state.users}
                      loading={this.state.loading}
                    />
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
                    user={this.state.user}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    repos={this.state.repos}
                    loading={this.state.loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
