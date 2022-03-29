import React from "react";
import { Grid, List } from "semantic-ui-react";

const MainFooter = () => {
  return (
    <Grid className="main-footer">
      <Grid.Row>
        <Grid.Column width={4}>
          <List link>
            <List.Item active className="footer-links-h1">
              CONTACT DETAILS
            </List.Item>
            <List.Item as="a" mailto="johnkottis@gmail.com">
              johnkottis@gmail.com
            </List.Item>
            <List.Item as="a" href="https://www.cellfish.gr/" target="_blank">
              www.cellfish.gr
            </List.Item>
          </List>
        </Grid.Column>

        <Grid.Column width={4}>
          <List link>
            <List.Item active className="footer-links-h1">
              FIBA
            </List.Item>
            <List.Item
              as="a"
              href="https://www.fiba.basketball/"
              target="_blank"
            >
              FIBA BASKETBALL
            </List.Item>
          </List>
        </Grid.Column>

        <Grid.Column width={4}>
          <List link>
            <List.Item active className="footer-links-h1">
              England Basketball
            </List.Item>
            <List.Item
              as="a"
              href="https://www.basketballengland.co.uk"
              target="_blank"
            >
              www.basketballengland.co.uk
            </List.Item>
            <List.Item
              as="a"
              mailto="support@basketballengland.co.uk"
              target="_blank"
            >
              support@basketballengland.co.uk
            </List.Item>
          </List>
        </Grid.Column>

        <Grid.Column width={4}>
          <List className="smo" link>
            <List.Item active className="footer-links-h1">
              SOCIAL MEDIA
            </List.Item>
            <List.Item
              as="a"
              href="https://twitter.com/johnkottis"
              target="_blank"
            >
              <i className="twitter square big icon footer-smo"></i>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <span className="copyright">&copy; cellfish.gr 2022</span>
      </Grid.Row>
    </Grid>
  );
};

export default MainFooter;
