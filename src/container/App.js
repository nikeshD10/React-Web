import React, { useEffect, useState } from "react";
import CardList from "../components/CardList.js";
import { connect } from "react-redux";
import SearchBox from "../components/SearchBox.js";
import "./App.css";
import "../fonts/SEGA.TTF";
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry.js";
import { setSearchField } from "../action.js";

function App(props) {
  const [robots, setRobots] = useState([]);
  const { searchField, onSearchChange } = props;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  // const onSearchChange = (event) => {
  //   setSearchField(event.target.value);
  // };

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

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
