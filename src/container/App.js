import React, { useEffect, useState } from "react";
import CardList from "../components/CardList.js";
// import { robots } from "./robot.js";
import SearchBox from "../components/SearchBox.js";
import "./App.css";
import "../fonts/SEGA.TTF";
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry.js";

export default function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1> Loading </h1>
  ) : (
    <>
      <div className="tc">
        <h1 className="header">ROBOFRIENDS </h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filterRobots} />;
          </ErrorBoundry>
        </Scroll>
      </div>
    </>
  );
}
