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
      robots: robots,
      searchField: "",
    };
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
    return (
      <>
        <div className="tc">
          <p className="header">ROBOFRIENDS </p>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filterRobots} />;
        </div>
      </>
    );
  }
}
