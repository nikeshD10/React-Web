import { CHANGE_SEARCH_FILED } from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FILED,
  payload: text,
});
