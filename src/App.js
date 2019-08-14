import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";

//import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import "./App.css";
import Axios from "axios";

class App extends Component {
  state = {
    loading: false,
    users: []
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
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
