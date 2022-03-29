import React from "react";
import { Link } from "react-router-dom";

const GamesSubHeader = () => {
  return (
    <>
      <h1>GAMES</h1>
      <Link
        className="back-to-results"
        to={{
          pathname: `/`,
        }}
      >
        &#x2190; back to homepage
      </Link>
    </>
  );
};

export default GamesSubHeader;
