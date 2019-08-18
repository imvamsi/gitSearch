import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
//import UserItem from "./components/users/UserItem";
import NotFound from "./components/pages/NotFound";
import User from "./components/users/User";
import Home from "./components/pages/Home";
import Alert from "./components/layout/Alert";
import GitState from "./context/git/GitState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  // state = {
  //   loading: false,
  //   users: [],
  //   repos: [],
  //   user: {},
  //   alert: null
  // };

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

  return (
    <GitState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />

            <div className="container">
              <Alert />
              <Switch>
                {/* render multiple components in a single route */}
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GitState>
  );
};

export default App;
