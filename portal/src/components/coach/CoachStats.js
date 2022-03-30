import React from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";
import { fetchCoach } from "../../actions";
import { sortBySeason } from "../../utilities/sortData";

import "../../styles/coachCard.css";
import "../../styles/searchResults.css";

class CoachStats extends React.Component {
  componentDidMount() {
    this.props.fetchCoach();
  }

  renderCoach() {
    let jsonToArrayCoach = [];
    for (let key in this.props.coach) {
      jsonToArrayCoach.push(this.props.coach[key]);
    }

    if (jsonToArrayCoach.length > 0) {
      let careerStats = jsonToArrayCoach[0].career;

      return (
        <Table celled structured className="search-results coach-stats">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Season</Table.HeaderCell>
              <Table.HeaderCell>Competition</Table.HeaderCell>
              <Table.HeaderCell>Team</Table.HeaderCell>
              {/* <Table.HeaderCell textAlign="center">Ranking</Table.HeaderCell> */}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {careerStats.map((year) => {
              console.log();
              return (
                <Table.Row key={year.season + year.competition + year.team}>
                  <Table.Cell>{year.season}</Table.Cell>
                  <Table.Cell>{year.competition}</Table.Cell>
                  <Table.Cell>{year.team}</Table.Cell>
                  {/* <Table.Cell>{jsonToArrayCoach.ranking}</Table.Cell> */}
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      );
    } else return <></>;
  }

  render() {
    return <>{this.renderCoach()}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    coach: state.coach.data,
  };
};

export default connect(mapStateToProps, {
  fetchCoach,
})(CoachStats);
