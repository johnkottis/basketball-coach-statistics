import React from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";

import { fetchGames, selectKeywords } from "../../actions";
import { gamesbyKeywords } from "../../utilities/filterData";
import { sortByDate } from "../../utilities/sortData";

import "../../styles/searchResults.css";

class GamesList extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
    this.props.selectKeywords({});
  }

  renderList() {
    let jsonToArrayGames = [];
    let gamesSortedByDate;
    for (let key in this.props.games) {
      jsonToArrayGames.push(this.props.games[key]);
    }
    gamesSortedByDate = jsonToArrayGames.sort(sortByDate);

    return gamesbyKeywords(gamesSortedByDate, this.props.keywords).map(
      (game) => {
        let gameResult = ``;
        if (game.result.length === 2) {
          gameResult = `${game.result[0]} - ${game.result[1]}`;
        } else if (game.result.length === 4) {
          gameResult = `40 minutes: ${game.result[0]} - ${game.result[1]} | Overtime: ${game.result[2]} - ${game.result[3]}`;
        } else {
          gameResult = `40 minutes: ${game.result[0]} - ${game.result[1]} | Overtime: ${game.result[2]} - ${game.result[3]} | Double Overtime: ${game.result[4]} - ${game.result[5]}`;
        }

        return (
          <Table.Row
            key={game.date}
            onClick={() => this.props.selectGame(game)}
          >
            <Table.Cell>{game.season}</Table.Cell>
            <Table.Cell>{game.date}</Table.Cell>
            <Table.Cell>{`${game.fixture[0]} - ${game.fixture[1]}`}</Table.Cell>
            <Table.Cell>{game.competition}</Table.Cell>
            <Table.Cell>{gameResult}</Table.Cell>
          </Table.Row>
        );
      }
    );
  }

  render() {
    if (JSON.stringify(this.props.keywords) !== "{}") {
      return (
        <>
          <Table celled structured striped className="search-results">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Season</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Game</Table.HeaderCell>
                <Table.HeaderCell>Competition</Table.HeaderCell>
                <Table.HeaderCell>Result</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{this.renderList()}</Table.Body>
          </Table>
        </>
      );
    } else return <></>;
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games.data,
    keywords: state.selectedKeywords,
  };
};

export default connect(mapStateToProps, {
  fetchGames,
  selectKeywords,
})(GamesList);
