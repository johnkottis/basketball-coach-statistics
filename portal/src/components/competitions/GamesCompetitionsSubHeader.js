import React from "react";
import { Link } from "react-router-dom";

const GamesCompetitionsHeader = () => {
  return (
    <>
      <h1>COMPETITIONS</h1>
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

export default GamesCompetitionsHeader;