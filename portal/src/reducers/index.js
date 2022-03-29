import { combineReducers } from "redux";

import { coachReducer } from "./coachReducer";
import { gamesReducer } from "./gamesReducer";

const selectedKeywordsReducer = (selectedKeywords = null, action) => {
  if (action.type === "KEYWORDS_SELECTED") {
    return action.payload;
  }
  return selectedKeywords;
};

export default combineReducers({
  coach: coachReducer,
  games: gamesReducer,
  selectedKeywords: selectedKeywordsReducer,
});
