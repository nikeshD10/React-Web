import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { ThunkMiddleware } from "redux-thunk";
import { searchRobots, requestRobots } from "./reducers";
import App from "./container/App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";

const rootReducer = combineReducers({ searchRobots, requestRobots });

// Creating a middleware
const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(ThunkMiddleware, logger)
);

// Now to apply the middleware into the our redux app we need to do followings
// by passing the applyMiddleware(logger) inside the store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
