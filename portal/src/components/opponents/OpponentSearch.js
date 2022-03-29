import React from "react";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";

import { getOpponents } from "../../utilities/getData";
import { selectKeywords, fetchGames } from "../../actions";

import "../../styles/searchForm.css";

var terms = {};

class OpponentSearch extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  handleChange = (e) => {
    terms[e.target.name] = null;
    terms[e.target.name] = e.target.value;
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
          this.props.selectKeywords(terms);
        }}
      >
        <Form.Group widths="equal">
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
        </Form.Group>
        <Form.Group>
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
  OpponentSearch
);