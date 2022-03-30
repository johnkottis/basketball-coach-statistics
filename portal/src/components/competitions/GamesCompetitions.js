import React from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";

import { fetchGames } from "../../actions";
import { uniqueEntries } from "../../utilities/filterData";
import { recordCompetition } from "../../utilities/getData";

import "../../styles/searchResults.css";

class GamesCompetitions extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
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
      return competitionsData.push(recordCompetition(jsonToArrayGames, competition));
    });

    return competitionsData.map((competition) => {
      return (
        <Table.Row key={competition.competition}>
          <Table.Cell>{competition.competition}</Table.Cell>
          <Table.Cell textAlign="center">{competition.totalGames}</Table.Cell>
          <Table.Cell textAlign="center">
            {competition.winHome + competition.winAway}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {competition.lossHome + competition.lossAway}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {competition.totalPointsHomeFor + competition.totalPointsAwayFor}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {competition.totalPointsHomeAgainst +
              competition.totalPointsAwayAgainst}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {competition.totalPointsHomeFor +
              competition.totalPointsAwayFor -
              competition.totalPointsHomeAgainst -
              competition.totalPointsAwayAgainst}
          </Table.Cell>
        </Table.Row>
      );
    });
  }

  render() {
    return (
      <>
        <Table celled structured striped className="search-results">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Competition</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Games</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Games won</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Games lost</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Points scored
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Points against
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Points difference
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderList()}</Table.Body>
        </Table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games.data,
    keywords: state.selectedKeywords,
  };
};

export default connect(mapStateToProps, { fetchGames })(GamesCompetitions);
