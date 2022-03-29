import api from "../utilities/api";

export const selectKeywords = (keywords) => {
  return {
    type: "KEYWORDS_SELECTED",
    payload: keywords,
  };
};

export const fetchCoach = () => {
  return async (dispatch) => {
    const response = await api.get(
      `/coach.json?timestamp=${new Date().getTime()}`
    );

    dispatch({
      type: "COACH_FETCH",
      payload: response,
    });
  };
};

export const fetchGames = () => {
  return async (dispatch) => {
    const response = await api.get(
      `/games.json?timestamp=${new Date().getTime()}`
    );

    dispatch({
      type: "GAMES_FETCH",
      payload: response,
    });
  };
};
