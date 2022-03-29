import {names} from "./const";
import {uniqueEntries} from "./filterData";

export const getOpponents = (games) => {
  let opponentsList = [];
  games.map((game) =>
    game.fixture.map((team) => {
      if (!names.includes(team)) opponentsList.push(team);
    })
  );
  return opponentsList.filter(uniqueEntries).sort();
};

export const getMyTeams = (games) => {
  let myTeamsList = [];
  games.map((game) =>
    game.fixture.map((team) => {
      if (names.includes(team)) myTeamsList.push(team);
    })
  );
  return myTeamsList.filter(uniqueEntries).sort();
};

export const getCompetitions = (games) => {
  let competitionList = [];
  games.map((game) => competitionList.push(game.competition));
  return competitionList.filter(uniqueEntries).sort();
};

export const getSeasons = (games) => {
  let seasonsList = [];
  games.map((game) => seasonsList.push(game.season));
  return seasonsList.filter(uniqueEntries).sort();
};

export const recordCompetition = (games, competition) => {
  let record = {
    totalPointsHomeFor: 0,
    totalPointsHomeAgainst: 0,
    totalPointsAwayFor: 0,
    totalPointsAwayAgainst: 0,
    winHome: 0,
    lossHome: 0,
    winAway: 0,
    lossAway: 0,
    totalGamesHome: 0,
    totalGamesAway: 0,
    totalGames: 0,
    competition: "",
  };

  games
    .filter((game) => game.competition === competition)
    .map((game) => {
      record.totalGames++;
      record.competition = competition;

      let teamA = Number(game.result[game.result.length - 2]);
      let teamB = Number(game.result[game.result.length - 1]);
      // HOME
      if (names.includes(game.fixture[0])) {
        record.totalGamesHome++;
        record.totalPointsHomeFor += game.result[game.result.length - 2];
        record.totalPointsHomeAgainst += game.result[game.result.length - 1];

        if (teamA > teamB) {
          record.winHome++;
        } else {
          record.lossHome++;
        }
      }
      // AWAY
      else {
        record.totalGamesAway++;
        record.totalPointsAwayFor += game.result[game.result.length - 2];
        record.totalPointsAwayAgainst += game.result[game.result.length - 1];

        if (teamA < teamB) {
          record.winAway++;
        } else if (teamA === teamB) {
          record.drawAway++;
        } else {
          record.lossAway++;
        }
      }
    });

  return record;
};

