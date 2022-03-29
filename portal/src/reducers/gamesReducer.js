export const gamesReducer = (games = [], action) => {
  switch (action.type) {
    case "GAMES_FETCH":
      return action.payload;
    default:
      return games;
  }
};

export const selectedGameReducer = (selectedGame = null, action) => {
  if (action.type === "GAME_SELECTED") {
    return action.payload;
  }
  return selectedGame;
};
