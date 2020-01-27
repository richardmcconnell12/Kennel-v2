import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";

class Kennel extends Component {
  state = {
    user: false
  };

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  setUser = authObj => {
    sessionStorage.setItem("credentials", JSON.stringify(authObj));
    this.setState({ user: this.isAuthenticated() });
  };

  componentDidMount() {
    this.setState({
      user: this.isAuthenticated()
    });
  }

  render() {
    return (
      <>
        <NavBar user={this.state.user} />
        <ApplicationViews user={this.state.user} setUser={this.setUser} />
      </>
    );
  }
}

export default Kennel;
