import React from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

import "../../styles/searchNavigation.css";

const GamesSearchNav = () => {
  return (
    <>
      <List horizontal className="search-categories">
        <List.Item>
          <Link
            className="back-to-results"
            to={{
              pathname: "/games",
            }}
          >
            Search
          </Link>
        </List.Item>
        <List.Item>
          <Link
            className="back-to-results"
            to={{
              pathname: "/competitions",
            }}
          >
            Competitions
          </Link>
        </List.Item>

        <List.Item>
          <Link
            className="back-to-results"
            to={{
              pathname: "/opponents",
            }}
          >
            Opponents
          </Link>
        </List.Item>
      </List>
    </>
  );
};

export default GamesSearchNav;
