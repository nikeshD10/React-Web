import { CHANGE_SEARCH_FILED } from "../src/constants";

const initialState = {
  searchField: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FILED:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
