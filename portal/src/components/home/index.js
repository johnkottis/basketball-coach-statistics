import React from "react";
import { Grid, Image, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

import games from "../../images/games.png";
import coach from "../../images/coach.png";

import "../../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>COACHING DATA</h1>
      <p>Select the relevant card to navitage to the relevant section</p>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8} textAlign="center">
            <Link to="/games">
              <Card className="navigation-card">
                <Image src={games} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>GAMES</Card.Header>
                </Card.Content>
              </Card>
            </Link>
          </Grid.Column>

          <Grid.Column width={8} textAlign="center">
            <Link to="/coach-john-kottis">
              <Card className="navigation-card">
                <Image src={coach} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>COACH JK</Card.Header>
                </Card.Content>
              </Card>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default Home;
