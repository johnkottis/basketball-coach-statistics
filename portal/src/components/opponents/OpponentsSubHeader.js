import React from "react";
import { Link } from "react-router-dom";

const OpponentsSubHeader = () => {
  return (
    <>
      <h1>Opponents</h1>
      <Link
        className="back-to-results"
        to={{
          pathname: "/",
        }}
      >
        &#x2190; back to homepage
      </Link>
    </>
  );
};

export default OpponentsSubHeader;