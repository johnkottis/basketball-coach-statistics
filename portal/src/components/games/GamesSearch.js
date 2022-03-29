import React from "react";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";

import {
  getOpponents,
  getCompetitions,
  getSeasons,
  getMyTeams,
} from "../../utilities/getData";
import { selectKeywords, fetchGames } from "../../actions";

import "../../styles/searchForm.css";

var terms = {};

class GamesSearch extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  handleChange = (e) => {
    terms[e.target.name] = null;
    terms[e.target.name] = e.target.value;
  };

  handleChangeRadio = (e, { name, value }) => {
    terms[name] = value;
  };

  handleClear = () => {
    terms = {};
    this.props.selectKeywords(terms);
    window.location.reload(false);
  };

  render() {
    let validGames = [];
    for (let key in this.props.games) {
      validGames.push(this.props.games[key]);
    }

    return (
      <Form
        className="search-form"
        onSubmit={() => {
          this.props.selectKeywords({});
          this.props.selectKeywords(terms);
        }}
      >
        <Form.Group widths="equal">
          {/* OPPONENT */}
          {
            <Form.Field
              label="My team"
              control="select"
              name="myTeam"
              onChange={this.handleChange}
            >
              <option key="noMyTeam" value={null}></option>
              {getMyTeams(validGames).map((myTeam) => (
                <option key={myTeam} value={myTeam}>
                  {myTeam}
                </option>
              ))}
            </Form.Field>
          }

          {/* OPPONENT */}
          {
            <Form.Field
              label="Opponent"
              control="select"
              name="opponent"
              onChange={this.handleChange}
            >
              <option key="noOpponent" value={null}></option>
              {getOpponents(validGames).map((opponent) => (
                <option key={opponent} value={opponent}>
                  {opponent}
                </option>
              ))}
            </Form.Field>
          }

          {/* SEASON */}
          {
            <Form.Field
              label="Season"
              control="select"
              name="season"
              onChange={this.handleChange}
            >
              <option key="noSeason" value={null}></option>
              {getSeasons(validGames).map((season) => (
                <option key={season} value={season}>
                  {season}
                </option>
              ))}
            </Form.Field>
          }

          {/* COMPETITION */}
          {
            <Form.Field
              label="Competition"
              control="select"
              name="competition"
              onChange={this.handleChange}
            >
              <option key="noCompetition" value={null}></option>
              {getCompetitions(validGames).map((competition) => (
                <option key={competition} value={competition}>
                  {competition}
                </option>
              ))}
            </Form.Field>
          }
        </Form.Group>
        <Form.Group widths="equal">
          {/* GOALS */}
          <Form.Input
            label="Home score"
            name="homeScore"
            control="input"
            type="number"
            min="0"
            onChange={this.handleChange}
          />
          <Form.Input
            label="Away score"
            name="awayScore"
            control="input"
            type="number"
            min="0"
            onChange={this.handleChange}
          />

          {/* COACH JK HOME AWAY */}
          {
            <Form.Field
              label="Home team"
              control="select"
              name="paoHomeAway"
              onChange={this.handleChange}
            >
              <option key="noHomeAway" value={null}></option>
              <option key="homeGames" value="home">
                Home court
              </option>
              <option key="awayGames" value="away">
                On the road
              </option>
            </Form.Field>
          }

          {/* GAME DURATION */}
          {
            <Form.Field
              label="Game Duration"
              control="select"
              name="gameDuration"
              onChange={this.handleChange}
            >
              <option key="noTime" value={null}></option>
              <option key="ninetyMinutes" value="regular">
                40 minutes
              </option>
              <option key="overtime" value="overtime">
                Overtime
              </option>
              <option key="doubleovertime" value="doubleovertime">
                Double Overtime
              </option>
            </Form.Field>
          }
        </Form.Group>
        <Form.Group className="search-btn-group">
          <Form.Button
            className="searchform-reset"
            secondary
            content="Clear filters"
            onClick={this.handleClear}
            color="grey"
            basic
          />
          <Form.Button
            className="searchform-search"
            content="Search"
            color="black"
          />
        </Form.Group>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return { keywords: state.selectedKeywords, games: state.games.data };
};

export default connect(mapStateToProps, { selectKeywords, fetchGames })(
  GamesSearch
);
