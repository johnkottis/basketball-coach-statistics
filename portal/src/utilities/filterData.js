import {names} from "./const";

export const uniqueEntries = (value, index, self) => {
  return self.indexOf(value) === index;
};

export const gamesbyKeywords = (games, keywords) => {
  let output = games;
  if (keywords != undefined) {
    if (keywords.competition) {
      output = output.filter(
        (game) => game.competition === keywords.competition
      );
    }
    if (keywords.season) {
      if (keywords.season !== "") {
        output = output.filter((game) => game.season === keywords.season);
      }
    }
    if (keywords.opponent) {
      output = output.filter((game) =>
        game.fixture.includes(keywords.opponent)
      );
    }
    if (keywords.gameDuration) {
      if (keywords.gameDuration === "regular") {
        output = output.filter((game) => game.result.length === 2);
      } else {
        output = output.filter((game) => game.result.length === 4);
      }
    }
    if (keywords.bearsHomeAway) {
      if (keywords.paoHomeAway === "home") {
        output = output.filter((game) => names.includes(game.fixture[0]));
      }
      if (keywords.bearsHomeAway === "away") {
        output = output.filter((game) => names.includes(game.fixture[1]));
      }
    }
    if (keywords.homeScore) {
      output = output.filter(
        (game) => game.result[game.result.length - 2] == keywords.homeScore
      );
    }
    if (keywords.awayScore) {
      output = output.filter(
        (game) => game.result[game.result.length - 1] == keywords.awayScore
      );
    }

    return output;
  }
  return output;
};
