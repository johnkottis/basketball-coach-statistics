import React from "react";
import { connect } from "react-redux";
import { Image, List } from "semantic-ui-react";
import { fetchCoach } from "../../actions";

import "../../styles/coachCard.css";

class CoachDetails extends React.Component {
  componentDidMount() {
    this.props.fetchCoach();
  }

  renderCoach() {
    let jsonToArrayCoach = [];
    for (let key in this.props.coach) {
      jsonToArrayCoach.push(this.props.coach[key]);
    }

    if (jsonToArrayCoach.length > 0) {
      return (
        <>
          <div className="coach-card">
            <Image src={jsonToArrayCoach[0].personal.img} wrapped ui={false} />
            <List key={jsonToArrayCoach[0].personal.lastName}>
              <List.Item key="country">
                Country: {jsonToArrayCoach[0].personal.country}
              </List.Item>
              <List.Item key="bornIn">
                Born in: {jsonToArrayCoach[0].personal.bornIn}
              </List.Item>
              <List.Item key="nationalities">
                Nationalities: {jsonToArrayCoach[0].personal.nationality[0]}/
                {jsonToArrayCoach[0].personal.nationality[1]}
              </List.Item>
            </List>
          </div>
        </>
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
})(CoachDetails);
