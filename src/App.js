import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar bg-primary">
          <Navbar></Navbar>
        </nav>
        <div className="container">
          <Users></Users>
        </div>
      </div>
    );
  }
}

export default App;
