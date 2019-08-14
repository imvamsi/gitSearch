import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";
import "./App.css";
import Axios from "axios";

class App extends Component {
  state = {
    loading: false,
    users: []
  };

  async componentDidMount() {
    console.log(process.env);
    this.setState({ loading: true });
    const response = await Axios.get(
      `https://api.github.com/users?client_id=${
        process.env.REACT_APP_GITHUB_CLENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLENT_SECRET}`
    );
    console.log(response);
    this.setState({ users: response.data, loading: false });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
