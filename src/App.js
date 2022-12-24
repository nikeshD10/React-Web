import React, { Component } from "react";
import CardList from "./CardList.js";
import { robots } from "./robot.js";
import SearchBox from "./SearchBox.js";
import "./App.css";
import "./SEGA.TTF";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    // fetch is method in windows object it helps to make request to the server

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1> Loading </h1>;
    } else {
      return (
        <>
          <div className="tc">
            <h1 className="header">ROBOFRIENDS </h1>
            <SearchBox searchChange={this.onSearchChange} />
            <CardList robots={filterRobots} />;
          </div>
        </>
      );
    }
  }
}
