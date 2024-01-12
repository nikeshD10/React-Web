import React, { useEffect } from "react";
import CardList from "../components/CardList.js";
import { connect } from "react-redux";
import SearchBox from "../components/SearchBox.js";
import "./App.css";
import "../fonts/SEGA.TTF";
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry.js";
import { setSearchField, requestRobots } from "../action.js";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

function App(props) {
  const { searchField, onSearchChange, robots, onRequestRobots, isPending } =
    props;

  useEffect(() => onRequestRobots, [onRequestRobots]);

  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="header">ROBOFRIENDS </h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        {isPending ? (
          <h1> Loading </h1>
        ) : (
          <ErrorBoundry>
            <CardList robots={filterRobots} />;
          </ErrorBoundry>
        )}
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
