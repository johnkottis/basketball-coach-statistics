import React from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";

import { fetchGames, selectKeywords } from "../../actions";
import { uniqueEntries, gamesbyKeywords } from "../../utilities/filterData";
import { recordCompetition } from "../../utilities/getData";

import "../../styles/searchResults.css";

class OpponentData extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
    this.props.selectKeywords({});
  }

  renderList() {
    let jsonToArrayGames = [];
    let competitions;
    let competitionsData = [];

    for (let key in this.props.games) {
      jsonToArrayGames.push(this.props.games[key]);
    }

    competitions = jsonToArrayGames
      .map((game) => game.competition)
      .filter(uniqueEntries);

    competitions.map((competition) => {
      return competitionsData.push(
        recordCompetition(
          gamesbyKeywords(jsonToArrayGames, this.props.keywords),
          competition
        )
      );
    });

    return competitionsData.map((competition) => {
      if (this.props.keywords != undefined) {
        if (Object.keys(this.props.keywords).length >= 1) {
          return (
            <Table key={Date.now()}
              celled
              structured
              striped
              className="search-results"
              style={{
                display: competition.totalGames === 0 ? "none" : "table",
              }}
            >
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell width={2}>
                    {competition.competition}
                  </Table.HeaderCell>
                  <Table.HeaderCell width={2} textAlign="center">
                    Games
                  </Table.HeaderCell>
                  <Table.HeaderCell width={2} textAlign="center">
                    Games won
                  </Table.HeaderCell>
                  <Table.HeaderCell width={2} textAlign="center">
                    Games lost
                  </Table.HeaderCell>
                  <Table.HeaderCell width={2} textAlign="center">
                    Points scored
                  </Table.HeaderCell>
                  <Table.HeaderCell width={2} textAlign="center">
                    Points against
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell width={2}>Home</Table.Cell>
                  <Table.Cell width={2} textAlign="center">
                    {competition.totalGamesHome}
                  </Table.Cell>
                  <Table.Cell width={2} textAlign="center">
                    {competition.winHome}
                  </Table.Cell>
                  <Table.Cell width={2} textAlign="center">
                    {competition.lossHome}
                  </Table.Cell>
                  <Table.Cell width={2} textAlign="center">
                    {competition.totalPointsHomeFor}
                  </Table.Cell>
                  <Table.Cell width={2} textAlign="center">
                    {competition.totalPointsHomeAgainst}
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>Away</Table.Cell>
                  <Table.Cell width={2} textAlign="center">
                    {competition.totalGamesAway}
                  </Table.Cell>
                  <Table.Cell width={2} textAlign="center">
                    {competition.winAway}
                  </Table.Cell>
                  <Table.Cell width={2} textAlign="center">
                    {competition.lossAway}
                  </Table.Cell>
                  <Table.Cell width={2} textAlign="center">
                    {competition.totalPointsAwayFor}
                  </Table.Cell>
                  <Table.Cell width={2} textAlign="center">
                    {competition.totalPointsAwayAgainst}
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>Total</Table.Cell>
                  <Table.Cell width={2} textAlign="center">
                    {competition.totalGames}
                  </Table.Cell>
                  <Table.Cell width={2} textAlign="center">
                    {competition.winHome + competition.winAway}
                  </Table.Cell>
                  <Table.Cell width={2} textAlign="center">
                    {competition.lossHome + competition.lossAway}
                  </Table.Cell>
                  <Table.Cell width={2} textAlign="center">
                    {competition.totalPointsHomeFor +
                      competition.totalPointsAwayFor}
                  </Table.Cell>
                  <Table.Cell width={2} textAlign="center">
                    {competition.totalPointsHomeAgainst +
                      competition.totalPointsAwayAgainst}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          );
        }
      }
    });
  }

  render() {
    if (JSON.stringify(this.props.keywords) !== "{}") {
      return <>{this.renderList()}</>;
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
})(OpponentData);
