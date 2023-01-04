import {
  CHANGE_SEARCH_FILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FILED,
  payload: text,
});
