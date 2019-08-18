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
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GitState>
  );
};

export default App;
